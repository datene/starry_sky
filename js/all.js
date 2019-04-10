let hasBeenTouchedRecently = false;

const removeElement = (event) => {
  event.preventDefault();
  event.currentTarget.remove();
}

const drawStar = (position) => {
  const starSize = Math.floor(Math.random() * (90 - 30) + 30);;
  const star = document.createElement("i");
  star.classList.add("fas", "fa-star", "skystar");
  star.style = `font-size:${starSize}px;top:${position.yPos - (starSize / 2)}px;left:${position.xPos - ((starSize * 1.125) / 2)}px;`;
  star.addEventListener("animationend", removeElement);
  document.body.insertAdjacentElement('afterbegin', star);
}


const handleClick = (event) => {
  if(hasBeenTouchedRecently) {
    return;
  } else if(event.type === 'touchstart') {
    hasBeenTouchedRecently = true;
    setTimeout(() => { hasBeenTouchedRecently = false; }, 200);
    drawStar({xPos: event.touches[0].pageX, yPos: event.touches[0].pageY});
  } else if(event.type === 'click') {
    drawStar({xPos: event.pageX, yPos: event.pageY});
  }
}


document.addEventListener('click', handleClick);
document.addEventListener('touchstart', handleClick);