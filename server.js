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
const mongodb = require('mongodb');
const fs = require('fs');
var mongoClient = mongodb.MongoClient;

 
// var url ='mongodb+srv://admin-ankur:test123@cluster0-8xn6c.mongodb.net/drive';
 
// mongoose.connect(url, function(err, db) {
 
//     if (err) {
//         console.log('Sorry unable to connect to MongoDB Error:', err);
//     } else {
 
//         var bucket = new mongodb.GridFSBucket(db, {
//             chunkSizeBytes: 1024,
//             bucketName: 'uploads'
//         });
 
//         bucket.openDownloadStreamByName('ankur@gmail.com-wallpaper.jpg').pipe(
//             fs.createWriteStream('c:\\demo\\dog.jpg')).on('error',
//             function(error) {
//                 console.log('Error:-', error);
//             }).on('finish', function() {
//             console.log('done!');
//             process.exit(0);
//         });
//     }
// });

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

let dummy=
    {
        "ok": true,
        "members": [{
                "id": "W012A3CDE",
                "real_name": "Egon Spengler",
                "tz": "America/Los_Angeles",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "Mar 1 2020 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2020  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "W07QCRPA4",
                "real_name": "Glinda Southgood",
                "tz": "Asia/Kolkata",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "Mar 1 2020 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2020  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "Q07QCRPB5",
                "real_name": "Ankur Dwivedi",
                "tz": "India/Allahabad",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Aug 15 2020  11:11AM",
                        "end_time": "Aug 15 2020 2:00PM"
                    },
                    {
                        "start_time": "Aug 15 2020  5:33PM",
                        "end_time": "Aug 15 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "Y07QCRPB6",
                "real_name": "Philiph",
                "tz": "Africa/Madagascar",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Aug 15 2020  11:11AM",
                        "end_time": "Aug 15 2020 2:00PM"
                    }
                ]
            }
        ]
    }


app.get('/api/demo', (req, res) => {
  res.send(dummy);
});
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
          
          if(files[x].filename.split("-")[0]===req.body.email){
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

        try{
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe( fs.createWriteStream('c:\\demo\\'+file.filename)).on('finish', function() {
          console.log('done!');
          process.exit(0);});
  
      
        }catch(err){

        }
      

    });

    

    
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