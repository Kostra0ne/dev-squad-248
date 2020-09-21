const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "foo",
    // allowedFormats: ["jpg", "png"],
    format: async (req, file) => {
      // async code using `req` and `file`
      // ...
      return "jpeg";
    },
    // format: "jpeg", // supports promises as well
    // public_id: (req, file) => "computed-filename-using-request",
  },
});

const uploader = multer({ storage: storage });

module.exports = uploader;
