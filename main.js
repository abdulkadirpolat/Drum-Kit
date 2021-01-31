 eventListener()

function eventListener (){
window.addEventListener('keyup',sounds)
 
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

 