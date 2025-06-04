export function focus() {
    const HTML =`
        <section class="container focus">
            <div class="row">
                <div class="col-12 col-xxl-6>
                    <div class="text">
                        <h1>Bootsland Focus on your success</h1>
                        <p>We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>    
                    <div class="client">
                        <img src="./img/focus/client.png" alt="client">  
                        <h2 class="name">Kendra Lawt</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
                    <div class="col-12 col-xxl-6 m-xl-6">
                      <div class="foto">    
                        <img src="./img/focus/focus.png" alt="focus">
                    </div>
                </div>
            </div>
        </section> `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};