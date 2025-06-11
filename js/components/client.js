 import { clientData } from "../data/clientData.js";

export function client() {
    let cardsHTML = '';

    for (let i = 0; i < 4; i++) {

        const card = clientData[i];
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4 visit-card">
                <img class="person-img" src="./img/client-img/${card.img}" alt="${card.imgAlt}">
                <div class="card-column">
                    <p class="intro">${card.introduction}</p>
                    <div class="person-row">
                        <h3 class="person-name">${card.personality}</h3>
                        <p class="person-onus" >${card.duties}</p>
                    </div>
                </div>
            </div>`;
    }

    let HTML = `
    <div class="section-client">
        <div class="client-bgr">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style="stroke: none; fill: #1360ef;"></path>
            </svg>
        </div>
        <div class="client-row">
            <div class="col-12 col-lg-4 client-column">
                <div class="blue-area">
                    <i class="fa fa-users"></i>
                </div>
                <h2 class="title">Discover Our Client Feedback</h2>
                <p class="description">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
            </div>        
            <div class="cards-bar col-12 col-lg-6">
                <div class="cards col-12 col-lg-8">${cardsHTML}</div>
            </div>
        </div>           
    </div>  `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}
