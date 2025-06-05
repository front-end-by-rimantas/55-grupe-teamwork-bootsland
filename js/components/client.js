 import { clientData } from "../data/clientData.js";

export function client() {
   let cardsHTML = '';

    for (let i = 0; i < clientData.length; i++) {
        const card = clientData[i];
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                CARD
            </div>`;
    }

    let HTML = `
    <div class="container section-client">
        <div class="shape-2 transform-md-rotate" style="overflow: hidden">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style="stroke: none; fill: #1360ef;"></path>
            </svg>
        </div>
        <div class="col-12 client-row">
            <div class="col-12 col-lg-4 client-column">
                <div class="icon-area">
                    <i class="fa fa-users"></i>
                </div>
                <h2 class="title">Discover Our Client Feedback</h2>
                <p class="description">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
            </div>
            <div class="card-row">${cardsHTML}</div>
        </div>
    </div>  `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}