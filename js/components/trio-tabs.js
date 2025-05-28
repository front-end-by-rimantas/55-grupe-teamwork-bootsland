export function trioTabs() {
    const HTML = ` 
        <div class="container">
            <div class="row">
                <div class="col-sm-1 col-lg-4 col-xl-6 ">
                    <div>
                    <img class="logo1" src="./img/logo1.png" alt="logo1"></div>
                    <h2>Creative Design</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>


                <div class="col-3">
                
                    <div>
                    <img class="logo2" src="./img/logo2.png" alt="logo2"></div>
                    <h2>Easy To Start</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
           
                <div class="col-3">
                    <div>
                    <img class="logo3" src="./img/logo3.png" alt="logo3"></div>
                    <h2>Management</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>`;

 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

}