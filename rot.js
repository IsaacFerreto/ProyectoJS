//ROLLER----------------------------------------------------------------------------------------------------------------
var imageDir = '/background/';
(
  function () {
    var rotator = document.getElementById('rotator'); // change to match image ID
    var delayInSeconds = 5;
    // set number of seconds delay
    // list image names
    var num = 0;
    let currentIndex = 0;
    const totalImages = 5;
    const changeImage = function () {
      num += 1 % totalImages;
      rotator.src = imageDir + num + '.jpg';
      if (num == totalImages)
        num = 0
    };
    setInterval(changeImage, delayInSeconds * 1000);
  }
)();
//---------------------------------------------------------------------------------------------------------------------------
