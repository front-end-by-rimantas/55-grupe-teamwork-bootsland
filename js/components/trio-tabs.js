import { trioData } from "../data/trioData.js";    

export function trioTabs() {
    let tabsHTML = '';

    for (let i = 0; i < trioData.length; i++) {
        const trio = trioData[i];
        tabsHTML += `
         <div class="${trio.class}">
            <div class="active">
            <div class="trio-logo">
                <img src="${trio.img}" alt="${trio.imgAlt}">
            </div>
                <h2 class="trio-title">${trio.title}</h2>
                <p class="trio-desc">${trio.desc}</p>
            </div>    
        </div>`;
    }

   const HTML = `
        <div class="container trio-tabs">
            <div class="row">
                ${tabsHTML} 
        </div>`;
 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

};
