const navBar = () =>{
    const hamburger = document.querySelector('#hamburgerID');
    const navlinks = document.querySelector('#nav-links-ID');

    hamburger.addEventListener('click', () =>{
        navlinks.classList.toggle('show');

    });
}

navBar();


