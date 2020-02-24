{
  "name": "ecommerce",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon app.js",
    "serve": "nodemon server/app.js --exec babel-node"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    //COnectar servidores(Back y front)
    "axios": "^0.19.2",
    //Encriptar contraseña
    "bcryptjs": "^2.4.3",
    //Permier pasar los datos de un formulario
    "body-parser": "^1.19.0",
    //Una api que permite guardar imagenes en la nube
    "cloudinary": "^1.19.0",
    //Guarda la sesion de un usuario
    "cookie-session": "^1.4.0",
    //Permite que 2 serviders se manden info
    "cors": "^2.8.5",
    //Express es express
    "express": "^4.17.1",
    //Si validaciones
    "express-validator": "^6.4.0",
    //Te da mensajes del estado del servidor
    "morgan": "^1.9.1",
    //Permite subir archivos al servidor
    "multer": "^1.4.2",

    //Manejo de auth.
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",

    //POstgres
    "pg": "^7.18.1",
    "pg-hstore": "^2.3.3"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/node": "^7.8.4",
    "@babel/preset-env": "^7.8.4"
  }
}
