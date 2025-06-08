export function focus() {
    const HTML = `
        <div class="container focus">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="focus-content">
                        <div class="focus-text">
                            <h1 class="focus-title">Bootsland Focus on your success</h1>
                            <p class="focus-desc">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>           
                            <div class="client">
                                <img src="./img/focus/client.png" alt="client">
                            <div class="client-text">  
                                <h2 class="client-name">Kendra Law</h2>
                                <p class="client-desc">Web Developer</p>
                            </div>
                        </div>
                    </div> 
                </div>    
                    <div class="col-12 col-lg-6">
                      <div class="foto">    
                        <img src="./img/focus/focus.png" alt="focus"></div>
                    </div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};