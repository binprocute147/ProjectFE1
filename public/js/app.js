// chèn hình ảnh để sau 3s sẽ đổi ảnh 1 lần và click vào < > sẽ chuyển ảnh tới hoặc lui 
var images = ["public/images/1.jpg", "public/images/2.jpg"];
var currentImage = 0;

document.getElementById("prevBtn").addEventListener("click", function () {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  document.getElementById("myImage").src = images[currentImage];
});

document.getElementById("nextBtn").addEventListener("click", function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  document.getElementById("myImage").src = images[currentImage];
});
setInterval(function () {
  currentImage++;
  if (currentImage >= images.length) {
  currentImage = 0;
  }
  document.getElementById("myImage").src = images[currentImage];
 }, 3000);

//  khi người dùng lướt xuống thì thanh navbar sẽ di chuyển lên đầu trang 
 window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.remove('position-absolute');
        navbar.classList.add('position-fixed');
        navbar.style.top = "0";
    } else {
        navbar.classList.remove('position-fixed');
        navbar.classList.add('position-absolute');
        navbar.style.top = "50px";
    }
};

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
        zoom: 12
      });
    }, function(error) {
      console.log("Error: ", error);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

