const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = "alternative";


/* Looping through images */
fileNames.forEach((file) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file);
    newImage.setAttribute('alt', alt);
    thumbBar.appendChild(newImage);
});




/* Wiring up the Darken/Lighten button */
if (btn.getAttribute("class") == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
