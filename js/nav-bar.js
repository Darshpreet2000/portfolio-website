var clicked=false;

function handleClick(){
     clicked=!clicked;
     if(clicked){
        document.getElementById("nav-bar-list").className = "open-nav-items";
     }
     else{
        document.getElementById("nav-bar-list").className = "nav-items";

     }
}