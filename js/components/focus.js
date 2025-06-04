export function blog() {
    const HTML =`
        <section class="container focus">
            <div class="row">
                <div class="col-12 >
                    <h1 class="title">Bootsland Focus on your success</h1>
                    <p class="desc">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            <div class="web">
                <img src=".img/focus/web.png" alt="web">  
                    
    `
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}