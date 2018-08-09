/* Pages Control*/
document.getElementById("button-div").addEventListener("click", function (e) {
  let target = e.target;
  let gal1 = document.getElementById("ga");
  let gal2 = document.getElementById("gallery2");
  let gal3 = document.getElementById("gallery3");

  if(target.id == '1'){
    gal1.classList.remove('hidden');
    gal2.classList.add('hidden');
    gal3.classList.add('hidden');
  }else if(target.id == '2'){
    gal1.classList.add('hidden');
    gal2.classList.remove('hidden');
    gal3.classList.add('hidden');
  }else if(target.id == '3'){
    gal1.classList.add('hidden');
    gal2.classList.add('hidden');
    gal3.classList.remove('hidden');
  }
 
});

/*photo selector sectionOne*/
document.querySelectorAll('.sectionOne').forEach(function(elem){
  let gallery1 = document.getElementById("ga");
  let gallery2 = document.getElementById("gallery2");
  let gallery3 = document.getElementById("gallery3");
  let btn      = document.getElementById("button-div");
  let controlBtn = document.querySelector(".floatingDiv");

    elem.onclick = function selectedElement(){
     let src = elem.getAttribute('data-src');
     let html = '<img src="' + src + '">';
     let floatingGallery = document.querySelector(".floating-gallery");
     floatingGallery.innerHTML = html;
     
     gallery1.classList.toggle("hidden");
     gallery2.classList.add("hidden");
     gallery3.classList.add("hidden");
     btn.classList.add("hidden");
     controlBtn.classList.toggle("floatingDivActive");
    secOne();
    }
  });
  /*Photo Selector sectionTwo*/
document.querySelectorAll('.sectionTwo').forEach(function(elem){
  let gallery1 = document.getElementById("ga");
  let gallery2 = document.getElementById("gallery2");
  let gallery3 = document.getElementById("gallery3");
  let btn      = document.getElementById("button-div");
  let controlBtn = document.querySelector(".floatingDiv");

  elem.onclick = function selectedElement(){
   let src = elem.getAttribute('data-src');
   let html = '<img src="' + src + '">';
   let floatingGallery = document.querySelector(".floating-gallery");
   floatingGallery.innerHTML = html;
     
   gallery1.classList.add("hidden");
   gallery2.classList.toggle("hidden");
   gallery3.classList.add("hidden");
   btn.classList.add("hidden");
   controlBtn.classList.toggle("floatingDivActive");
   secTwo();
   }
});
  /*Photo Selector sectionThree*/
document.querySelectorAll('.sectionThree').forEach(function(elem){
 let gallery1 = document.getElementById("ga");
 let gallery2 = document.getElementById("gallery2");
 let gallery3 = document.getElementById("gallery3");
 let btn      = document.getElementById("button-div");
 let controlBtn = document.querySelector(".floatingDiv");
    
 elem.onclick = function selectedElement(){
  let src = elem.getAttribute('data-src');
     
  let html = '<img src="' + src + '">';
  let floatingGallery = document.querySelector(".floating-gallery");
  floatingGallery.innerHTML = html;
     
  gallery1.classList.add("hidden");
  gallery2.classList.add("hidden");
  gallery3.classList.toggle("hidden");
  btn.classList.add("hidden");
  controlBtn.classList.toggle("floatingDivActive");
  secThree();
   }
});
/*Gallery functions*/
function secOne(){
  count = 0; 
    
  document.getElementById("control").addEventListener('click', e =>{
   let arr = [];
  [...document.querySelectorAll('.sectionOne')].forEach(elem =>{ /*this is where i convert the strings into an array*/
    let data = elem.getAttribute('data-src');   
    let tempArr = data.split(", ");
    arr.push(tempArr);        
  });
    /*close action*/
  document.getElementById("close").addEventListener('click', e =>{
   let controlBtn = document.querySelector(".floatingDiv");
   let gallery1   = document.getElementById("ga");
   let btn      = document.getElementById("button-div");
    btn.classList.remove("hidden");
    gallery1.classList.remove("hidden");
    controlBtn.classList.remove("floatingDivActive")
   });
   let prev = document.getElementById("prev");
   let next = document.getElementById("next");   
   let img = document.querySelector("img");   
   let target = e.target;
      
   if(target == prev){
     if(count > 0){
          img.src = arr[count - 1];
          count--;
        }else{
          img.src = arr[arr.length - 1];
          count = arr.length - 1;
        }
      }else if(target == next){
        if(count < arr.length - 1){
          img.src = arr[count + 1];
          count++;
        }else{
          img.src = arr[0];
          count = 0;
        }
      }})};
      
function secTwo(){
  count = 0; 
  document.getElementById("control").addEventListener('click', e =>{
  let arr = [];
  [...document.querySelectorAll('.sectionTwo')].forEach(elem =>{ /*this is where i convert the strings into an array*/
   let data = elem.getAttribute('data-src');   
   let tempArr = data.split(", ");    
   arr.push(tempArr);        
  });
   /*close action*/
  document.getElementById("close").addEventListener('click', e =>{
    let controlBtn = document.querySelector(".floatingDiv");
    let gallery2   = document.getElementById("gallery2");
    let btn      = document.getElementById("button-div");
   
   gallery2.classList.remove("hidden");
   btn.classList.remove("hidden");
   controlBtn.classList.remove("floatingDivActive")
  });
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let img = document.querySelector("img");
    let target = e.target;
          
    if(target == prev){
     if(count > 0){
      img.src = arr[count - 1];
      count--;
    }else{
     img.src = arr[arr.length - 1];
     count = arr.length - 1;
    }
    }else if(target == next){
      if(count < arr.length - 1){
       img.src = arr[count + 1];
       count++;
     }else{
      img.src = arr[0];
      count = 0;
      }
    }})};

function secThree(){
 count = 0;       
 document.getElementById("control").addEventListener('click', e =>{
 let arr = [];
 [...document.querySelectorAll('.sectionThree')].forEach(elem =>{ /*this is where i convert the strings into an array*/
   let data = elem.getAttribute('data-src');   
   let tempArr = data.split(", ");
   arr.push(tempArr);                
  });
   
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let img = document.querySelector("img");
  /*close action*/
  document.getElementById("close").addEventListener('click', e =>{
   let controlBtn = document.querySelector(".floatingDiv");
   let gallery3   = document.getElementById("gallery3");
   let btn      = document.getElementById("button-div");
   
  gallery3.classList.remove("hidden");
  btn.classList.remove("hidden");
  controlBtn.classList.remove("floatingDivActive")
  
  });
   let target = e.target;           
   if(target == prev){
    if(count > 0){
     img.src = arr[count - 1];
     count--;
   }else{
    img.src = arr[arr.length - 1];
    count = arr.length - 1;
   }
   }else if(target == next){
    if(count < arr.length - 1){
      img.src = arr[count + 1];
      count++;
     }else{
      img.src = arr[0];
      count = 0;
    }}});
document.onkeydown = function(e) {
    e = e || window.event;
    if( e.keyCode == 27 ){
        window.location.hash = "#container";
    }
}};
