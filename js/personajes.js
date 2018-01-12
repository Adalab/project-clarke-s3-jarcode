var body = document.querySelector("body");
var gallery = document.querySelector(".gallery");
var videoItems = gallery.querySelectorAll(".gallery__item--video");
var imageItems = gallery.querySelectorAll(".gallery__item--image");

function createModal(content, type) {
  var container;
  var containerType;
  var myModal;
  var closeButton = '<button class="modal__closeBTN">X</button>';
  if (type === "video") {
    containerType = 'modal__container--video';
  } else {
    containerType = 'modal__container--image';
  }

  container = '<div class="modal__container ' + containerType + '">' + content + closeButton + '</div>';

  myModal = '<div class="modal"><div class="modal__overlay"></div>' + container + '</div>';
  return myModal;
}

function openVideoModal(e) {
  console.log('click');
  var videoSRC = e.currentTarget.getAttribute("data-src");
  var videoContent = '<iframe class="modal__videocontent" src="' + videoSRC + '" frameborder="0" X-Frame-Options: ALLOW-FROM https://youtube.com/ allowfullscreen></iframe>';
  var videoModal = createModal(videoContent, "video");
  body.insertAdjacentHTML( 'beforeend', videoModal );
  var overlay = body.querySelector('.modal__overlay');
  var closeBTN = body.querySelector('.modal__closeBTN');

  overlay.addEventListener('click', closeModal);
  closeBTN.addEventListener('click', closeModal);

}

function openImageModal(e) {
  console.log('click');
  var imageSRC = e.currentTarget.getAttribute("data-src");
  var imageContent = '<img class="modal__imagecontent" src="' + imageSRC + '">';
  var imageModal = createModal(imageContent, "image");
  body.insertAdjacentHTML( 'beforeend', imageModal );
  var overlay = body.querySelector('.modal__overlay');
  var closeBTN = body.querySelector('.modal__closeBTN');

  overlay.addEventListener('click', closeModal);
  closeBTN.addEventListener('click', closeModal);

}

function closeModal() {
  var currentModal = document.querySelector('.modal');
  currentModal.remove();
}




for (var v = 0; v < videoItems.length; v++) {
  videoItems[v].addEventListener("click", openVideoModal);
}

for (var i = 0; i < imageItems.length; i++) {
  imageItems[i].addEventListener("click", openImageModal);
}

//# sourceMappingURL=main.min.js.map
