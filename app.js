const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');
const navSlide = () => {
  
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navSlidein 0.5s forwards` ;
          } else {
            nav.style.animation = `navSlideOut 0.5s forwards`;
          }
        //animation
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
  }
  navSlide();




  var hellos = [ "안녕하세요", "今日は", "你好", "Bonjour", "Hola", "Guten Tag", "नमस्ते", "مرحبًا", "สวัสดี", 
  "Kamusta", "Xin chào", "Hello"];
  var counter=0;
  var elem = document.getElementById("changeText");
  var inst = setInterval(change, 5000);
  function change(){
    elem.classList.add('hide');
    setTimeout(function () {
      elem.innerHTML = hellos[counter];
      elem.classList.remove('hide');
      counter++;
      if (counter>=hellos.length){
        counter = 0;
      }
    }, 2500);
    // elem.innerHTML = hellos[counter];
    // counter++
    // if (counter>=hellos.length){
    //     counter=0;
    // }
  }

const pages = document.querySelectorAll(".tabContent");
const navToggle  = document.getElementById("navToggle");
const translateAmount = 100;
const arr = document.querySelectorAll(".arr");
const arr2 = document.getElementById("arr2");
const arr3 = document.getElementById("arr3");
const arr4 = document.getElementById("arr4");
const arr5 = document.getElementById("arr5");
const arr6 = document.getElementById("arr6");
const arr7 = document.getElementById("arr7");
const aboutText = document.getElementById("aboutText");
const nameText = document.getElementById("nameText");
const name3DText = document.getElementById("name-3DText");
var tabs = ['home', 'about', 'projects', 'contact'];
const projTitle = document.getElementById("projTitle");
const contactText = document.getElementById("contactText");
// const style = getComputedStyle(nameText);

let translate = 0;
let translateNavSlider = 0;
const translateAmt = 1;
let pagetab = 1;
slide = (evt, direction, tab) =>{
  if (direction === "next"){
    translate -= translateAmount;
    translateNavSlider+= translateAmount;
    pagetab += translateAmt;
  }
  else{
    translate += translateAmount;
    translateNavSlider-= translateAmount;
    pagetab -= translateAmt;
  }

    
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    )
    navToggle.style.transform = `translateX(${translateNavSlider}%)`
    
    arr2.classList.remove('arr-animation');
    arr3.classList.remove('arr-animation');
    arr4.classList.remove('arr-animation');
    arr5.classList.remove('arr-animation');
    arr6.classList.remove('arr-animation');
    arr7.classList.remove('arr-animation');
    if (tab == 'about'){
      aboutText.classList.remove('about-text-animation');
    }else if (tab == 'home'){
      nameText.style.display= 'none';
      nameText.classList.remove('name-Text')
      name3DText.classList.remove('folded-text')
    }
    else if (tab == 'projects'){
      projTitle.classList.remove('about-text-animation');
    }
    else if (tab == 'contact'){
      contactText.classList.remove('about-text-animation');
    }
    


      
    
    
    
    setTimeout(function() {
      arr2.classList.add('arr-animation');
      arr3.classList.add('arr-animation');
      arr4.classList.add('arr-animation');
      arr5.classList.add('arr-animation');
      arr6.classList.add('arr-animation');
      arr7.classList.add('arr-animation');
      aboutText.classList.add('about-text-animation');
      nameText.style.display= 'block';
      nameText.classList.add('name-Text')
      nameText.style.animationDelay='0.8s';
      name3DText.classList.add('folded-text');
      name3DText.style.animationDelay='1s';
      projTitle.classList.add('about-text-animation');
      contactText.classList.add('about-text-animation');
    }, 0)


    


}

function openTab(evt, direction, tab){
  if (nav.classList.contains("nav-active")){
    nav.style.animation = `navSlideOut 0.5s`;
    navLinks.forEach((link, index)=>{
      if (link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
      }
  });
  
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
  }

  if (direction > pagetab){
    translate -= translateAmount*(direction -pagetab);
    translateNavSlider+= 100*(direction-pagetab);
    pagetab = direction;
  }
  else{
    translate += translateAmount*(pagetab-direction);
    translateNavSlider-= 100*(pagetab-direction);
    
    pagetab = direction;
  }
  pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`)
)
    navToggle.style.transform = `translateX(${translateNavSlider}%)`
  arr2.classList.remove('arr-animation');
  arr3.classList.remove('arr-animation');
  arr4.classList.remove('arr-animation');
  arr5.classList.remove('arr-animation');
  arr6.classList.remove('arr-animation');
  arr7.classList.remove('arr-animation');
  if (tab == 'about'){
    aboutText.classList.remove('about-text-animation');
  }else if (tab == 'home'){
    nameText.style.display= 'none';

    nameText.classList.remove('name-Text')
    name3DText.classList.remove('folded-text')

  }
  else if (tab == 'projects'){
    projTitle.classList.remove('about-text-animation');
  }
  else if (tab == 'contact'){
    contactText.classList.remove('about-text-animation');
  }
  setTimeout(function() {
    arr2.classList.add('arr-animation');
    arr3.classList.add('arr-animation');
    arr4.classList.add('arr-animation');
    arr5.classList.add('arr-animation');
    arr6.classList.add('arr-animation');
    arr7.classList.add('arr-animation');
    aboutText.classList.add('about-text-animation');
    nameText.style.display= 'block';

    nameText.classList.add('name-Text')
    nameText.style.animationDelay='0.8s';
    name3DText.classList.add('folded-text');
    name3DText.style.animationDelay='1s';
    projTitle.classList.add('about-text-animation');
    contactText.classList.add('about-text-animation');
  }, 0)
}

