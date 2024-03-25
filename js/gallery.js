const allPorjectsBtn = document.getElementById('All-btn');
const htmlBtn = document.getElementById('html-btn');
const jsBtn = document.getElementById('js-btn');


const htmlHeader = document.getElementById('html-projects-header');
const jsHeder = document.getElementById('projects-header-js');

const htmlGallery = document.getElementById('htmlGallery');
const jsGallery = document.getElementById('jsGallery');

allPorjectsBtn.addEventListener('click', () => {
    htmlHeader.style.display = 'block';
    htmlGallery.style.display = 'grid';
    jsHeder.style.display = 'block';
    jsGallery.style.display = 'grid';
})

htmlBtn.addEventListener('click', () => {
    jsHeder.style.display = 'none';
    jsGallery.style.display = 'none';
    htmlHeader.style.display = 'block';
    htmlGallery.style.display = 'grid';

})
jsBtn.addEventListener('click', () => {
    htmlHeader.style.display = 'none';
    htmlGallery.style.display = 'none';
    jsHeder.style.display = 'block';
    jsGallery.style.display = 'grid';

})
