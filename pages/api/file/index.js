import nextConnect from "next-connect";
import multer from "multer";
var storage = multer.diskStorage(
  {
    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => cb(null, file.originalname),
  }
  // fileFilter: function (req, file, callback) {
  //   var ext = path.extname(file.originalname);
  //   if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
  //     return callback(new Error("PNG, JPG만 업로드하세요"));
  //   }
  //   callback(null, true);
  // },
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
);

const app = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

var upload = multer({ storage: storage });
app.post(upload.array("file"), function (req, res) {
  res.json(req.files.map((v) => v.filename));
});

export default app;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
