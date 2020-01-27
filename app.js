function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks_li = document.querySelectorAll(".nav-links li");
  const navLinks_ul = document.querySelectorAll(".nav-links");

  burger.addEventListener("click", () => {
    // toggle Nav
    nav.classList.toggle("nav-active");
    
    
    // navLinks_li.forEach((link, index) => {
    //     if(link.style.animation){
    //         link.style.animation = '';
    //     }else{
    //         link.style.animation = `animateNavLinkFade 0.5s ease forward ${index / navLinks_li.length + 0.3}s`;
    //         console.log(link);
    //         console.log(`animateNavLinkFade 0.5s ease forward ${index / navLinks_li.length + 5}s`);
    //     }
    // });
    
    // make cross sign 
    burger.classList.toggle('toggle');
  });

  // Animate Links
  // console.log(typeof(links));
}

navSlide();
