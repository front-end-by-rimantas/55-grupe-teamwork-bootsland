import { trioData } from "../components/trioData.js";

export function trioTabs() {}

    let HTML = '';

    for (const item of trioData) {
        HTML += `
        <div class="container trio-tabs">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4 col-xl-6">
                    <div class="trio-logo">
                    <img src="./img/trio-tabs/${item.logo}" alt="${item.imgAlt}"></div>
                    <h2 class="trio-title">${item.title}</h2>
                    <p class="trio-desc">${item.desc}</p>
                </div>

                
            </div>
        </div>`;
    
 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

};
