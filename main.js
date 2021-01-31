 eventListener()

function eventListener (){
window.addEventListener('keyup',sounds)
window.addEventListener('click',keyTouch) 
}
function sounds(e){
  
   const sound = document.querySelector(  `audio[data-key='${e.keyCode}']`) ;
   const keys = document.querySelector(  `.key[data-key='${e.keyCode}']`) ;
if(!sound){
   return ;
} 

  else{
   sound.currentTime = 0;
   sound.play(); 
  keys.classList.add('play') 

  setTimeout( ()=> keys.classList.remove('play'),100)   
  } 
 }

function keyTouch(e){
 const val =Number( e.target.value)
 const sound = document.querySelector(  `audio[value='${e.target.value}']`) ;
 const keys = document.querySelector(  `.key[value='${e.target.value}']`) ;
 
switch(val ){
   case 65:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
      
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 83:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 68:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 70:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 71:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 72:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 74:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 75:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
   case 76:
      sound.currentTime = 0;
      sound.play(); 
     keys.classList.add('play') 
     setTimeout( ()=> keys.classList.remove('play'),100) 
   break;
}



}

 