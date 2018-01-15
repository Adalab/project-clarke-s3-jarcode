var body = document.querySelector("body");
var gallery = document.querySelector(".gallery-tweet");
var imageItems = gallery.querySelectorAll(".gallery__item--imagentweet");

function createModal(content, type) {
  var container;
  var containerType;
  var myModal;
  var closeButton = '<button class="modal__closeBTN">X</button>';
  containerType = 'modal__container--imagentweet';
  }

  container = '<div class="modal__container ' + containerType + '">' + content + closeButton + '</div>';

  myModal = '<div class="modal"><div class="modal__overlay"></div>' + container + '</div>';
  return myModal;
}

function openTweetModal(e) {
  console.log('click');
  var tweetSRC = e.currentTarget.getAttribute("data-src");
  var tweetContent = '<img class="modal__tweetcontent" src="' + tweetSRC + '">';
  var tweetModal = createModal(tweetContent, "image");
  body.insertAdjacentHTML( 'beforeend', tweetModal );
  var overlay = body.querySelector('.modal__overlay');
  var closeBTN = body.querySelector('.modal__closeBTN');

  overlay.addEventListener('click', closeModal);
  closeBTN.addEventListener('click', closeModal);

}

function closeModal() {
  var currentModal = document.querySelector('.modal');
  currentModal.remove();
}


for (var i = 0; i < tweetItems.length; i++) {
  tweetItems[i].addEventListener("click", openTweetModal);
}

//# sourceMappingURL=main.min.js.map
