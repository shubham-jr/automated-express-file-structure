const httpStatus = require("http-status");
const multer = require("multer");
const ApiError = require("./ApiError");
const path = require("path");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "files"));
  },

  filename: (req, file, cb) => {
    // cb(null, Date.now().toString() + '-' + req.user.id + '-' + file.originalname);
    cb(null, Date.now().toString() + "." + file.originalname.split(".")[1]);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "application/pdf",
  ];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(
      new ApiError(httpStatus.BAD_REQUEST, "Only image/pdf are allowed")
    );
  }
  cb(null, true); //continue upload
};

module.exports.fileUpload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});
