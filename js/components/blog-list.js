import { bloglistData } from "../data/blog-listData.js"; 

export function bloglist() 
{
   let blistHTML =  '';

   for (let i = 0; i < bloglistData.length; i++) {
      const blis = bloglistData[i];
      blistHTML += ` 
                <div class="card-1 col-12 col-xl-4"> 
                     <div class = "img-container">
                        <div class='${blis.class}'>15<br>July</div>
                        <img class="list-1" src="${blis.img}">
                    </div>
                    <a class="card-1-a">${blis.card1}</a>
                    <h3 class="card-h3">${blis.h3}</h3>
                    <h4 class="card-h4">${blis.h4}</h4>
                    <a class="card-ul">                        
                        ${blis.ul}                                                           
                     </a>    
                </div>`;
   }      
                 
  
const HTML = `
   <section> 
                  <span class="row top col-7 m-md-3 anim">
                    <i class="fa fa-bold fab" aria-hidden="true"></i>
                    </span>
       <div class="row top col-12 col-6">
               
                <div class="top1 col-12 col-xxl-4">
                     
                    <h3>From Our Blog List Latest Feed</h2>
                </div>
                <div class = "top2 col-12  col-xxl-6"> 
                   <h2>All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</h2></h2>
                </div> 
      </div>
       
      <div class="row ">
         ${blistHTML}
        
      </div>    
   </section>  `;
       
  document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
   }
