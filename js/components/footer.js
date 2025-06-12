import { footerData } from "../data/footerData.js";    

export function footer() {
    let linksHTML = '';

    for (let i = 0; i < 1; i++) {
            const links = footerData[i];
            linksHTML += `
            
                <div class="links-title">
                    <div class="links-text">
                        <div class="col-sm-12 col-lg-3">
                            <p class="links">Pages</p>
                             ${links.text} 
                        </div>
                        <div class="col-sm-12 col-lg-3">
                            <p class="links">Service</p>
                            ${links.text}  
                        </div>
                        <div class="col-sm-12 col-lg-3">
                            <p class="links">Legal</p>
                            ${links.text}  
                        </div>
                    </div>`;
                    
    }

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
               ${linksHTML}
               <div class="socials">
                        <div class="col-12 col-md-6">
                            <img src="./img/footer/logo-B.png" alt="logo-B">
                        </div>
                        <div class="soc col-12 col-md-6">
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
                        <div class="copy">
                            <p class="copy col-12">&copy; Copyright 2025 Bootsland Theme by <a href="#">ThemeHt</a> All Rights Reserved</p>
                        </div>    
                    </div>
        </footer>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};
