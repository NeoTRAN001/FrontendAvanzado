import Slider from './slider';

let sliderText     = document.querySelector("#slider-text");
let sliderTitle    = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage    = document.querySelector("#slider-image");

let slider = new Slider({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Ipsum',
            image: 'https://farm6.static.flickr.com/5547/11015071284_0d542ccf71_c.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            title: 'Lorem 2',
            subtitle: 'Ipsum 2',
            image: 'https://farm7.static.flickr.com/6103/6263655041_5711f51edc_c.jpg',
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
        sliderTitle.innerHTML    = element.title;
        sliderSubTitle.innerHTML = element.subtitle;
        sliderText.innerHTML     = element.text;
        sliderImage.src          = element.image;
    },
    speed: 5000
});

slider.play();