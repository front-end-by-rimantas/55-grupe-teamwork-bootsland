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
                        <div class="input-email">
                            <input id="email" type="email" name="email" class="email-form" placeholder="Email Address" required style="height: 60px;">
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
                    <div class="links-text">
                        <div class="col-12 col-sm-4 col-lg-3">
                            <p class="links">Pages</p>
                            <div class="about">
                                <a>About</a>
                                <a>Shop</a>
                                <a>Faq</a>
                                <a>Blogs</a>
                                <a>Contact Us</a>
                            </div>    
                        </div>
                        <div class="col-12 col-sm-4 col-lg-3">
                            <p class="links">Service</p>
                            <div class="about">
                                <a>Content Writing</a>
                                <a>Documentation</a>
                                <a>Account</a>
                                <a>Careers</a>
                            </div>    
                        </div>
                        <div class="col-12 col-sm-4 col-lg-3">
                            <p class="links">Legal</p>
                            <div class="about">
                                <a>Term Of Service</a>
                                <a>Privacy Policy</a>
                                <a>Support</a>
                            </div>    
                        </div>
                    </div>
                    <div class="socials">
                        <div class="col-12 col-sm-6">
                            <img src="./img/footer/logo-B.png" alt="logo-B">
                        </div>
                        <div class="soc col-12 col-sm-6">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-dribbble"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="row">
                        <p class="copy col-12">&copy; Copyright 2019 Bootsland Theme by ThemeHt All Rights Reserved</p>
                    </div>
        </footer>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}





