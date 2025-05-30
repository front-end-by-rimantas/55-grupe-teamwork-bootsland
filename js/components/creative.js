import { creativeData } from "../data/creativeData.js";

export function creative() {
    let liHTML = '';

    for (const li of creativeData) {
        liHTML += `<li><i class="fa fa-check-circle></i>${li}</li>`;
    }

    let HTML = `
    <div class="creative">
        <div class="col-12 col-lg-6">
            <img src="#" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-6">
            <div>
                <i></i>
            </div>
            <h2>We're A Creative Software Landing Page</h2>
            <p>We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul>${liHTML}</ul>
            <button class="btn-white" type="submit">learn more</button>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}