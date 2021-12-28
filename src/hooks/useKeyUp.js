import React, {useEffect} from 'react';


const useKeyUp =(code, callback)=>{
     //adding keyboard listener
  useEffect(()=>{
    const listener = (ev)=>{
     if (ev.code === code){
    //    setNumCookies(numCookies => numCookies + 1 )
        callback();
     }
    }
     window.addEventListener("keyup", listener);
     //keyup vs keydown, keyup runs when the user left the key
 
     return ()=>{
       window.removeEventListener("keyup", listener);
     //every time we add the listener we need to remove it
     }
   })
   //empty [] let the useEffect run once only when the game page loads
}

export default useKeyUp
