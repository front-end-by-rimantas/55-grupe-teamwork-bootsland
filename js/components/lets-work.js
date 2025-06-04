import { workData } from "../data/lets-workData.js";

export function letsWork() {
   let h2HTML =  ""
   for (const h2 of workData) {
      h2HTML +=`<h2 class="h1-1">${h2}</h2>`}

   
   let HTML = `<div class="row">  
   

                <div class="column col-12 col-xl-6">
                <div class="text">
                    <h6 class="badge"> Ever Created For</h6>
                    <h2 class="h1-1">${h2HTML}</h2>
                    <h2 class="h1-2">Bootsland</h2>
                    <h5 class="h5-1">Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</h5>
               </div>

                <div class="buttons">
                  <button class="btn-blue" id="learn-more">Learn more</button>
                  <button class="btn-white" id="get-started">Get Started</button>

                </div> 
                 </div>
                                               
                <div class="img col-12 col-xl-6"> 
                <img class="img-010" src="./img/lets-work/010.png" alt="Let's Work With Bootsland" > 
              </div>



</div> 
 `;  

  document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);


}







/*





   import { creativeData } from "../data/creativeData.js";

export function creative() {
    let liHTML = '';

    for (const li of creativeData) {
        liHTML += `<li><i class="fa fa-regular fa-check"></i>${li}</li>`;
    }

    let HTML = `
    <div class="container creative">
        <div class="col-12 col-lg-6">
            <img src="./img/creative-img/020.png" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-5 m-xl-1 m-xxl-1">
            <div class="icon-area">          
                <i class="fa fa-exclamation"></i>
            </div>
            <h2 class="title">We're A Creative Software Landing Page</h2>
            <p class="description">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul>${liHTML}</ul>
            <button class="btn-white button" type="submit">learn more</button>

            
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}
      /*
      document
       .getElementById('app')
       .insertAdjacentHTML('beforeend', HTML);  


    }  


/*

     import { creativeData } from "../data/creativeData.js";

export function creative() {
    let liHTML = '';

    for (const li of creativeData) {
        liHTML += `<li><i class="fa fa-regular fa-check"></i>${li}</li>`;
    }

    let HTML = `
    <div class="container creative">
        <div class="col-12 col-lg-6">
            <img src="./img/creative-img/020.png" alt="ketveriukė">
        </div>
        <div class="col-12 col-lg-5 m-xl-1 m-xxl-1">
            <div class="icon-area">          
                <i class="fa fa-exclamation"></i>
            </div>
            <h2 class="title">We're A Creative Software Landing Page</h2>
            <p class="description">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul>${liHTML}</ul>
            <button class="btn-white button" type="submit">learn more</button>

            
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
} */