'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  //As whenever we click it use to go up the page if we have scrolled down and this happens because we have given the class as href='#' and due to this to prevent this we need to prevent the defaukt
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(e.target);
  num1234 > 2
    ? console.log('Customer has taken knowledge from the website')
    : console.log('Customer has not taken knowledge from the website');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//To add the Event Listener to the Functions

btnsOpenModal.forEach((mov, i) => {
  mov.addEventListener('click', openModal);
  mov.classList.add(`${i + 1}`);
});
//as we know that we cannot use other methods on a nodelist

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selcting elements

let array1 = new Array(...btnsOpenModal);
array1.forEach(mov => console.log(mov.textContent));

console.log(document.querySelector('.nav').textContent);
//here elements and attributes dont come instead only the textcontent of the elements come and also the attributes of the elements dont come and attributes means href for the anchor element and src for image element.

//Also we can select the whole document that is the whole html page
console.log(document.documentElement); //here all the elements and their textcontent appear and comments not appear and which is quite logical
// And we cannot write just document because we know that document is a object and in it there are elements.
console.log(document.title); //through these we refer the title of the page
console.log(document.head); //through these we refer the head of the page
console.log(document.body); //through these we refer the body of the page
// console.log(document.body);
console.log(document); //here all the comments also appear

let allSections = document.querySelectorAll('.section'); //we know this will appear as a node list
let allButtons = document.getElementsByTagName('button');
//Here this is a HTML collection not a node list and this changes automatically when we makes changes in the buttons that is we insert a new button or delete a button.While the nodelist does not get updated whenever we make a modification in the webpage instead it remains the same as it was created.
console.log(allSections, allButtons);
new Array(...allSections).forEach(mov => console.log(mov.textContent));
new Array(...allButtons).forEach(mov => console.log(mov.textContent));

console.log(document.getElementsByClassName('btn')); //here we dont need to put as we do in query selector
console.log(document.getElementsByClassName('section')); //here we dont need to put as we do in query selector

//Creating Elements

let create1 = document.createElement('div'); //here we created a object of the element
create1.classList.add('cookie-message');
create1.innerHTML =
  'For The Better experience We use The cookies!\n<br><a href="#"><button class="btn btn--close--cookie">Got it </button></a>';
//we know that when set # as link then we are telling that we need to go to the beginning of the page
// document.querySelector('.header').insertAdjacentElement('afterbegin', create1);
//Another Method

document.querySelector('.header').prepend(create1); //this will add the element at the beginning of the parent class

let header1 = document.querySelector('.header');
header1.append(create1); //this will be added at the end of the parent class and here we are not inserting the element again because it is already have inserted and just here we have changed the position

allSections[0].insertAdjacentElement('afterbegin', create1); //here also we have just changed the position not duplicate it
header1.prepend(create1);

//But if we want to copy the same message at two places

// allSections[0].prepend(create1.cloneNode(true)); //here the event handlers does not work
// allSections[1].prepend(create1.cloneNode(true));
let buttons = document.querySelectorAll('.btn--close--cookie');
buttons.forEach((mov, i) =>
  mov.addEventListener('click', function () {
    // console.log(document.querySelectorAll('.cookie-message')[i]);
    document.querySelectorAll('.cookie-message')[i].remove();
    let sectioncords = section1.getBoundingClientRect();
    window.scrollTo({
      left: sectioncords.x + window.pageXOffset,
      top: sectioncords.y + window.pageYOffset,
      behavior: 'smooth',
    });
  })
);

// header1.before(create1); //this will make a sibling that is it will be put inside the class header instead it is put outside the header
// allSections.forEach(mov => mov.before(create1.cloneNode(true)));

//also to remove a child element from the parent element we use element.remove() whereas the element is that we want to remove

let salediv = document.createElement('div');
salediv.classList.add('sale-message');
salediv.style.color = 'Black';

header1.before(salediv);
let time1 = 5 * 60 * 60;
let hours = Math.floor(time1 / (60 * 60));
let minutes = Math.floor(time1 / 60);

//Time Interval

