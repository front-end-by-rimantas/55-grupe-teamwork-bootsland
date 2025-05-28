export function letsWork() {
    
   let HTML = `
     
        <div class="container">
        
             <div class = "row">
                                         
                 <div class="lets-work-text col-6">
                
                    <h6>Ever crated for</h6>
                    <h1>Let's Work With</h1>
                    <h1>Bootsland</h1>
                    <h5>Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</h5>
                    <button class="btn-get-started" id="get-started">Get Started</button>
                    <button class="btn-learn-more" id="learn-more">Learn more</button>
                    
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
