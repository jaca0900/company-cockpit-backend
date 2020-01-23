DROP SCHEMA IF EXISTS CompanyManager;
CREATE SCHEMA CompanyManager;

USE CompanyManager;

CREATE TABLE IF NOT EXISTS company(
	id SERIAL PRIMARY KEY,
    nip VARCHAR(60) UNIQUE NOT NULL,
    company_name VARCHAR(60),
    address VARCHAR(60),
    is_owned_by_user BOOLEAN
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS user(
    id SERIAL PRIMARY KEY NOT NULL,
    login VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    e_mail VARCHAR(50) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS user_company(
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    company_id BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id),
    FOREIGN KEY(company_id) REFERENCES company(id)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pkd(
    id SERIAL PRIMARY KEY,
    code VARCHAR(5) NOT NULL,
    description VARCHAR(255),
    vat integer
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pkd_company(
    id SERIAL PRIMARY KEY,
    pkd_id BIGINT UNSIGNED NOT NULL,
    company_id BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(pkd_id) REFERENCES pkd(id),
    FOREIGN KEY(company_id) REFERENCES company(id)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS invoice(
    id SERIAL PRIMARY KEY,
    seller_id BIGINT UNSIGNED NOT NULL,
    buyer_id BIGINT UNSIGNED NOT NULL,
    total_netto DOUBLE,
    total_brutto DOUBLE,
    pay_date DATETIME,
    creation_date DATETIME,
    sell_date DATETIME,
    invoice_number VARCHAR(50),
    account_number VARCHAR(50),
    payment_method VARCHAR(50),
    type VARCHAR(50),
    FOREIGN KEY(seller_id) REFERENCES company(id),
    FOREIGN KEY(buyer_id) REFERENCES company(id)
    -- user_id BIGINT UNSIGNED NOT NULL
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    unit VARCHAR(50),
    unit_price DOUBLE,
    vat DOUBLE
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS invoice_product(
    id SERIAL PRIMARY KEY,
    invoice_id BIGINT UNSIGNED NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,
    units INTEGER
)ENGINE=InnoDB;

INSERT INTO `user` (e_mail, first_name, id, last_name, login, password) VALUES ("jaca09001@gmail.com", "Jacek","1","Bednarczyk","jabedn","pass");

Emisja dokumentów księgowych