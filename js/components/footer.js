export function footer() {
    const HTML = `
        <footer class="container blue">
            <div class="row">
                <div class="newslette">
                <form class="col-12 col-lg-4">
                    <div>
                    <h3>Newsletter</h3>
                    </div>
                    <div class="subscribe">
                        <label for="email">Subscribe Our Newsletter</label>
                        <input id="email" type="email" name="email" value="" maxlength="50" placeholder="Email Address" required>
                    </div>
                    <div>
                        <button type="subscribe">Subscribe</button>
                    </div>
                </form>
                    <div class="col-12 col-sm-4 col-lg-2">
                        <p>Pages</p>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                    <div class="col-12 col-sm-4 col-lg-2">
                    <p>Service</p>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
                <div class="col-12 col-sm-4 col-lg-2">
                    <p>Contact us</p>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
                 <div class="col-12 col-sm-6 col-lg-">
                    <img src="#" alt="Logo">
                    <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                    <div>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                    </div>
                </div>
                <div class="row">
                <p class="col-12">&copy; Copyright 2024 - Current. All Right Reserved</p>
            </div>
        </footer>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}










