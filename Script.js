// getting all the images of the slider
let sliderImages = Array.from(document.querySelectorAll('.slider-contain img'));

//getting the number of images
let sliderControls = sliderImages.length;

// slide number element
let slideNum = document.getElementById('slider-num');

// current slide
let currentSlide = 1;

// creating the list of indicators
let indicatorsUL = document.createElement('ul');
indicatorsUL.setAttribute('id', 'indicators-ul');

// adding ul to slider
let mySpan = document.getElementById('indicators');
mySpan.appendChild(indicatorsUL);

// creating the li elements
for (let i=1 ; i <= sliderControls ; i++) {
   indicator = document.createElement('li');
   indicator.setAttribute('data-index', i);
   indicatorsUL.appendChild(indicator);
   indicator.style.width = `${indicatorsUL.clientWidth / sliderControls - 5}px`;
   indicator.innerText = i ;
}

// getting all the indicators of the ul
let indicatorsArr = Array.from(document.querySelectorAll('#indicators-ul li'));

// linking he indicators with images
for(let i=0; i < indicatorsArr.length; i++){
   indicatorsArr[i].onclick = function () {
      currentSlide = parseInt(this.getAttribute('data-index'));
      checker();
   }
}

// previous, next button
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// handling clicking buttons
let prevSlide = () => {
   if(prevBtn.classList.contains('disabled')){return false;}else{currentSlide--; checker();}
}
let nextSlide = () => {
   if(nextBtn.classList.contains('disabled')){return false;}else{currentSlide++; checker();}
}
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

// creating checker function
let checker = () => {
   if (currentSlide >= sliderControls && currentSlide > 1) {
      prevBtn.classList.remove('disabled');
      nextBtn.classList.add('disabled');
   } else if (currentSlide <= 1 && currentSlide < sliderControls) {
      nextBtn.classList.remove('disabled');
      prevBtn.classList.add('disabled');
   } else {
      nextBtn.classList.remove('disabled');
      prevBtn.classList.remove('disabled');
   }
   //removing class active from images and indicators
   let removeClasses = () => {
      sliderImages.forEach( (image) => {
         image.classList.remove('active');
      });
      indicatorsArr.forEach( (indic) => {
         indic.classList.remove('active');
      });
   };
   removeClasses();
   slideNum.innerText = `${currentSlide} of ${sliderControls}`;
   sliderImages[currentSlide - 1].classList.add('active');
   indicatorsUL.children[currentSlide - 1].classList.add('active');

}
checker();

