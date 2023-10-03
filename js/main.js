const btn = document.getElementById('btn-share');
const socials = document.getElementById('soicials');
const active = document.querySelector('.active');

btn.addEventListener('click', () => {
    socials.classList.toggle('active')
})