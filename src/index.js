import './style.css';
import {home} from './home';
import {menu} from  './menu';
import {contact} from  './contact';

home();

function navigation() {
    const homePage = document.querySelector("#home");
    homePage.addEventListener('click', home);

    const menuPage = document.querySelector("#menu");
    menuPage.addEventListener('click', menu);

    const contactPage = document.querySelector("#contact");
    contactPage.addEventListener('click', contact);
}

navigation();