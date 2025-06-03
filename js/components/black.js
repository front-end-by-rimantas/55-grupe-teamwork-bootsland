import { blackData } from "../data/blackData.js";    

export function black () {
    let blackHTML = '';

    for (let i = 0; i < blackData.length; i++) {
            const black = blackData[i];
            blackHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="dark-platforma">
                    <div class="platforma">
                        <img src="${black.img}" alt="${black.imgAlt}">
                        <h2 class="title">${black.title}</h2>
                    </div>
                        <p class="desc">${black.desc}</p>
                </div>
            </div>`;
    }

    const HTML = `
        <section class="container black">
            <div class="row">
                <h1 class="col-12 col-md-6 col-lg-4">One Platform, Deep Insight Why Choose Bootsland</h1>
                ${blackHTML}
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};
