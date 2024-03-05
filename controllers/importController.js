const xlsx = require('node-xlsx');
const csvtojson = require("csvtojson");
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const importController = {
    getMain: function(req, res) {
        res.render(`index`);
    },

    saveFile: async function(req, res) {
        const fileName = req.body.myFile;
        console.log("file =", fileName.data);
        // upload.single('csvFile')
        let sampleFile = fileName.data.toString();
      // convert it to JSON
      
        // upload.single('csvFile')
        const json_data = await csvtojson().fromString(sampleFile);

        // console.log("in save file");
        // const file = req.body.myFile;

        // console.log("1 this file is:", file);
        // upload.single('csvFile')
        console.log(json_data);
    },

    // uploadUserData: async function(req, res) {
    //     try {
    //         const options = {
    //                 formData : {
    //                     'upload': String(req.file.buffer)
    //                 },
    //                 headers: {
    //                     authorization: req.token,
    //                     'Content-type': 'multipart/form-data'
    //                 },
    //                 json: true
    //         };
    //         const response = await this.http.post.exec(
    //                 '/somePostUrl/',
    //                 options
    //         );
    //         return res.status(200).json(response.body);
    //     }catch (error) {
    //         return (error);
    //     }
    //     console.log(String(req.file.buffer))
    // },

    // createSchema: function(req, res) {
    //     const file = req.params.file;
    //     console.log("2 this file is:", file);
        
    //     var obj = xlsx.parse(file); // parses a file
    //     console.log("data = ", obj);
    // },
};

module.exports = importController;