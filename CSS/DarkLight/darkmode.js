let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');


const enabledDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null);
}

if(darkmode === 'active') enabledDarkmode();

themeSwitch.addEventListener('click', () => {
    let darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enabledDarkmode() : disableDarkmode(); 
})