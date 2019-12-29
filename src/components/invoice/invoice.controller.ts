import { CoreController } from '../core/ core.controller';
import { InvoiceModel } from './model/invoice.model';
import { IInvoice } from './model/invoice.interface';
import { InvoiceDao } from './dao/invoice.dao';
import { InvoiceProductModel } from '../invoiceProduct/model/invoiceProduct.model';
import { InvoiceProductDao } from '../invoiceProduct/dao/invoiceProduct.dao';
import { ProductDao } from '../product/dao/product.dao';
import { ProductModel } from '../product/model/product.model';
import { CompanyModel } from '../company/model/company.model';

export class InvoiceController extends CoreController<InvoiceModel, IInvoice, InvoiceDao> {
  constructor(private invoiceDao: InvoiceDao,
    private invoiceProductDao: InvoiceProductDao,
    private productDao: ProductDao) {
    super(invoiceDao);
  }
  
  public getDetailedInvoice(id: number): Promise<IInvoice[]> {
    return super.query({
      include: [{all: true}, {
        model: InvoiceProductModel,
        include: [ ProductModel ]
      },{
        model: CompanyModel,
        as: 'buyer',
      }, {
        model: CompanyModel,
        as: 'seller'
      }]
    });
  }

  public async save(invoice: IInvoice) {
    const DBInvoice = invoice;
    const buyer = invoice.buyer;
    const seller = invoice.seller;
    DBInvoice.buyer_id = buyer.id;
    DBInvoice.seller_id = buyer.id;

    const created = await super.save(invoice);

    const invoiceProducts = invoice.invoiceProducts;

    await Promise.all(invoiceProducts.map(async (IP) => {
      IP.invoice_id = created.id;
      const product = IP.invoiceProduct;

      if (product.id) {
        const products = await this.productDao.update(product.id, product);
        const prod = products[1][0];
        IP.product_id = prod.id;
         
      } else {
        const prod = await this.productDao.save(product);
        IP.product_id = prod.id;
      }

      return IP.id ? this.invoiceProductDao.update(IP.id, IP)[1]: this.invoiceProductDao.save(IP);
    }));

    return created;
  }
}