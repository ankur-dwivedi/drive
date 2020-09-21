const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");
const app = express();
const crypto = require('crypto');
const multer =require('multer');
const GridFsStorage=require('multer-gridfs-storage');
const Grid=require('gridfs-stream');
const methodOverride = require('method-override');
const fs = require('fs');


const port = process.env.PORT || 5000;
let current_user="current"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(require('connect-livereload')());

mongoose.connect("mongodb+srv://admin-ankur:test123@cluster0-8xn6c.mongodb.net/drive", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});


let gfs;
const mongoURI = 'mongodb+srv://admin-ankur:test123@cluster0-8xn6c.mongodb.net/drive';
const conn = mongoose.createConnection(mongoURI);

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });
  
  // Create storage engine
  const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename =current_user+"-"+ file.originalname// + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });


const userSchema = {
  name: String,
  email: String,
  password: String,
  date: Date
};
const User = mongoose.model("user", userSchema);


app.route("/api/user")
.get(function(req, res) {
    User.find({}, function(err, foundData) {
        if (!err) {
          res.send(foundData);
        } else {
          res.send(err);
        }
      });
  })
.post(function(req, res) {

    const d =new Date();
    const u = new User({
      name: req.body.name,
      email:req.body.email,
      password:req.body.password,
      date:d
    });
    User.find({"email":req.body.email}, function(err, foundData) {
        if (!err ) {
        if(foundData[0])
          res.send("email already register");
          else
          {
            u.save(function(err) {
                if (!err) {
                  res.send("Sucessfully added a new user");
                } else {
                  res.send(err);
                }
              });
          }
        } else {
          res.send(err);
        }
      });

  });

  app.post("/api/login",function(req, res) {

    User.find({"email":req.body.email}, function(err, foundData) {
        if (!err ) {
        if(!foundData[0])
          res.send("email not register");
          else
          {
            if(foundData[0].get("password")===req.body.password)
                res.send("Sucessfully logged in")
            else
            res.send("Incorrect password")
          }
        } else {
          res.send(err);
        }
      });

  });

  app.post('/api/currrent_user',(req, res) => {
    
    current_user=req.body.email
    res.send("done")
  });
    app.post('/api/upload',upload.single('file'),(req, res) => {
        
        res.send(req.file );
    });
  
 
  app.post('/api/file', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }
  
      // Files exist
      let temp=[]
      for(let x=0;x<files.length;x++){
          
          if(files[x].filename.split("-")[0]===req.body.email || req.body.email==="admin@gmail.com"){
            if((!req.body.file || req.body.file==="")||(req.body.file && req.body.file!="" && req.body.file===files[x].filename.substring(files[x].filename.indexOf("-")+1)))
              temp.push(files[x])
         

         }
      }
      return res.json(temp);
    });
  });

  app.post('/api/file/download', (req, res) => {
    // Check file exist on MongoDB

var filename =req.body.filename;
    gfs.files.findOne({ filename:filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }

      // 'c:\\demo\\'
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe( fs.createWriteStream( __dirname + '/upload/'+file.filename)).on('finish', function() {
          console.log('done!');
          var fileLocation = path.join('./upload',file.filename);
          res.download(fileLocation, file.filename);
          });
        //readstream.pipe(res)

    });
});  

app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./upload',file);
  console.log(fileLocation);
  res.download(fileLocation, file);
  });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
  app.listen(port, () => console.log(`Listening on port ${port}`));