let saletimer = setInterval(() => {
  //Text

  salediv.textContent = ` Offer Ends in ${`${hours}`.padStart(2, 0)} : ${`${
    minutes % 60
  }`.padStart(2, 0)} : ${`${time1 % 60}`.padStart(2, 0)} 🎁 `;

  //Check Condition whether time is over or not

  if (time1 === 0) {
    clearInterval(saletimer);
    document.querySelector('.sale-message').remove();
  }
  if (time1 % 60 === 0) minutes--;
  if (time1 % (60 * 60) === 0) hours--;
  time1--;
}, 1000);

console.log(create1.parentElement); //this returns the parent element of the particular element

let create2 = document.createElement('div');
create2.classList.add('message--tut');
header1.prepend(create2);
//now if we want to remove the element:

//1.

// create2.remove(); //We can directly do or do it by selecting the element using document queryselector/className

//2.

create2.parentElement.removeChild(create2);
//this is the old method while the above method is the latest and here we first select the parent element and then remove the child

header1.insertAdjacentElement('afterbegin', create2); //another method to add
create1.style.backgroundColor = '#37383d';
//whatever styles we define here will get stored as a inline style that is mentioned with the element in the document itself not in the stylesheet

create1.style.width = '104.7%';
console.log('Undefined :', header1.style.backgroundColor); //we won't get the present colour of the header1 in this way because we have not defined here and if it would have defined here then it would have displayed in the console
console.log('Defined :', create1.style.backgroundColor); //so it comes

//but we can get it through a method

console.log(getComputedStyle(header1).backgroundColor, header1);
console.log(getComputedStyle(header1).height); //though we would have not define height in the css stylesheet but according to the browser there is some height and it computes that value and returns it
console.log(getComputedStyle(create1).height);
// create1.style.height =
//   Number.parseFloat(getComputedStyle(create1).height, 10) + 40 + 'px';
// console.log(getComputedStyle(create1).height);
// console.log(document.documentElement);//whole html
document.documentElement.style.setProperty('--color-primary', 'orangered');
//the root is equivalent to the whole document

//Attributes
console.log(document.querySelector('.nav__logo').alt); //here this gives the alt of the image
console.log(document.querySelector('.nav__logo').Founder); //we will not get this because it is not the attribute of img and this is set manually
//but there is method to find this

console.log(document.querySelector('.nav__logo').getAttribute('Founder')); //and we get it

//we can also set a Random variable
document.querySelector('.nav__logo').setAttribute('company', 'Bankist');
console.log(document.querySelector('.nav__logo').getAttribute('company')); //and we get it

let logo = document.querySelector('.nav__logo');
logo.alt = 'A great Alternative to the ofline services';

console.log('With URL :', document.querySelector('.nav__logo').src); //here this gives the source of the image with the web url
console.log('Without URL :', logo.getAttribute('src')); //this gives the source which we have mentioned in the html page

//This also can be done with link that is href

let linkHref = document.querySelector('.nav__link'); //this gives the first element of the following class and we know this
console.log(linkHref.href); //this is same like the src
console.log(linkHref.getAttribute('href')); //this gives without url

//Data Attributes

console.log(logo.dataset.versionNumber); //this type of attributes is stored in the dataset

//Classes

logo.classList.add('a', 'b'); //we can multiple Classses at a time
logo.classList.remove('a', 'b');
logo.classList.toggle('a', 'b'); //And we know this that if the class name is not present there then it will add and if there exists such classes then it will remove
logo.classList.contains('a', 'b');

//another method
// logo.className='classes'//nut we should not use this because this replaces all the classes initially mentioned while the above methods don't remove the initial classses and write the newly added classes with them.

console.log(getComputedStyle(document.querySelector('.highlight')).color);
// document.documentElement.style.getPropertyValue('--color-primary');

console.log(document.querySelector('.highlight').parentElement);

let scrolleffect = document.querySelector('.btn--scroll-to');

