export function black() {
    const HTML = `
<section class="container black">
    <div class="row">
        <h1 class="col-12 col-md-6 col-lg-4">One Platform, Deep Insight Why Choose Bootsland</h1>
        
        <div class="col-12 col-md-6 col-lg-4">
            <div class="platforma1">
                <img src="./img/black/icon1.png" alt="icon1">
                <h2 class="title">App Development</h2>
            </div>
                <p class="desc">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
        </div>    

        <div class="col-12 col-md-6 col-lg-4">
            <div class="platforma2">
                <img src="./img/black/icon2.png" alt="icon2">
                <h2 class="title">Clean Code</h2>
            </div>
                <p class="desc">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-4">
            <div class="platforma3">
                <img src="./img/black/icon3.png" alt="icon3">
                <h2 class="title">Software Development</h2>
            </div>
                <p class="desc">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-4">
            <div class="platforma4">
                <img src="./img/black/icon4.png" alt="icon4">
                <h2 class="title">Easy to customize</h2>
            </div>
                <p class="desc">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-4">
            <div class="platforma5">
                <img src="./img/black/icon5.png" alt="icon5">
                <h2 class="title">24/7 Support</h2>
                <p class="desc">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
            </div>
        </div>
    </section>`;


    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};
