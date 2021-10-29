import React from 'react';



const menuClick = (age) => {
    const MenuWarp = document.getElementById("MenuWarp-js");
    
    if(age == 0){
        MenuWarp.style.right="0";
    }else{
        MenuWarp.style.right="-27rem";
    }

}


export default menuClick;

