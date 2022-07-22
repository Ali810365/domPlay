/*
let actors = document.querySelectorAll(".hamlet")

console.log(actors);

for (let i = 0; i < actors.length; i++) {
    actors[i].style.backgroundColor = "yellow";
   }
   
   */
   
  
  let spans = document.querySelectorAll("#play span");
  
  console.log(spans);
  
  for (const mySpan of spans) {
    mySpan.addEventListener("click", function(){
        highlightActor(mySpan.dataset.actor);
    });
    
  }
  
  function highlightActor(actor){
    for (const mySpan of spans){
      if(actor == mySpan.dataset.actor){
        
        if(mySpan.style.backgroundColor != 'yellow'){
          mySpan.style.backgroundColor = 'yellow';
        }else{
          mySpan.style.backgroundColor = 'white';
        }
        

      }else{
        mySpan.style.backgroundColor = 'white';
        
      }
    }
  }

/*
function highlight(el) {
    if (el.style.backgroundColor == "yellow") {
      el.style.backgroundColor = "white";
    } else {
      el.style.backgroundColor = "yellow";
    }
  }

  */