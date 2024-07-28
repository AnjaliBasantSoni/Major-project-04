function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#loco"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#loco", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#loco").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco()
  
  var flag = 0
  document.querySelector("#menu").addEventListener("click",function () {
    if (flag ==0) {
      document.querySelector("#menu").style.height = "24px"
      document.querySelector("#line1").style.rotate = "49deg"
      document.querySelector("#line2").style.rotate = "-42deg"
      document.querySelector("#full-scr").style.top = 0
      document.querySelector("#nav h4").innerHTML = "close"
      flag = 1
    } else {
      document.querySelector("#menu").style.height = "12px"
      document.querySelector("#line1").style.rotate = "0deg"
      document.querySelector("#line2").style.rotate = "0deg"
      document.querySelector("#full-scr").style.top= "-100%"
      document.querySelector("#nav h4").innerHTML = "menu"
      flag = 0
    }
  })
  
  var flag = 0
  document.querySelector("#nav h3").addEventListener("click",function () {
    if (flag ==0) {
      document.querySelector("#main").style.top = 0
      flag = 1
    } else {
      document.querySelector("#main").style.top= "-100%"
      flag = 0
    }
  })
  
  var orange = gsap.timeline()
  orange.from("#page3",{
    display:"none"
   })
  
  // var swiper = new Swiper('.swiper', {
  //   slidesPerView: 3,
  //   direction: getDirection(),
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   on: {
  //     resize: function () {
  //       swiper.changeDirection(getDirection());
  //     },
  //   },
  // });
  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
  //   return direction;
  // }
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  gsap.from("#next img",{
    height: "200%",
    scrollTrigger:{
      trigger: "#next img",
      scroller:"#loco",
      // markers:true,
      start:"top 80%",
      end:"top 40%",
      scrub:2
    }
  })