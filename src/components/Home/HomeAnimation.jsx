

const menuClick = (menuFlag) => {
    let MenuWarp = document.getElementById("MenuWarp-js");
    
    if(menuFlag){
        MenuWarp.style.right="0";
    }else{
        MenuWarp.style.right="-27rem";
    }
}

export default menuClick;

