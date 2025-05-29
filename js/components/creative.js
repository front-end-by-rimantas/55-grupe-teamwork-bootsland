export function creative() {

    let HTML = `
    <div class="creative">
        <div class="col-12 col-lg-6">
            <img src="#" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-6">
            <div>
                <i></i>
            </div>
            <h2>We're A Creative Software Landing Page</h3>
            <p>We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul>
                <li>Fully Responsive</li>
                <li>Based On Bootstrap 4</li>
                <li>Built with Sass</li>
                <li>SVG Icon</li>
            </ul>
            <button class="btn-white" type="submit">learn more</button>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}