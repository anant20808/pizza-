Menulistarray = ["chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];

 
function getmenu(){
     var htmldata;
     htmldata="<ol class='menulist'>"
     Menulistarray.sort();
     for(var i=0;Menulistarray.length;i++){
       htmldata=htmldata+'<li>'+Menulistarray[i] +'<li>'
     }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;

}
