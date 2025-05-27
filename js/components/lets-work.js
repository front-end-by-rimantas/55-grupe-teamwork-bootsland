export function LetsWork() {
    
   HTML = ` <div id="app">
     
        <div class="container">
        
             <div class = "row">
                                         
                 <div class="col-6 main-lets-1 col-md-6 ">
                
                    <h6>Ever crated for</h6>
                    <h1>Let's Work With</h1>
                    <h1>Bootsland</h1>
                    <h5>Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</h5>
                    <button class="btn-get-started" id="get-started">Get Started</button>
                    <button class="btn-learn-more" id="learn-more">Learn more</button>
                    <div class = "media">       
                        <a href="#"><img class="media-icon" src="" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="" alt="Media Icon"></a> 
                        <a href="#"><img class="media-icon" src="" alt="Media Icon"></a> 
                    </div> 
                                    
                </div> 
                                        
                  <img class="img-fluid col-6 col-md-6" src="./img/010.png" alt="Let's Work With Bootsland" >
              
            </div>
                                         
        </div>


    </div>`;

}  document
       .getElementById('app')
       .insertAdjacentHTML('beforeend', HTML);  


    