let section1 = document.querySelector('#section--1');
scrolleffect.addEventListener('click', function (e) {
  let coordinatessec1 = section1.getBoundingClientRect(); //this gives the coordinates of the following thing
  //here y is distance from the top and as we scroll down this distance changes as distance form the top changes
  console.log('Button : ', e.target.getBoundingClientRect());
  console.log('Section :', coordinatessec1);
  //We can also get how much we have scrolled down or left
  console.log('Current (X/Y)', window.pageXOffset, window.pageYOffset); //this gives the distance from the top of the page to the top of the page currently is after scrolling
  let x = window.pageXOffset + scrolleffect.getBoundingClientRect().x;
  let y = window.pageXOffset + scrolleffect.getBoundingClientRect().y;
  console.log(
    'Correct Co-ordinates From the top the page',
    `X: ${x}`,
    `Y: ${y}`
  );
  //We can also the height width and height of the screen currently disply by us and it will change whnever we shorten the screen
  console.log(
    'Current View port Height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // window.scrollTo(
  //   coordinatessec1.x + window.pageXOffset,
  //   coordinatessec1.y + window.pageYOffset
  // );
  //but if we want to scroll do it smoothly then there is a method
  // window.scrollTo({
  //   left: coordinatessec1.x + window.pageXOffset,
  //   top: coordinatessec1.y + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //another method
  section1.scrollIntoView({ behavior: 'smooth' });
});

let features = document.querySelectorAll('.nav__item')[0];

// let h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//   alert('addEventListener: You are viewing the heading');
// }); //Mouseenter is used whenever the cursor moves over the element selected the function will be executed
// h1.onmouseenter = function () {
//   alert('onmouseenter: You are viewing the heading');
// };
//we can also add direct event handlers but this is the old method
// let num = 1;

// let Imgmouse = function () {
//   alert(`Welcome To the Bankist : ${num}`);
//   if (num % 5 === 0) {
//     document
//       .querySelector('.nav__logo')
//       .removeEventListener('mouseenter', Imgmouse); //this is to remove the event as soon as the event has took place.
//     //well we can also put this remove event listener at any place}
//   }
//   num++;
// };

// document.querySelector('.nav__logo').addEventListener('mouseenter', Imgmouse);

// let Images = [...document.querySelectorAll('.features__img')];
// console.log(Images);
// let datasetSrc = function (e) {
//   return Images.find(mov => mov.dataset.src === `img/${e}.jpg`);
// };
// let Computer = datasetSrc('digital');
// let plant = datasetSrc('grow');

// let card = datasetSrc('card');

// card.addEventListener('mouseenter', function () {
//   alert('This is a card');
// });
// Computer.addEventListener('mouseenter', function () {
//   alert('This is a Computer');
// });
// plant.addEventListener('mouseenter', function () {
//   alert('This is a plant');
// });

salediv.addEventListener('click', function () {
  document
    .querySelector('.section--sign-up')
    .scrollIntoView({ behavior: 'smooth' });
});
//DOM is document
//Wheneever we attach a event listener to a element in the DOM and when that particular event happens for example 'click' then the click event is not created at the target element instead it is created at the root of the tree that is the document and then it passes one by one through the number of parent elements of the target element and this does not go through the sibling elements of the target element and this phase is called capturing phase and when the click event reaches the target element then the callback function atttached to it gets executed and and this phase is called targeting phase and again the click event goes back to the root that is DOM and thus this phase is called bubbling phase

console.log(document.querySelector('p').parentElement);
document.querySelector('p').addEventListener('click', function () {});
document
  .querySelector('p')
  .parentElement.addEventListener('click', function () {
    alert('hello');
  });

let randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let randomColor = () =>
  `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`;

// [...document.querySelectorAll('.nav__link')].forEach(mov => {
//   if (!mov.classList.contains('btn--show-modal')) {
//     mov.addEventListener('click', function (e) {
//       this.style.backgroundColor = randomColor();
//       this.href = '#';
//       console.log('LINKS', e.target, e.currentTarget);
//       console.log(this === e.currentTarget);

//       //We can also the events for the parent of the element on which this event handler is attached
//       //Stop propagation
//       //we can also understand this by bubbling phase as it moves upward again and if we use stop propagation then it will events will not to the root element through the parent element as like capturing phase

//       //we know that here this represents the element on which this event listener is attached
//       //e.target represents where there is a click
//       //e.currentarget represents where the event listener is attached
//       // e.stopPropagation();
//     });
//   }
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link Container :', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
//   e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav :', e.target, e.currentTarget);
//     console.log(this === e.currentTarget);
//   },
//   true
// );

//by setting here true we say that in the capturing phase this event can take place and that is the event of parent element will take place first and then agter this one by one all the parent elements event if there is and then at last the event of the target element if there is no stop propagation method used in the child element that is the target element

//it is quite logical that if we are clicking on the child elemt then we are clicking on the parent element

document.querySelectorAll('.footer__link').forEach(mov =>
  mov.addEventListener('click', function () {
    mov.href = '';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  })
);

//we want to check whether the customer has scrolled down the website or not

let Sections = [...document.querySelectorAll('.section')];
let num123 = 0;
let num1234 = 0;
let IncreaseNum = function () {
  num1234++;
  if (window.pageYOffset >= num123) console.log('Customer has scrolled down');
  if (window.pageYOffset <= num123) console.log('Customer has scrolled up');
  num123 = window.pageYOffset;
};

Sections.forEach(mov => mov.addEventListener('mouseenter', IncreaseNum));

// document.querySelectorAll('.nav__item').forEach(mov => {
//   mov.style.fontFamily = '"Festive", cursive';
//   mov.style.fontSize = '20px';
// });
console.log(getComputedStyle(document.querySelector('.nav__item')).fontSize);

// let operationBtn = [...document.querySelectorAll('.operations__tab')];
// let operationContent = [...document.querySelectorAll('.operations__content')];

// let ActiveBtn = operationBtn.find(mov =>
//   mov.classList.contains('operations__tab--active')
// );
// let ActiveContent = operationContent.find(mov =>
//   mov.classList.contains('operations__content--active')
// );
// operationBtn.forEach((mov, i) => {
//   mov.addEventListener('click', function () {
//     ActiveBtn.classList.remove('operations__tab--active');
//     ActiveContent.classList.remove('operations__content--active');
//     ActiveBtn = this;
//     ActiveBtn.classList.add('operations__tab--active');
//     ActiveContent = operationContent.find(mov =>
//       mov.classList.contains(`operations__content--${i + 1}`)
//     );
//     ActiveContent.classList.add('operations__content--active');
//   });
// });

document.querySelector('.footer__logo').addEventListener('click', function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

let logoAlert = function () {
  alert('You can click on the logo to go to the Top most of the page');
  document
    .querySelector('.footer')
    .removeEventListener('mouseenter', logoAlert);
};
document.querySelector('.footer').addEventListener('mouseenter', logoAlert);

// [...document.querySelectorAll('.nav__link')].slice(0, 3).forEach((mov, i) => {
//   mov.addEventListener('click', function (e) {
//     e.preventDefault();
//     // let tabSection = document.getElementById(`section--${i + 1}`);
//     //Another Technique
//     let id = mov.getAttribute('href');
//     let tabSection = document.querySelector(id);
//     tabSection.scrollIntoView({ behavior: 'smooth' });
//   });
// });

//the above method is not accurate enough because if there will be 100 elements then there will be lot of code generated

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//This is called event delegation

let h1 = document.querySelector('h1');

console.log(h1.getElementsByTagName('span')); //as we apply this methods on the document which is the parent element of all the elements in the HTML and similarly we can select a element and set it as a parent element and find for the elemnts with a specific classname and get the elements which are inside this parenet element not the entire document

console.log(h1.querySelectorAll('.highlight'));

//Going Downwards: Selecting Child element

console.log(h1.childNodes); //this gives all the child nodes which inculdes text,comment,br,span etc.
console.log(h1.children); //this does not include the text comment instead this includes only ements with tag name
h1.firstElementChild.style.color = 'Orange'; //this selects the first child element of the h1
h1.lastElementChild.style.color = 'blue';

//Going Upwards : Parent elemnts

console.log(h1.closest('.header')); //this gives the closet ancestor that is the closest parent element with the given tag name
console.log(h1.parentNode); //This gives the parent element of the element
console.log(h1.parentElement); //this also does the same
// console.log(document.querySelector('.slide--1').parentNode);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
document.querySelector('.cookie-message').style.width =
  document.documentElement.clientWidth + 'px';

//Siblings

console.log(h1.previousElementSibling); //as for h1 there is no previous sibling therefore this is null
console.log(h1.nextElementSibling); //as this is present therefore this is visible

//we dont have any method to get all the siblings instead we can only get direct siblings that is next and previous sibligs
//this below method can be used to get all the siblings
// console.log([...h1.parentElement.children].filter(mov => mov !== h1));
[...h1.parentElement.children]
  .filter(mov => mov !== h1)
  .forEach(mov => (mov.style.transform = 'scale(0.5)'));

document.querySelector('.nav').addEventListener('mouseenter', function () {
  [...h1.parentElement.children]
    .filter(mov => mov !== h1)
    .forEach(mov => (mov.style.transform = 'scale(0.5)'));
});
h1.parentElement.addEventListener('mouseenter', function () {
  [...h1.parentElement.children]
    .filter(mov => mov !== h1)
    .forEach(mov => (mov.style.transform = 'scale(1)'));
});

document
  .querySelector('.operations__tab-container')
  .addEventListener('click', function (e) {
    let operationContent = [
      ...document.querySelectorAll('.operations__content'),
    ];
    let buttons = [...document.querySelectorAll('.operations__tab')];

    let updater = function (el) {
      {
        if (!el) return; //here when el is not defined it will simple return nothing
        buttons
          .find(mov => mov.classList.contains('operations__tab--active'))
          .classList.remove('operations__tab--active');
        el?.classList.add('operations__tab--active');
        operationContent
          .find(mov => mov.classList.contains('operations__content--active'))
          .classList.remove('operations__content--active');
        operationContent
          .find(mov =>
            mov.classList.contains(`operations__content--${el.dataset.tab}`)
          )
          .classList.add('operations__content--active');
      }
    };

    updater(e.target.closest('.operations__tab')); //this finds the closest parent with this class name
  });

//the difference between mouseover and mouseenter is that mouseenter prevents bubbling while mouseover allows bubbling

// document.querySelector('.nav').addEventListener('mouseover', function (e) {
//   if (
//     e.target.classList.contains('nav__link') ||
//     e.target.classList.contains('nav__logo')
//   ) {
//     let link = e.target;
//     let siblings = [
//       ...e.target.closest('.nav').querySelectorAll('.nav__link'),
//     ].filter(mov => mov !== link);
//     siblings.forEach(mov => (mov.style.opacity = 0.5));
//     e.target.closest('nav').querySelector('img').style.opacity = 0.5;
//   }
// });

// document.querySelector('.nav').addEventListener('mouseleave', function (e) {
//   let siblings = [...e.target.closest('.nav').querySelectorAll('.nav__link')];
//   siblings.forEach(mov => (mov.style.opacity = 1));
//   e.target.closest('nav').querySelector('img').style.opacity = 1;
// });

// [
//   document.querySelector('.nav').querySelector('img'),
//   ...document.querySelectorAll('.nav__link'),
// ].forEach(mov =>
//   mov.addEventListener('mouseover', function (e) {
//     let Siblings = [
//       ...e.currentTarget.closest('.nav').querySelectorAll('.nav__link'),
//     ].filter(el => el !== e.currentTarget);
//     if (e.target !== document.querySelector('.nav').querySelector('img'))
//       e.target.style.textDecoration = 'underline';
//     Siblings.forEach(mov => (mov.style.opacity = 0.5));
//     if (e.target !== document.querySelector('.nav').querySelector('img'))
//       document.querySelector('.nav').querySelector('img').style.opacity = 0.5;
//   })
// );
// [
//   document.querySelector('.nav').querySelector('img'),
//   ...document.querySelectorAll('.nav__link'),
// ].forEach(mov =>
//   mov.addEventListener('mouseleave', function (e) {
//     let Siblings = [
//       ...e.currentTarget.closest('.nav').querySelectorAll('.nav__link'),
//       document.querySelector('.nav').querySelector('img'),
//     ];
//     Siblings.forEach(mov => {
//       mov.style.opacity = 1;
//       mov.style.textDecoration = 'none';
//     });
//   })
// );
// let timer = 0;
// let timers = [];

// let Sections1 = [...document.querySelectorAll('.section')];
// for (let [i, el] of Sections1.entries()) {
//   el.addEventListener('mouseover', function () {
//     timers.push(setInterval(() => timer++, 1000));
//   });
// }

// document.querySelectorAll('.section').forEach((mov, i) => {
//   mov.addEventListener('mouseout', function () {
//     clearInterval(timers[i]);
//     console.log(
//       `The customer stayed in the section${i + 1} for ${Math.floor(
//         timer / 60
//       )} minutes and ${timer % 60} seconds`
//     );
//     timer = 0;
//   });
// });

//Passing arguements into Event Handlers

let Handler1 = function (e) {
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let siblings = [
      ...link.closest('.nav').querySelectorAll('.nav__link'),
    ].filter(mov => mov !== link);
    siblings.forEach(mov => (mov.style.opacity = this));
    let logo = link.closest('.nav').querySelector('img');
    logo.style.opacity = this;
  }
};

// document.querySelector('.nav').addEventListener('mouseover', function (e) {
//   Handler1(e, 0.5);
// });
//another method
//we know that bind provides a new function
document
  .querySelector('.nav')
  .addEventListener('mouseover', Handler1.bind(0.5));
document.querySelector('.nav').addEventListener('mouseout', Handler1.bind(1));
// document.querySelector('.nav').addEventListener('mouseout', function (e) {
//   Handler1(e, 1);
// });

let section1coords = document.querySelector('section').getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   // console.log(window.pageYOffset);
//   //This both are same
//   //this can also be said as the distance between the top of the page and the top of the viewport basically how much we have scrolled
//   if (window.pageYOffset > section1coords.top) {
//     document.querySelector('.nav').classList.add('sticky');
//   } else document.querySelector('.nav').classList.remove('sticky');
// });

// section1.addEventListener('mouseenter', function () {
//   document.querySelector('nav').classList.add('sticky');
// });
// header1.addEventListener('mouseenter', function () {
//   document.querySelector('nav').classList.remove('sticky');
// });
window.addEventListener('scroll', function () {
  let linker = function (a, b) {
    document
      .querySelector('.nav')
      .querySelector('img')
      .addEventListener('click', function () {
        window.scrollTo({ top: a, left: b, behavior: 'smooth' });
      });
  };
  window.pageYOffset > section1coords.y
    ? linker(0, 0)
    : linker(section1coords.y, section1coords.x);
});
let navHeight = document.querySelector('.nav').getBoundingClientRect().height;
let obsoptions = {
  root: null,
  // threshold: [0.14],
  //another Method
  threshold: 0,
  // rootMargin: '-90px',
  //this we say that whenever here from end as we have set threshold as 0 so end 90 px above it will triger and negative because we showing before 0 percent of viewport
  //also we can calculate it dynamically
  rootMargin: `-${navHeight}px`,
};
//here we have set root as null and this means simply the viewport
//here threshold can be a single value as well as a array of values and when it intersects that percentage of viewport the callback function will be executed

let obscallback = function (entries, observer) {
  //here entries is the array of thresholds we provide
  //and observer is the observer itself that is the variable what we are declaring the intersection observer
  // entries.forEach(mov => console.log(mov));
  !entries[0].isIntersecting
    ? document.querySelector('.nav').classList.add('sticky')
    : document.querySelector('.nav').classList.remove('sticky');
  // if (window.pageYOffset > section1coords.y)
  //   document.querySelector('.nav').classList.add('sticky');
};
let observer = new IntersectionObserver(obscallback, obsoptions);
observer.observe(header1);

let obscallback1 = function (entries, observer) {
  if (entries[0].isIntersecting) {
    // entries[0].target.style.opacity = 1;
    entries[0].target.classList.remove('section--hidden');

    //we can also use unobserver to remove the observer
    // observer.unobserve(entry.target)
    let link = links.find(
      mov =>
        mov?.dataset.versionNumber === entries[0].target?.dataset.versionNumber
    );

    link.style.backgroundColor = 'orangeRed';
    links[3].style.backgroundColor = 'orangeRed';
  }
  if (!entries[0].isIntersecting) {
    // entries[0].target.style.opacity = 0.2;
    entries[0].target.classList.add('section--hidden');
    let link = links.find(
      mov =>
        mov?.dataset.versionNumber === entries[0].target?.dataset.versionNumber
    );
    link.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    links[3].style.backgroundColor = 'orangeRed';
  }
};
let obsoptions1 = {
  root: null,
  threshold: [0.175],
};
let observer1 = new IntersectionObserver(obscallback1, obsoptions1);

document.querySelectorAll('.section').forEach(mov => {
  mov.classList.add('section--hidden');
  observer1.observe(mov);
});

let links = [...document.querySelectorAll('.nav__link')];

console.log(getComputedStyle(header1).backgroundColor);

// header1.addEventListener('mouseenter', function () {
//   links.forEach(mov => (mov.style.backgroundColor = 'rgba(0, 0, 0, 0)'));
// });

//Lazy Loading Images

//This can be a great method for the preformance

let imgLoader = function (entries) {
  let [entry] = entries;
  let inSrc = entry.target.src;
  if (entries[0].isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    //this function will take place whenever the image is loaded fully
  }
  if (!entries[0].isIntersecting) {
    entry.target.src = inSrc;
    entry.target.classList.add('lazy-img');
  }
};
let observer2 = new IntersectionObserver(imgLoader, {
  root: null,
  threshold: [0.3],
});
document
  .querySelectorAll('.features__img')
  .forEach(mov => observer2.observe(mov));

let imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets); //this method we use to select the elements which have the specific dataset attributes

