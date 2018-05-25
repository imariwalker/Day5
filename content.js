// document.getElementById(id);
// var content = document.getElementsByTagName('h1')[0];
// content.style.color = "blue";
// comment out your code each time you change something
// var portraitId = document.getElementById('portrait')[0];
// portraitId.src = "tumblr-logo.png";
// var mainHeading = document.getElementsByTagName('h1')[0];
// mainHeading.style.color = "red";
// var mainBody = document.getElementsByTagName('p')[0];
// mainBody.style.color = "red";
// var primaryHeading = document.getElementsByTagName('h1')[0];
// primaryHeading.innerHTML = "My Portfolio";
// var aboutPage = document.getElementsByTagName('header-footer-anchor')[0];
// aboutPage.innerHTML = "About Me 2"
// var pageBody = document.getElementsByTagName('body')[0];
// var newImg = document.createElement('img');
// newImg.src = 'http://placecorgi.com/260/180';
// newImg.style.border = '2px solid pink';
// pageBody.appendChild(newImg);
// var newParagraph  = document.createElement('p');
// var paragraphText = document.createTextNode('Hey, I am a cute corgi! Hear me roar!');
// newParagraph.appendChild(paragraphText);
// pageBody.appendChild(newParagraph);
// var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
// list.insertBefore(newItem, list.childNodes[0]);
// var paragraph = document.getElementsByTagName('p')[0];
// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('End of the paragraph');
// newParagraph.appendChild(paragraphText);
// paragraph.appendChild(newParagraph);
// var myLink = document.getElementById("jsLink");

// var myLink = document.getElementById("jsLink");
//
// mylink.addEventListener("click", function (event) {
//     alert("Hello World!");
// });
var myLink = document.getElementById("jsLink");
var Hello = function(event){
  window.open("http://www.melanatedstem.com/");
  };
  myLink.addEventListener("click", Hello);
