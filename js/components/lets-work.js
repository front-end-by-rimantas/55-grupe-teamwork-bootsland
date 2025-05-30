export function letsWork() {
    
   let HTML = `
     
        <div class="container">
        
             <div class = "row">
                                         
                 <div class="lets-work-text col-6 " >
                
                    <h6 class="badge">Ever Created For</h6>
                    <h1 class="h1-1">Let's Work With</h1>
                    <h1 class="h1-2">Bootsland</h1>
                    <h5 class= "h5-1">Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</h5>
                    <button class="bt btn-learn-more btn-blue" id="learn-more">Learn more</button>
                    <button class="bt btn-get-started btn-white" id="get-started">Get Started</button>
                    <div class = "media-ico">  

                        <a href="#"><img class="media-icon" src="/img/ThMSO.png" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="/img/HecTolab.png" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="/img/HorTech.png" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="/img/JaMes.png" alt="Media Icon"></a> 

                    </div> 
                                    
                 </div> 
                                        
                  <img class="img-fluid col-6 " src="./img/010.png" alt="Let's Work With Bootsland" >
                  
                  </div>   
              
            </div> 
                                         
        


    </div>` ;  

      document
       .getElementById('app')
       .insertAdjacentHTML('beforeend', HTML);  


    }  
