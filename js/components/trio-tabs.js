import { trioData } from "../data/trioData.js";    

export function trioTabs() {
    let tabsHTML = '';

    for (let i = 0; i < 2; i++) {
        const trio = trioData[i];
        tabsHTML += `
         <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="trio-logo">
                <img src="${trio.img}" alt="${trio.imgAlt}">
            </div>
                <h2 class="trio-title">${trio.title}</h2>
                <p class="trio-desc">${trio.desc}</p>
        </div>`;
    }

   const HTML = `
        <div class="container trio-tabs">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4 col-xl-6">
                    <div class="trio-logo">
                    <img src="./img/trio-tabs/logo1.png" alt="logo1"></div>
                    <h2 class="trio-title">Creative Design</h2>
                    <p class="trio-desc">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
                ${tabsHTML}
        </div>`;
 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

};
