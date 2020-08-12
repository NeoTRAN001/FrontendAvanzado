import Slider from './slider';

let sliderText     = document.querySelector("#slider-text");
let sliderTitle    = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage    = document.querySelector("#slider-image");
let textContent    = document.querySelector("#slider-text-content");

let slider = new Slider({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Ipsum',
            image: './public/images/c.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            title: 'Lorem 2',
            subtitle: 'Ipsum 2',
            image: './public/images/3.jpg',
            text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            title: 'Lorsam 3',
            subtitle: 'No tengo idea',
            image: './public/images/1.jpg',
            text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
        }
    ],
    animationFunc: function (element) {
        textContent.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(function() {
            sliderTitle.innerHTML    = element.title;
            sliderSubTitle.innerHTML = element.subtitle;
            sliderText.innerHTML     = element.text;
            sliderImage.src          = element.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        }, 600);
    },
    speed: 5000
});

slider.play();