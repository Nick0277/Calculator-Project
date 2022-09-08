// Dark mode switch
const switcher = document.querySelector(".switch");
const sliderBall = document.querySelector(".sliderBall");
const checkbox = document.querySelector(".darkModeSwitch");
const template = document.querySelector(".template");
const operatorList = document.querySelectorAll('#AC,#percent,#subtraction,#addition');
const darkButtons = document.querySelectorAll(".numbers,#AC,#backspace,#percent,#division,#multiplication,#subtraction,#addition,#buttonDot");
const otherOperators = document.querySelectorAll("#backspace,#division,#multiplication")

checkbox.addEventListener('click', () => {
   if (checkbox.checked) {
      switcher.style.backgroundColor = "#3c096c";
      sliderBall.style.transform = "translateX(17px)";
      document.body.style.backgroundImage = "url('./Media/background_image_darker.png')"
      template.style.backgroundColor = "#243441";
      operatorList.forEach(element => element.style.color = "#e79657");
      total.style.color = "#feffff";
      darkButtons.forEach(element => element.style.backgroundColor = "#22313e");
      otherOperators[0].style.backgroundImage = "url('./Media/backspaceOrange.png')";
      otherOperators[1].style.backgroundImage = "url('./Media/divisionOrange.png')";
      otherOperators[2].style.backgroundImage = "url('./Media/multiplyOrange.png')";
      template.style.boxShadow = "0px 7px 29px 0px rgba(0, 0, 0, 0.25)";
   } else {
      switcher.style.backgroundColor = "";
      sliderBall.style.transform = "";
      document.body.style.backgroundImage = "";
      template.style.backgroundColor = "";
      operatorList.forEach(element => element.style.color = "");
      total.style.color = "";
      darkButtons.forEach(element => element.style.backgroundColor = "");
      otherOperators[0].style.backgroundImage = "url('./Media/backspace.png')";
      otherOperators[1].style.backgroundImage = "url('./Media/division.png')";
      otherOperators[2].style.backgroundImage = "url('./Media/multiply.png')";
   }
});
