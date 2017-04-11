var mammoth = require("mammoth");
var pdf = require('html-pdf');

function convertToPdf(inputDocFilePathWithFileName, outputDocFilePathWithFileName) {
  mammoth.convertToHtml({
      path: inputDocFilePathWithFileName
    })
    .then(function (result) {
      var html = result.value; // The generated HTML 
      pdf.create(html).toFile(outputDocFilePathWithFileName, function (err, res) {
        console.log(res.filename);
        if (err) return console.log(err);
        console.log(res);
      });
      var messages = result.messages; // Any messages, such as warnings during conversion 
    })
    .done();
}

module.exports = convertToPdf;