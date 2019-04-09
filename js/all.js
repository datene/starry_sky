const removeElement = (event) => {
  event.preventDefault();
  event.currentTarget.remove();
}

const handleClick = (event) => {
  event.preventDefault();

  const starSize = Math.floor(Math.random() * (90 - 30) + 30);;

  const star = document.createElement("i");
  star.classList.add("fas", "fa-star", "skystar");
  star.style = `font-size:${starSize}px;top:${event.pageY - (starSize / 2)}px;left:${event.pageX - ((starSize * 1.125) / 2)}px;`;
  star.addEventListener("animationend", removeElement);

  document.body.insertAdjacentElement('afterbegin', star);
}

document.addEventListener('click', handleClick);