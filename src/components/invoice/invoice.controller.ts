import { CoreController } from '../core/ core.controller';
import { InvoiceModel } from './model/invoice.model';
import { IInvoice } from './model/invoice.interface';
import { InvoiceDao } from './dao/invoice.dao';
import { InvoiceProductModel } from '../invoiceProduct/model/invoiceProduct.model';
import { InvoiceProductDao } from '../invoiceProduct/dao/invoiceProduct.dao';
import { ProductDao } from '../product/dao/product.dao';
import { ProductModel } from '../product/model/product.model';
import { CompanyModel } from '../company/model/company.model';

export class InvoiceController extends CoreController<InvoiceModel, IInvoice, { [key: string]: any }, InvoiceDao> {
  constructor(private invoiceDao: InvoiceDao,
    private invoiceProductDao: InvoiceProductDao,
    private productDao: ProductDao) {
    super(invoiceDao);
  }
  
  public getDetailedInvoice(id: number): Promise<{ [key: string]: any }[]> {
    return super.query({
      where: {
        id: id
      },
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

  public async upsert(invoice: IInvoice) {
    const DBInvoice = invoice;
    const buyer = invoice.buyer;
    const seller = invoice.seller;
    DBInvoice.buyer_id = buyer.id;
    DBInvoice.seller_id = seller.id;

    const saved =  invoice.id ? await super.update(invoice.id, DBInvoice) : await super.save(DBInvoice);

    const invoiceId = saved['null'] || saved.id;

    const invoiceProducts = invoice.invoiceProducts;

    await Promise.all(invoiceProducts.map(async (IP) => {
      IP.invoice_id = invoiceId;
      const product = IP.product;

      if (product.id) {
        const products = await this.productDao.update(product.id, product);
        const prod = products;
        IP.product_id = prod.id;
      } else {
        const prod = await this.productDao.save(product);
        IP.product_id = prod['null'];
      }

      return IP.id ? this.invoiceProductDao.update(IP.id, IP)[1]: this.invoiceProductDao.save(IP);
    }));

    return saved;
  }
}