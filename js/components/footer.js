export function footer() {
    const HTML = `
        <footer class="container blue">
            <div class="row">
                <div class="newsletter">
                <form class="col-12 col-lg-4">
                      <h3>Newsletter</h3>
                    <div class="subscribe">
                        <label for="email">Subscribe Our Newsletter</label>
                        <input id="email" type="email" name="email" value="" maxlength="60" placeholder="Email Address" required>
                    </div>
                
                    <div class="btn">
                        <button class="subscribe">Subscribe</button>
                    </div>
                      <div >
                        <p>Get started for 1 Month free trial No Purchace required.</p>
                    </div>
               </form>
               </div>
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