console.log(document.querySelector('.slide'));
// document.querySelector('.slide').style.transform = 'translateX(-100%)';
// document.querySelectorAll('.slide')[2].style.transform = 'translateX(-100%)';
[...document.querySelectorAll('.slide')].reduce((accum, mov) => {
  mov.style.transform = `translateX(${accum}%)`;
  return accum + 100;
}, 0);

// let slider = function () {
//   [...document.querySelectorAll('.slide')].reduce((accum, mov) => {
//     mov.style.transform = `translateX(${accum}%)`;
//     return accum + 100;
//   }, this);
//   num = num - 100;
// };

// document
//   .querySelector('.slider__btn--right')
//   .addEventListener('click', function () {
//     [...document.querySelectorAll('.slide')].reduce((accum, mov) => {
//       mov.style.transform = `translateX(${accum}%)`;
//       return accum + 100;
//     }, num);
//     num = num - 100;
//     if (num === -300) num = 0;
//   });
// document
//   .querySelector('.slider__btn--left')
//   .addEventListener('click', function () {
//     num = num + 100;
//     [...document.querySelectorAll('.slide')].reduce((accum, mov) => {
//       mov.style.transform = `translateX(${accum}%)`;
//       return accum - 100;
//     }, num);
//     if ((num = 300)) num = 0;
//   });

