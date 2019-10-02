//Event Listeners that I added:
//1. mouseenter
//2. mouseleave
//3. mouseover
//4. mouseout
//5. click
//6. scroll
//7. dblclick
//8. resize
//9. wheel
//10. keydown
//11. keyup

//Stop Propagation is on line number 102 in the footer.

//Prevent Default can be found on line number 35 and 40 for the 'About' and 'Blog' nav links.

//Change header nav
const h1 = document.querySelector('.nav-container h1');
    window.addEventListener('scroll', () => {
    h1.textContent = `Let's Party!`
    h1.style.width = '300px';
    h1.style.padding = '15px 50px';
    h1.style.color = 'white';
    h1.style.backgroundColor = 'blue';
});

const links = document.querySelectorAll('.nav-link');
links[0].addEventListener('mouseenter', () => (links[0].textContent = 'Leave Home!'));
links[0].addEventListener('mouseleave', () => (links[0].textContent = 'Home'));
links[1].addEventListener('mouseenter', () => (links[1].textContent = 'About YOU!'));
links[1].addEventListener('mouseleave', () => (links[1].textContent = 'About'));
links[2].addEventListener('mouseover', () => (links[2].textContent = 'Blurb'));
links[2].addEventListener('mouseout', () => (links[2].textContent = 'Blog'));
links[3].addEventListener('mouseover', () => (links[3].textContent = 'Text 411'));
links[3].addEventListener('mouseout', () => (links[3].textContent = 'Contact'));

links[0].addEventListener('click', () => (links[0].href = 'https://www.google.com/maps'));
links[1].addEventListener('click', (event) => {
    links[1].href = '';
    event.preventDefault();
});

links[2].addEventListener('click', (event) => {
    links[2].href = '';
    event.preventDefault();
});


links[3].addEventListener('click', () => (links[3].href = ''));

//Change Images
const img = document.querySelectorAll('img');
window.addEventListener('scroll', () => (img[0].src = 'https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg?cs=srgb&dl=blur-blurred-background-bus-2767817.jpg&fm=jpg'));
img[1].addEventListener('click', () => (img[1].src = 'https://images.pexels.com/photos/1851467/pexels-photo-1851467.jpeg?cs=srgb&dl=adult-casual-checking-1851467.jpg&fm=jpg'));
img[2].addEventListener('dblclick', () => (img[2].src = 'https://images.pexels.com/photos/1464825/pexels-photo-1464825.jpeg?cs=srgb&dl=alcoholic-beverage-ale-beer-1464825.jpg&fm=jpg'));
window.addEventListener('resize', () => (img[3].src = 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?cs=srgb&dl=bank-banking-banknotes-259027.jpg&fm=jpg'));

//Change h2 tags
const h2 = document.querySelectorAll('h2');
window.addEventListener('wheel', () => (h2[0].textContent = 'The only way to travel!'));
h2[1].addEventListener('mouseover', () => (h2[1].textContent = 'Find me at the station! Press Enter'))
h2[2].addEventListener('mouseover', () => h2[2].textContent = 'Free booze!')
h2[3].addEventListener('mouseover', () => h2[3].textContent = 'Only $1,000,000!')

//Change paragraph tags
const paragraphContent = document.querySelectorAll('p');

paragraphContent[0].addEventListener('mouseover', () => (paragraphContent[0].textContent = 'Our buses have mini-bars, two lavatories (just-in-case!), a back-up driver (also just-in-case!), wi-fi, satellite dish, movies, popcorn, and storage overhead, on the roof, and in the cargo hold (which is also for coach passengers).'));

window.addEventListener('keydown', () => (paragraphContent[1].textContent = 'Come find me at the bus station for your first adventure.  It will be a wild goose chase.  I will leave bread crumbs for you.'));

window.addEventListener('keyup', () => (paragraphContent[2].textContent = 'First take a left at the fountain.  Ask the old man for directions. Hang a right near the red garbage can.  Walk 358 paces, face SW, sit down and give up.  Order a latte at the cafe.  I will find you there. Departure is 05:00. Click the map photo.'));

paragraphContent[3].addEventListener('mouseover', () => (paragraphContent[3].textContent = 'We take special care to bring every cocktail and soft drink known, but we do not offer wine coolers.  Vodka, gin, whiskey, rum, tequila, red wine, white wine, and beer.  Drinks are free, but cups are $50.00.'));

paragraphContent[4].addEventListener('mouseover', () => (paragraphContent[4].textContent = 'Disclaimer: the law in 37 out of 50 US states says that we cannot have an open alcoholic container on the bus while moving. The bus will make frequent stops. Double click the Venetian photo.'));

paragraphContent[5].addEventListener('mouseover', () => (paragraphContent[5].textContent = '...and finally the ticket price.  For only $1,000,000 you can have it all. CASH ONLY. We also accept tips. Remember, nobody likes a cheap person. Resize the browser to find some extra cash.'));

paragraphContent[6].addEventListener('mouseover', () => (paragraphContent[6].textContent = 'Get a wicked sunburn and wilt from dehydration while you hike around the desert and enjoy the sunshine.  Get lost and starve to death while trying to eat cactus.  Have a coyote stalk you and strip down naked from exhaustion.'));

paragraphContent[7].addEventListener('mouseover', () => (paragraphContent[7].textContent = 'Have fun climbing the tallest mountain.  Get altitude sickness and keel over.  Eat freeze dried, canned food. Suck down O2 from a mask. Sleep on rocks and have your sherpa carry you for an extra fee.'));

paragraphContent[8].addEventListener('mouseover', () => (paragraphContent[8].textContent = 'Go insane as we ship you off to a deserted island and leave you to die. Catch malaria from a dirty mosquito. Chase a wild hog and pray you figure out how to open a coconut.'));

//Change buttons
const button = document.querySelectorAll('.btn');
button[0].addEventListener('mouseover', () => (button[0].textContent = 'Visit Death Valley!'));

button[1].addEventListener('mouseover', () => (button[1].textContent = 'Visit Mt Everest!'));

button[2].addEventListener('mouseover', () => (button[2].textContent = 'Visit The Galapagos!'));

//Change footer
const footer = document.querySelector('.footer');
footer.addEventListener('click', () => (footer.style.backgroundColor = 'red'));

paragraphContent[9].addEventListener('click', (event) => {
    event.stopPropagation();
    paragraphContent[9].textContent = 'If you use any of this content, you will face legal action!!!... not really.';
    paragraphContent[9].style.width = '600px';
    paragraphContent[9].style.margin = '0 auto';
    paragraphContent[9].style.textalign = 'center';
    paragraphContent[9].style.color = 'white';
    paragraphContent[9].style.backgroundColor = 'black';
});


//Sound | Could not get it to work...
// const oldCarSound = document.createElement('audio');
// oldCarSound.classList.add('car-sound');
// oldCarSound.id = 'audio-player';
// oldCarSound.controls = 'controls';
// oldCarSound.src = 'media\old-car-engine_daniel_simion.mp3'
// oldCarSound.type = 'audio/mp3'
// oldCarSound.style.display = 'none';
// document.querySelector('body').appendChild(oldCarSound);

// const carStart = document.querySelector('.car-sound')
// const firstImage = document.querySelector('.intro img')
// firstImage.addEventListener('click', () => carStart.play());