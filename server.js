const express = require('express')
const app = express()
const port = 3000

const apiRoutes =require("./routes")

const bodyParser =require("body-parser")
const fileUpload=require("express-fileupload")
const cors=require("cors")
const path=require("path")

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/assets/",
  })
);
app.use(cors());
apiRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})