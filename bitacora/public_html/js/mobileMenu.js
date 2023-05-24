var openButton = document.getElementById('openButton');
var sideMenu = document.getElementById('sideMenu');

openButton.addEventListener('click', function() {
  sideMenu.classList.toggle('moved');
});
