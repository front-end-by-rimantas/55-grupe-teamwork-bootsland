import { bloglistData } from "../data/blog-listData.js"; 

export function bloglist() {
   let h2HTML =  ""
   for (const h2 of bloglistData) {
      h2HTML +=`<h2 class="h1-1">${h2}</h2>`}

   
   let HTML = `<section>
       <div class="row top col-12 col-6">

                <div class="top1 col-12 col-xxl-4">
                    <h3>From Our Blog List Latest Feed</h2>
                </div>

                <div class = "top2 col-12  col-xxl-6"> 
                   <h2>All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</h2></h2>
                </div> 
       
         </div>
       

      <div class="row ">

                <div class="card-1 col-12 col-xl-4"> 
                     
                    <div class = "img-container">
                    <div class="img-add">15<br>July </div>
                    <img class="list-1" src="./img/blog-list/Blog-list-1.3.png">
                    </div>
                    <a class="card-1-a">Sass</a>
                    <h3 class="card-h3">Bootsland Perfect Performance landing Page</h3>
                    <h4 class="card-h4">Businesses need access to development resources serspiciatis unde omnis iste natus error.</h4>
                    <a class="card-ul">                        
                        <i class="fa fa-comment-o" aria-hidden="true">131</i>                    
                        <i class="fa fa-eye" aria-hidden="true">25</i>               
                        <i class="fa fa-comment-o" aria-hidden="true">131</i>                                                            
                     </a>
                              
                </div>
                
                <div class= "card-1 col-12 col-xl-4" >

                <div class = "img-container">
                    <div class="img-add">15<br>July</div>
                    <img class="list-1" src="./img/blog-list/Blog-list-2.3.png">
                    </div>
                     <a class="card-1-a">Marketing</a>
                     <h3 class="card-h3">The most powerfull template that make you.</h3>
                     <h4 class="card-h4">Businesses need access to development resources serspiciatis unde omnis iste natus error.</h4>
                     <a class="card-ul">                        
                        <i class="fa fa-comment-o" aria-hidden="true">131</i>                    
                        <i class="fa fa-eye" aria-hidden="true">25</i>               
                        <i class="fa fa-comment-o" aria-hidden="true">131</i> 
                </div>

                <div class= "card-1 col-12 col-xl-4">

                      <div class = "img-container">
                    <div class="img-add">15<br>July </div>
                    <img class="list-1" src="./img/blog-list/blog-list-3.3.png">
                    </div>
                    <a class="card-1-a">Landing</a>
                    <h3 class="card-h3">A brand for a company is like a reputation person.</h3>
                    <h4 class="card-h4">Businesses need access to development resources serspiciatis unde omnis iste natus error.</h4>
                    <a class="card-ul">                        
                        <i class="fa fa-comment-o" aria-hidden="true">131</i>                    
                        <i class="fa fa-eye" aria-hidden="true">25</i>               
                        <i class="fa fa-comment-o" aria-hidden="true">131</i> 

                </div>

              
 


      </div>    
      










    </section>
 `;  

  document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
   }



/*
   
   let h2HTML =  ""
   for (const h2 of bloglistData) {
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
   } */