//SLIDE

let slides = document.querySelectorAll('.slide');

[...slides].forEach((mov, i) => {
  mov.style.transform = `translate(${i * 100}%)`;
});
// document.querySelector('.slider').style.overflow = 'visible';
// document.querySelector('.slider').style.transform =
//   'scale(1) translateX(-1200px)';

let num = 0;
let maxLength = [...slides].length;
let Dots = document.querySelector('.dots');
let rightSlide = function () {
  if (num === maxLength - 1) num = 0;
  else num++;
  let activeBtn = [...DotsBtn].find(mov => Number(mov.dataset.slide) === num);
  DotColor(activeBtn);

  [...slides].forEach((mov, i) => {
    mov.style.transform = `translate(${(i - num) * 100}%)`;
  });
};
let leftslide = function () {
  if (num === 0) num = maxLength - 1;
  else num--;
  let activeBtn = [...DotsBtn].find(mov => Number(mov.dataset.slide) === num);
  DotColor(activeBtn);

  [...slides].forEach((mov, i) => {
    mov.style.transform = `translate(${(i - num) * 100}%)`;
  });
};
document
  .querySelector('.slider__btn--right')
  .addEventListener('click', rightSlide);
document
  .querySelector('.slider__btn--left')
  .addEventListener('click', leftslide);

