// Dependencies
const phantomHtmlToPdf = require('phantom-html-to-pdf');
const phantomjsPrebuilt = require('phantomjs-prebuilt');
const Handlebars = require('handlebars');

// Configure library
const options = { phantomPath: phantomjsPrebuilt.path };
const conversion = phantomHtmlToPdf(options);

// Function html2pdf n_n
const html2pdf = async function(template, args) {
    return new Promise((resolve, reject) => {
        try {
            const html = args ? Handlebars.compile(template)(args) : template;
            conversion({ html }, (err, { stream }) => {
                if (err) throw err;
                stream.on('readable', () => {
                    const reading = stream.read();
                    if (reading) {
                        resolve(reading.toString('base64'));
                    }
                });
            });
        } catch (err) {
            reject(err);
        }
    });
};

// Declare exports
module.exports = html2pdf;
//  the-end ~
