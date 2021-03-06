CREATE TABLE Users(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   lastName VARCHAR NOT NULL,
   email VARCHAR NOT NULL,
   phone VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   address VARCHAR NOT NULL,
   rol VARCHAR NOT NULL
);

CREATE TABLE Products(
   id SERIAL PRIMARY KEY,
   title VARCHAR NOT NULL,
   description TEXT NOT NULL, 
   price INTEGER NOT NULL,
   stock INTEGER NOT NULL,
   CHECK (stock >= 0),
   imageUrl VARCHAR NOT NULL,
   public_id VARCHAR NOT NULL
);

CREATE TABLE Products_TypeOfProducts(
   id SERIAL PRIMARY KEY,
   typeOfProductId INTEGER,
   productId INTEGER,
   FOREIGN KEY (productId) REFERENCES Products(id),
   FOREIGN KEY (typeOfProductId) REFERENCES TypeOfProduct(id)
);


CREATE TABLE TypeOfProduct(
   id SERIAL PRIMARY KEY,
   title VARCHAR NOT NULL,
   description TEXT NOT NULL
);

CREATE TABLE Carts(
   id SERIAL PRIMARY KEY,
   userId INTEGER,
   productId INTEGER,
   quantity INTEGER,
   FOREIGN KEY (userId) REFERENCES Users(id),
   FOREIGN KEY (productId) REFERENCES Products(id)
)

CREATE TABLE Orders(
   id SERIAL PRIMARY KEY,
   userId INTEGER,
   productId INTEGER,
   quantity INTEGER,
   FOREIGN KEY (userId) REFERENCES Users(id),
   FOREIGN KEY (productId) REFERENCES Products(id)
)

