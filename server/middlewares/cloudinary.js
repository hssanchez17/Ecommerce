const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name:'dfsvyutds',
  api_key:'778616817191929',
  api_secret:'zpIihTWgrhrzjajNc5L00PO_XCo'    
})


module.exports ={
  uploadImage(image){
    let uniqueFilename = new Date().toISOString();
    let imageconfig ={resource_type: "image", public_id: `instagram-clone/${uniqueFilename}`,
    overwrite: true};
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(image.path, imageconfig,
      function(error, result) {resolve(result)});
    })
  }
}

