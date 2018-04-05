let mybox = document.querySelector('.box')

mybox.style.display='none';

function show(){
  mybox.style.display='';
  toggle.style.display='none';
}

setTimeout(function(){ alert("Des chattes en chaleur t'attendent près de chez toi !"); }, 10000);

function mySearch () {

let go = "http://www.google.fr/#q="

raw = document.getElementById('mysearchbar').value;

var replaced = raw.replace(/ /g, '+');

let url = go + replaced;

open (url);
}
