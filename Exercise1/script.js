function changeName() {
  let name = prompt("Oh nah nah...what's my name?", "Rihanna");
  const nameSpan = document.querySelector('.nameSpan');
  const imgRihanna = document.querySelector('.imgRihanna');
  const noInput = document.querySelector('.noName');
  const fentyLine = document.querySelector('.fentyLine');
  const body = document.querySelector('body');
  if (name.toLowerCase() === 'rihanna') {
    nameSpan.innerHTML = 'Rihanna';
    body.style.backgroundColor = 'red';
    imgRihanna.src = './rihanna-gif.gif';
    fentyLine.innerHTML = '✨ Fenty Beauty ✨';
  }
  else if (!name) {
    nameSpan.innerHTML = '...';
    noInput.innerHTML = 'พี่ถามไม่ตอบเลย 🥹'
  }
  
  else {
    nameSpan.innerHTML = name;
    imgRihanna.src = './rickroll.gif';
    body.style.backgroundColor = 'lightblue';
  } 

}
