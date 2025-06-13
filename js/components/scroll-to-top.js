

export function scroll(){


   
   const HTML = `<a class="scrl-btn" id="scrl-btn" title="Go to top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>`;
  

  document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);





const scrollsDOM = document.querySelector('.scrl-btn');
scrollsDOM.addEventListener ('click', function () 
  
 {window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'})
 



});


   
};

/*

function scrollFunction() 
    {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
            {
                back2TopBtnDOM.style.display = "flex";
            } else
            {
                back2TopBtnDOM.style.display = "none";
            }
    }





const backToTopButtonDOM = document.querySelector('.scrl-btn');

addEventListener('scroll', () => {
  if (document.scrollTop > 40) {
    backToTopButtonDOM.classList.add('show');
  } else {
    backToTopButtonDOM.classList.remove('show');
  }
});






}








/*

 const headerDOM = document.querySelector('.header')
    const hamburgerDOM = document.querySelector('.hamburger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header');

    let clickCount = 0;
    hamburgerDOM.addEventListener('click', () => {
        if (clickCount++ % 2 === 0) {
            mobileHeaderDOM.classList.add('show');           
        } else {
            mobileHeaderDOM.classList.remove('show');
        }
    })
*/
