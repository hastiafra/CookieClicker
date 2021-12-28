import React,{useEffect} from 'react';



const useDocumentTitle = (title, fallbackTitle) => {
     //showing on top bar
  useEffect(()=>{
    // console.log(numCookies);
    document.title = title;
    return()=>{
        document.title = fallbackTitle
    }

   },[title])
   //we just wanna run the useEffect only when the numCookies are changing 

}

export default useDocumentTitle
// numCookies +" Cookies"