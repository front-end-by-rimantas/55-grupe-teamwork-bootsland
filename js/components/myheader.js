export function myheader() {

    let HTML = `
        <div id="app" class="container header">
            <div class="row">
                <div class="col-12 header-content">
                    <div class="logo">       
                        <a class="startlogo" href="#">boots</a>
                        <a class="endlogo" href="#">land.</a>
                    </div>
                    <div class="main-nav">
                        <a class="link" href="#">home</a>
                        <a class="link" href="#">pages</a>
                        <a class="link" href="#">shop</a>
                        <a class="link" href="#">features</a>
                    </div>          
                    <i class="fa fa-bars hamburger"></i>
                    <button class="btn-blue" type="submit">buy now</button>
                </div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}