import { creativeData } from "../data/creativeData.js";

export function creative() {
    let liHTML = '';

    for (const li of creativeData) {
        liHTML += `<li><i class="fa fa-check"></i>${li}</li>`;
    }

    let HTML = `
    <div class="container creative">
        <div class="col-12 col-lg-6">
            <img src="./img/creative-img/020.png" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-5 m-xl-1 m-xxl-1">
            <div class="icon-area">          
                <i class="fa fa-exclamation"></i>
            </div>
            <h2 class="title">We're A Creative Software Landing Page</h2>
            <p class="description">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul class="list">${liHTML}</ul>
            <button class="btn-white button" type="submit">learn more</button>            
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}