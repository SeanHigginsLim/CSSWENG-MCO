// const xlsx = require('node-xlsx');
// const csvtojson = require("csvtojson");
// const multer  = require('multer');
// const upload = multer({ storage: multer.memoryStorage() });
const xlsxtojson = require('xlsx-to-json-lc');

const importController = {
    getMain: function(req, res) {
        res.render(`index`);
    },

    saveFile: async function(req, res) {
    //     const fileName = req.body.myFile;
    //     console.log("file =", fileName.data);
    //     // upload.single('csvFile')
    //     let sampleFile = req.files.fileName.data.toString();
    //   // convert it to JSON
      
    //     // upload.single('csvFile')
    //     const json_data = await csvtojson().fromString(sampleFile);

    //     // console.log("in save file");
    //     // const file = req.body.myFile;

    //     // console.log("1 this file is:", file);
    //     // upload.single('csvFile')
    //     console.log(json_data);
        const excelFile = req.files.myFile; // Assuming the input field name is 'excelFile'

        // Convert the Excel file to JSON
        try{
            xlsxtojson({
                input: excelFile.data, // Buffer containing the file data
                output: null, // Output file (null for in-memory conversion)
                lowerCaseHeaders: true, // Convert headers to lowercase
            }, (err, result) => {
                if (err) {
                    return res.status(500).send('Error converting Excel to JSON.');
                }
                // Send the JSON data as the response
                res.json(result);
            });
        } catch(error) {
            console.log("I AM ERROR", error);
        }
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