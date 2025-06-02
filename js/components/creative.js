import { creativeData } from "../data/creativeData.js";

export function creative() {
    let liHTML = '';

    for (const li of creativeData) {
        liHTML += `<li><i class="fa fa-regular fa-check"></i>${li}</li>`;
    }

    let HTML = `
    <div class="container creative">
        <div class="col-12 col-lg-6">
            <img src="./img/creative-img/020.png" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-6">          
            <i class="icon-area fa fa-exclamation"></i>
            <h2 class="title">We're A Creative Software Landing Page</h2>
            <p class="description">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul>${liHTML}</ul>
            <button class="btn-white button" type="submit">learn more</button>

            
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}