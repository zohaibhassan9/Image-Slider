const images = ["https://res.cloudinary.com/db2xlqrrx/image/upload/v1736825560/next_qhekgb.png", "https://res.cloudinary.com/db2xlqrrx/image/upload/v1736825560/back_handtm.png"]
let currentIndex = 0;

function showImage(index){
document.getElementById('imageSlider').src = images[index]
}

function nextImage(){
    currentIndex = (currentIndex + 1) % 2;
    showImage(currentIndex);
}

function prevImage(){
currentIndex = (currentIndex -1 + images.length) % 2;
showImage(currentIndex); 
}