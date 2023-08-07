var slide = ["./img/banner0.png", "./img/banner1.png", "./img/banner2.png"];
function loadanh() {
  slide;
}
var index = 0;
function nextbtn() {
  if (index == slide.length - 1) {
    index = 0;
    document.getElementById("imgs").src = slide[index];
  }
  else {
    index++;
    document.getElementById("imgs").src = slide[index];
  }
}
function prevbtn() {
  if (index == 0) {
    index = slide.length - 1;
    document.getElementById("imgs").src = slide[index];
  }
  else {
    index--;
    document.getElementById("imgs").src = slide[index];
  }
}
function Sbtn(index) {
  for(var i = 0;i<slide.length;i++){
    if(i == index){
      document.getElementById("imgs").src = slide[index];
    }
  }
}

