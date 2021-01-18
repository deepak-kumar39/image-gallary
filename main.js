const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i=1;i<6;i++){

const newImage = document.createElement('img');
let srcValue = `images\\pic${i}.jpg`;
newImage.setAttribute('src',srcValue);
newImage.addEventListener('click', (e)=>{
displayedImage.setAttribute('src', srcValue);
});
thumbBar.appendChild(newImage);
}
btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
