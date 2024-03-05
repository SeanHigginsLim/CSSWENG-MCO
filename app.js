const xl = require('excel4node');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require(`body-parser`);
const routes = require('./routes/routes.js');
const exphbs = require('express-handlebars');
const hbs = require('hbs');
const connect = require('./public/database/server.js');
const fileUpload = require('express-fileupload');
// const multer  = require('multer')
// const { app, protocol, BrowserWindow, ipcMain } = require('electron');
// const axios = require('axios');
const appExp = express();
const path = require('path');
// const url = require('url');
// const fs = require('fs');
// const os = require('os');

dotenv.config();
appExp.use(fileUpload());
// let mainWindow

appExp.set(`view engine`, `hbs`);
// hbs.registerPartials(__dirname + '/views/partials')
// hbs.registerPartials(__dirname + `/views/partials`)

appExp.use(express.static(`public`));
appExp.use(bodyParser.urlencoded( {extended: false} ))
appExp.use(`/`, routes);

// var excelStorage = multer.diskStorage({  
//   destination:(req,file,cb)=>{  
//        cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
//   },  
//   filename:(req,file,cb)=>{  
//        cb(null,file.originalname);  
//   }  
// });  
// var excelUploads = multer({storage:excelStorage}); 

appExp.listen(process.env.SERVER_PORT, async function(){
  console.log("Running on port: " + process.env.SERVER_PORT);
  try{
      await connect();
      console.log("connected to database!");
  }catch(err){
      console.error(err);
      console.log("Failed to connect to database");
  }
});

// const express = require('express')
// const mongoose = require('mongoose')
// const multer = require('multer')
// const Student  = require('./models/student')
// const csvtojson = require('csvtojson')

// const app = express()

// mongoose.connect('mongodb://localhost:27017/MongoExcelDemo').then(() => {     // MongoDB connection
//     console.log('database connected')
// });


// app.use(express.static('public'))    // static folder
// app.set('view engine','ejs')             // set the template engine

// app.listen(3000, () => {
//      console.log('server started at port 3000')
// })

// var excelStorage = multer.diskStorage({  
//   destination:(req,file,cb)=>{  
//        cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
//   },  
//   filename:(req,file,cb)=>{  
//        cb(null,file.originalname);  
//   }  
// });  
// var excelUploads = multer({storage:excelStorage}); 
// app.get('/',(req,res) => {
//      res.render('index.ejs');
// })
// // upload excel file and import in mongodb
// app.post('/uploadExcelFile', excelUploads.single("uploadfile"), (req, res) =>{  
//      importFile('./public' + '/excelUploads/' + req.file.filename);
//           function importFile(filePath){
//             //  Read Excel File to Json Data
//               var arrayToInsert = [];
//               csvtojson().fromFile(filePath).then(source => {
//             // Fetching the all data from each row
//               for (var i = 0; i < source.length; i++) {
//                   console.log(source[i]["name"])
//                   var singleRow = {
//                       name: source[i]["name"],
//                       email: source[i]["email"],
//                       standard: source[i]["standard"],
//                   };
//                   arrayToInsert.push(singleRow);
//               }
//            //inserting into the table student
//            Student.insertMany(arrayToInsert, (err, result) => {
//                   if (err) console.log(err);
//                       if(result){
//                           console.log("File imported successfully.");
//                           res.redirect('/')
//                       }
//                   });
//               });
//          }
// })