
const inquiryClick = (menuFlag) => {
    const HomeInquiry = document.getElementById("HomeInquiry-js");
    let MenuWarp = document.getElementById("MenuWarp-js");
    if(menuFlag){
        HomeInquiry.style.display="block";
        MenuWarp.style.right="-27rem";
    }else{
        HomeInquiry.style.display="none";
    }
}

export default inquiryClick;

