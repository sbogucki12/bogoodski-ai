var modal = document.getElementById("modal");

var galleryLink = document.querySelector(".nav-links a[href='https://yourgallery.com']");

galleryLink.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var images = ['media/images/11.png',
'media/images/20220824_051249.jpg',
'media/images/20220911_141645.jpg',
'media/images/20220911_152431.jpg',
'media/images/324944779_605363764732418_2580431472956264518_n.jpg',
'media/images/IMG_20211212_085005_336.jpg',
'media/images/IMG_20211212_085005_352.jpg',
'media/images/IMG_20220319_094934_952.jpg',
'media/images/IMG_20220416_202753_163.jpg',
'media/images/IMG_20220501_093444_258.jpg',
'media/images/IMG_20220825_154646_386.jpg',
'media/images/IMG_20220913_143039_561.jpg',
'media/images/IMG_20230105_180223_804.jpg',
'media/images/IMG_20230107_165905_249.jpg',
'media/images/IMG_20230604_095215_094.jpg',
'media/images/IMG_20230702_184742.jpg',
'media/images/IMG_20230729_103021756~3.jpg',
'media/images/IMG_2486.jpg',
'media/images/IMG_2588.jpg',
'media/images/IMG_3192.JPEG',
'media/images/PXL_20221218_160945726.jpg',
'media/images/PXL_20230206_150514299.jpg',
'media/images/PXL_20230325_200736036.jpg',
'media/images/PXL_20230330_015319549.jpg',
'media/images/PXL_20230402_162137691.jpg',
'media/images/PXL_20230518_142802053.jpg',
'media/images/PXL_20230617_192206494.jpg',
'media/images/PXL_20230714_191923187.jpg',
'media/images/PXL_20230718_170541088.jpg',
'media/images/PXL_20230731_184028736.jpg',
'media/images/Screenshot_20220624-233708_Bumble.jpg',
'media/images/Screenshot_20220624-233727_Bumble.jpg',
'media/images/Screenshot_20230319-110128.png',
'media/images/stevejoshuatree.jpg'];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Shuffle the images
images = shuffle(images);

var currentIndex = 0;
var carouselImage = document.querySelector('.carousel-image');

carouselImage.src = images[currentIndex];

document.querySelector('.carousel-button-previous').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    carouselImage.src = images[currentIndex];
});

document.querySelector('.carousel-button-next').addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;    
    carouselImage.src = images[currentIndex];
});






