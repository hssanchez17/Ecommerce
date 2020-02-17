CREATE TABLE Users(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   lastName VARCHAR NOT NULL,
   email VARCHAR NOT NULL,
   phone VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   address VARCHAR NOT NULL
);

CREATE TABLE Products(
   id SERIAL PRIMARY KEY,
   title VARCHAR NOT NULL,
   description TEXT NOT NULL, 
   price INTEGER NOT NULL,
   stock INTEGER NOT NULL,
   imageUrl VARCHAR NOT NULL,
   public_id VARCHAR NOT NULL
);


CREATE TABLE TypeOfProduct(
   id SERIAL PRIMARY KEY,
   title VARCHAR NOT NULL,
   description TEXT NOT NULL
);