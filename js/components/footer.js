export function footer() {
    const HTML = `
        <footer class="container blue">
            <div class="row">
                <form class="col-12 col-lg-4">
                    <div class="newsletter">
                            <h3 class="text">Newsletter</h3>
                        <div class="subscribe">
                            <label for="text">Subscribe Our Newsletter</label>
                        </div>
                        <div class="email">
                            <input id="email" type="email" name="email" value="" maxlength="50" placeholder="Email Address" required>
                        </div>
                        <div class="btn">
                            <button class="subscribe">Subscribe</button>
                        </div>
                        <div class="sub-text">
                            <p>Get started for 1 Month free trial No Purchace required.</p>
                        </div>
                    </div>
               </form>
                <div class="links-title">
                    <div class="links">
                        <div class="col-12 col-sm-4 m-md-5 col-lg-2">
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
                            <p>Legal</p>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </div>
                    </div>
                    <div class="socials">
                        <div class="col-12 col-sm-6 m-md-5 col-lg-6">
                            <img src="#" alt="Logo">
                        <div>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            </div>
                        </div>
                    </div>
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





