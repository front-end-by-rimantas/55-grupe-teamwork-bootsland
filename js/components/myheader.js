import { headerMenuData } from "../data/myheaderData.js";

export function header() {
    let HTML = `
        <div id="app" class="container header header-fixed">
            <div class="row">
                <div class="col-12 header-content">
                    <div class="logo">       
                        <a class="startlogo" href="#">boots<span class="endlogo">Land.</span></a>
                    </div> 
                    ${headerMenu(headerMenuData)}
                    <i class="fa fa-bars hamburger"></i>
                    <button class="btn-blue" type="submit">buy now</button>
                </div>
            </div>
        </div>
        <div class="mobile-main-header">
        ${headerMenu(headerMenuData)}
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
        
        const hamburgerDOM = document.querySelector('.hamburger');
        const mobileHeaderDOM = document.querySelector('.mobile-main-header');
        
    hamburgerDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.add('show');
    })

    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            mobileHeaderDOM.classList.remove('show');
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


