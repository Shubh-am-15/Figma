function opentab(evt, tabName) {

  var i, tablecontent;
  navbarTitle = document.getElementsByClassName("navbarTitle")[0];
  tablecontent = document.getElementsByClassName("tablecontent");
  for (i = 0; i < tablecontent.length; i++) {
    if (tablecontent[i].id == tabName) {
      tablecontent[i].style.display = "flex";
      navbarTitle.innerHTML = tabName;
    }
    else {
      tablecontent[i].style.display = "none";
    }
    // 
  }
}
gridItem = document.getElementsByClassName("grid-item");
color = ['#66ff66', '#6666ff', '#ffff66', '#ff99cc', '#00ff99', '#996600', '#33ccff', '#ff9933'];
for (i = 0; i < gridItem.length; i++) {
  gridItem[i].style.backgroundColor = color[i];

}

var modal = document.getElementById("myModal");


var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  video.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
text = '';
//  rendering dashboard
for (i = 0; i < 2; i++) {

  text += `<div class="card m-3" style="width: 18rem; height:30rem">
    <img src="0001.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Click here</a>
    </div>
  </div>`;
  text += `<div class="card m-3" style="width: 18rem; height:30rem">
    <img src="0003.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Click here</a>
    </div>
  </div>`;
}
document.getElementById("Dashboard").innerHTML = text;