import { headerMenuData } from "../data/myheaderData.js";

export function header() {
    let HTML = `
        <div id="app" class="container header">
            <div class="row no-margin-bottom">
                <div class="col-12 header-content">
                    <div class="logo">       
                        <a class="startlogo" href="#">boots<span class="endlogo">Land.</span></a>
                    </div> 
                    ${headerMenu(headerMenuData)}
                    <i class="fa fa-bars hamburger"></i>
                    <button class="btn-blue" type="submit">buy now</button>
                </div>
            </div>
            <div class="row">               
                <div class="mobile-main-header col-12">
                ${headerMenu(headerMenuData)}
                </div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
 
    const headerDOM = document.querySelector('.header')
    const hamburgerDOM = document.querySelector('.hamburger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header');

    let clickCount = 0;
    hamburgerDOM.addEventListener('click', () => {
        if (clickCount++ % 2 === 0) {
            mobileHeaderDOM.classList.add('show');           
        } else {
            mobileHeaderDOM.classList.remove('show');
        }
    })

    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            mobileHeaderDOM.classList.remove('show');
        }
    })

    addEventListener('scroll', () => {
        if (document.scrollingElement.scrollTop > 280) {
            headerDOM.classList.add('header-fixed');
        } else {
            headerDOM.classList.remove('header-fixed');
        }
        
    })
}

function headerMenu(data) {
    let HTML = '';

    for (const link of headerMenuData) {
        HTML += `<a class="link" href="${link.href}">${link.text}</a>`;
    }
    return `<nav class="main-nav">${HTML}</nav>`;
}


