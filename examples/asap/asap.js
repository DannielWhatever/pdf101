// as simple as possible

const pdf101 = require('../../index');

(async () => {
    const response = await pdf101.html2pdf('<h1>Hello World</h1>');
    console.log('response:', response);
    process.exit();
})();