let adder = function (entries) {
  let btn = function (e) {
    if (e.key === 'ArrowRight') rightSlide();
    if (e.key === 'ArrowLeft') leftslide();
  };

  if (entries[0].isIntersecting) {
    document.addEventListener('keydown', btn);
  }
  if (!entries[0].isIntersecting) {
    document.removeEventListener('keydown', btn);
  }
};
let observer3 = new IntersectionObserver(adder, { root: null, threshold: 0.1 });
observer3.observe(document.querySelector('#section--3'));

let createDots = function () {
  slides.forEach((mov, i) => {
    let text = `<button class="dots__dot" data-slide="${i}"></button>`;
    Dots.insertAdjacentHTML('beforeend', text);
  });
};
createDots();

let DotsBtn = document.querySelectorAll('.dots__dot');
let DotColor = function (a) {
  DotsBtn.forEach(mov => (mov.style.backgroundColor = 'rgb(185, 185, 185)'));
  a.style.backgroundColor = 'OrangeRed';
};
DotsBtn[0].style.backgroundColor = 'OrangeRed';
Dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    DotColor(e.target);
    num = Number(e.target.dataset.slide);
    [...slides].forEach((mov, i) => {
      mov.style.transform = `translate(${(i - num) * 100}%)`;
    });
  }
});

