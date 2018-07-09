document.getElementById("button-div").addEventListener("click", function (e){
  let target = e.target;
  let gal1 = document.getElementById("ga");
  let gal2 = document.getElementById("gallery2");
  let gal3 = document.getElementById("gallery3");
  

  if(target.id == '1'){
      if( gal1.className == "z"){
        gal3.classList.add("hidden");
        gal1.className = "z animated fadeIn";
        
      }else{
        gal1.className = "z animated fadeIn";
        
        gal2.classList.add("hidden");
        gal3.classList.add("hidden");
      } 
  }else if(target.id == '2'){
    if(gal2.className == "z"){
      gal1.classList.remove("z nimated fadeIn");
      gal1.classList.add("gallery");
      
      
    }else{
      gal2.className = "z animated fadeIn";
      gal3.classList.add("hidden ");
    }  
  }else if(target.id =='3'){
    if(gal3.className == "z"){
      gal1.classList.remove("z");
      gal2.classList.remove("z");
      
    }else{
      gal3.className = "z animated fadeIn";
    }
  }
});
