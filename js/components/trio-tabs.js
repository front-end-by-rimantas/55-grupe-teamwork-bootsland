export function trioTabs() {
    const HTML = ` 
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div>LOGO</div>
                    <h2>Creative Design</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
        
                <div class="col-3">
                    <div>LOGO</div>
                    <h2>Easy To Start</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
           
                <div class="col-3">
                    <div>LOGO</div>
                    <h2>Management</h2>
                    <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>`;

 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);       

}