export function  abc() {
    let HTML = `
    <div>Labas</div>    

    <div class="col-12 col-lg-4 container client">
        <div class="client-left">
            <div class="icon-area">          
                <i class="fa fa-users"></i>
            </div>
            <h2 class="title">Discover Our Client Feedback</h2>
            <p class="description">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
        </div>
        <div class="row">${cardsHTML}</div>
    </div>

    `;
    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}