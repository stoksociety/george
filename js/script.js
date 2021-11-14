alert("welcome to the akan's");
function ghana(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value );
    var year=parseInt(document.getElementById("year").value);

if(day<0||day>31){
    document.getElementByid("dayerror").innerHtml =alert("please enter the correct date");
    alert (false);
}else if (date==""){
    document.getElementByid("dayerror").innerHtml =alert("please fill in the field below correctly");
    alert (false);
}else{
   console.log ( document.setdate(date));
}
if(month<1 ||month>12){
    document.getElementByid("montherror").innerHtml=alert("please enter the correct month");
    alert (false);
}else if (month==""){
    document.getElementByid("montherror").innerHtml=alert("please fill the field below correctly");
    alert (false);
}else{
   console.log( document.setmonth(month));
}
if(year<0){
    document.getElementByid("yearerror").innerHtml=alert("please enter the correct year");
    alert (false);
}else if (year==""){
    document.getElementByid("yearerror").innerHtml=alert("please fill the field below correctly");
    alert (false);
}else{
   console.log (document.setyear(year));

}
function calculatingDay(){
    year=document.getElementById('day').ariaValueMax;
    cc=parseInt(year.substring(0,2));
}
function calculatingmonth(){
    year=document.getElementById('month').ariaValueMax;
    cc=parseInt(year.substring(0,2));
}
function calculatingyear(){
    year=document.getElementById('year').ariaValueMax;
    cc=parseInt(year.substring(0,2));
   (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) (mod) (7)

   return (math.floor(ghana()));
} 


var day=document.getghana();
var days=["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"]
var male=["kwasi","kwadwo","kwabena","kwaku","Yaw","kofi","kwame"];
var female=["akosua","Adwoa","abeena","Akua","Yaa","Afua","Ana"];
//male functions
function getghana(){
    var ismale=document.getElementByid("male").checked;
    var isfemale=document.getElementById("female").checked;
    if(ismale ==true && isfemale==false){
        if(day==0){
            alert("your name is"+ male[0]);
    }
    else if(day==1){
        alert("your name is"+ male[1]);
    }

    else if(day==2) {
        alert("your name is"+ male[2]);
    }
     else if(day==3){
        alert("your name is"+ male[3]);
     }
      else if(day==4){
        alert("your name is"+ male[4]);
      }
    else if(day==5){
        alert("your name is"+ male[5]);
      }
    else if(day==6){
        alert("your name is"+ male[6]);
    }
//female functions
}else if(ismale==false && isfemale==true)
 if(day==0){
        alert("your name is"+ female[0]);
}
else if(day==1){
    alert("your name is"+ female[1]);
}

else if(day==2) {
    alert("your name is"+ female[2]);
}
 else if(day==3){
    alert("your name is"+ female[3]);
 }
  else if(day==4){
    alert("your name is"+ female[4]);
  }
else if(day==5){
    alert("your name is"+ female[5]);
  }
else if(day==6){
    alert("your name is"+ female[6]);
}
}
 getghana();
}
ghana();
