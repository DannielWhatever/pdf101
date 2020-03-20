## pdf101 :zap:

[![Build Status](https://travis-ci.com/DannielWhatever/pdf101.svg?branch=master)](https://travis-ci.com/DannielWhatever/pdf101)  
  
  
Simply a wrapper to generate pdf in one line. Not very useful hehe.

#### Using with just a html  
  
```javascript
const pdf101 = require('pdf101');

const myHtml = '<h1>Hello World</h1>';
const response = await pdf101.html2pdf(myHtml);
```  
  
#### Using with variables  

*Note: pdf101 rely on handlebar for templates. So you template should be just like in handlebar.* 
  
```javascript
const pdf101 = require('pdf101');

const template = '<h1>Hello {{ name }}</h1>';
const response = await pdf101.html2pdf(template, { name: 'World'});
```  

---  
  