// let tester=setInterval(()=>console.log('hello'),2000)

// let repeater = setInterval(() => rightSlide(), 5000);
//We can also select a element with the attributes
let tester1 = document.querySelector('.dots__dot[data-slide="1"]');
console.log(tester1);

//HTML Parsing means only the script and the html code are downloaded
let x, y;
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML page is parsed And DOM tree built', e);
  console.log(`The time Taken to load is ${Math.round(e.timeStamp / 1000)}s`);
  x = Math.round(e.timeStamp / 1000);
});

//Also if we want a event to be executed when the whole page is loaded

window.addEventListener('load', function (e) {
  console.log('Page is Loaded Fully', e);
  console.log(
    `The time taken for page to load is ${Math.round(e.timeStamp / 1000)}s`
  );
  y = Math.round(e.timeStamp / 1000);
});

//At the initial both these are not defined because after all the code is downloaded and loaded then only the above event listeners occur.

if (!x) console.log('hello The HTML or script is not loaded');
if (!y) console.log('Hello The page is fully not loaded ');

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

//we write the script element in the page end because here first the fetching of HTML and built of DOM tree is completed and then only the script file is fetched and then it is executed but this method takes a lot of time in executions because here fast html is fetched and then script is getched and then it is executed
//but we want both of them that is the script and HTML to be fetched at one time and script to be executed after the HTML is fetched

