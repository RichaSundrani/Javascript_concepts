var qr = require('qr-image');
// qr.image - Readable stream with image data;
var qr_svg = qr.image('https://ieltsliz.com/ielts-listening/', { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('myQR.png'));

// qr.imageSync - string with image data. (Buffer for png);

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// var fs = require('fs');
// var qr = require('qr-image');
// var config = require("./config.js");
// const pngToJpeg = require('png-to-jpeg');
// var url = 'https://ieltsliz.com/ielts-listening/';
// async function getQR(url) {
//     // qr.image - Readable stream with image data;
//     var qr_svg = qr.image(url, { type: 'png' });
//     // qr_svg.pipe(fs.createWriteStream('myQr.png'));

//     let buffer = qr.imageSync(url, { type: 'png' });
//     pngToJpeg({ quality: 90 })(buffer)
//         .then(output => fs.writeFileSync("./myQR.jpeg", output));
// }

// getQR(url);