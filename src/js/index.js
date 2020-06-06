import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

//borrowed from the internet
const allRanges = document.querySelectorAll(".range-wrapper");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range--js");
  const bubble = wrap.querySelector(".bubble--js");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

//moment-date and time (with ticking seconds)

console.log(`It's working!`);

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


const createContent = function() {
    const element = document.querySelector('.current-date--js');
    element.innerHTML = `${moment().format('LL')} ${moment().format('LTS')}`;
};

setInterval(createContent, 1000);
createContent();
console.log('działa?');

//change mode button

let isDark = false;

function buttonText (querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
buttonText ('.change-mode--js', 'tryb ciemny');

const modeButton = document.querySelector('.change-mode--js');
modeButton.addEventListener('click', () => {

  if (isDark == true) {
    document.documentElement.style.setProperty('--my-background', '#758500');
    document.documentElement.style.setProperty('--shadow', '#4b5500');
    document.documentElement.style.setProperty('--light', '#9fb500');
    document.documentElement.style.setProperty('--label', '#1b1f00');
    document.documentElement.style.setProperty('--placeholder', '#adc400');
    document.documentElement.style.setProperty('--light-text', '#e1ff00');
    document.documentElement.style.setProperty('--gradient-from', '#7d8e00');
    document.documentElement.style.setProperty('--gradient-to', '#697800');
    document.documentElement.style.setProperty('--checked-background', '#abc200');
    document.documentElement.style.setProperty('--checked-shadow', '#6d7c00');
    document.documentElement.style.setProperty('--checked-light', '#e9ff00');
    document.documentElement.style.setProperty('--range-thumb-shadow', '#c3d400');

    buttonText ('.change-mode--js', 'tryb ciemny')
    
    isDark = false;
  }
  else {
    document.documentElement.style.setProperty('--my-background', '#272727');
    document.documentElement.style.setProperty('--shadow', '#141414');
    document.documentElement.style.setProperty('--light', '#5e5e5e');
    document.documentElement.style.setProperty('--label', '#a6b449');
    document.documentElement.style.setProperty('--placeholder', '#6b742e');
    document.documentElement.style.setProperty('--light-text', '#bebebe');
    document.documentElement.style.setProperty('--gradient-from', '#2b2a2a');
    document.documentElement.style.setProperty('--gradient-to', '#3a3a3a');
    document.documentElement.style.setProperty('--checked-background', '#abc200');
    document.documentElement.style.setProperty('--checked-shadow', '#6d7c00');
    document.documentElement.style.setProperty('--checked-light', '#e9ff00');
    document.documentElement.style.setProperty('--range-thumb-shadow', '#c3d400');

    buttonText ('.change-mode--js', 'tryb jasny')

    isDark = true;
  }
  console.log('działa!!!')
})

//color picker

var theInput = document.getElementById("color");
   
theInput.addEventListener("input", function() {
  var theColor = theInput.value;
  document.documentElement.style.setProperty('--custom-color', theColor);
});