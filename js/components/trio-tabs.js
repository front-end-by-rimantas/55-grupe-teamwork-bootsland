export function trioTabs() {

    const HTML = `
        <div class="container trio-tabs">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4 col-xl-6">
                    <div class="trio-logo">
                    <img src="./img/trio-tabs/logo1.png" alt="logo1"></div>
                    <h2 class="trio-title">Creative Design</h2>
                    <p class="trio-desc">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>

                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                
                    <div class="trio-logo">
                    <img class="logo2" src="./img/trio-tabs/logo2.png" alt="logo2"></div>
                    <h2 class="trio-title">Easy To Start</h2>
                    <p class="trio-desc">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
           
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="trio-logo">
                    <img class="logo3" src="./img/trio-tabs/logo3.png" alt="logo3"></div>
                    <h2 class="trio-title">Management</h2>
                    <p class="trio-desc">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>`;
    
 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

};