//there are two methods through which we can select the methods of loading the pages that is building the DOM tree and execution and fetching of script.

//1.REGULAR METHOD

//Writing <script src=""> at the begining of the body that is in the head then first some part of HTML will be fetched and then script will be loaded before fetching the whole HTML and script will be executed and then the remaining HTML will be fetched
//Writing <script src=""> at the Body end will make the HTML to be fetched and the building of the whole DOM tree which contains the elements of the body in the form of nodews which we know and then the script is fetched after complete fetching of the HTML and then the script will be executed

//2.Asynchronized

//Writing <script async src=""> at the beginnning of the body means both the HTML and script is fetched at one time that is together and then the script is executed and tyhen HTML is parsed completely
//Writing <script async src=""> at the Body end makes no different sense because the script and HTML is fetched at one time and so after the fetching the script is going to be executed which is fixed.
//Here the DOMcontentloaded event happens as soon as the HTML page is parsed and does not wait for the script to be fetched and to get executed

//3.DEFER METHOD

//Writing <script async src=""> at the beginning means both the HTML and script are fetched at the same time and first the html is parsed and then only the script is executed though script and HTML Is fetched at same time but only after the html is parsed then only the script is executed
//Writing <script async src=""> at the Body end similarly makes no different sense
//here the DOMcontentloaded event happens as soon as the HTML is parsed and script is fetched which is done at same time and only after the complete execution of the script the event gets fired.

// console.log(
//   new Intl('en-US', { month: numeric, day: long }).format(new Date())
// );
