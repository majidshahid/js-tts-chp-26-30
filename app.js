// var userinput= +prompt("Enter  number ","3.456");
// var  mathRound = Math.round(userinput);
// var mathCeil = Math.ceil(userinput);
// var mathFloor =Math.floor(userinput);

//  document.write("Number : "+ userinput +"<br>" + "Round value : " + mathRound +"<br>" + "floor value : " + mathFloor +"<br>" +  "Ceil value : " + mathCeil +"<br>"+"<br>"+"<br>" )


//  var userinput1= +prompt("Enter negative value ","-2.456");
// var  mathRound1 = Math.round(userinput1);
// var mathCeil1 = Math.ceil(userinput1);
// var mathFloor1 =Math.floor(userinput1);

//  document.write("Number : "+ userinput1 +"<br>" + "Round value : " + mathRound1 +"<br>" + "floor value : " + mathFloor1 +"<br>" +  "Ceil value : " + mathCeil1 +"<br>"+"<br>"+"<br>" )

// var negative = +prompt("enter negative value","-4");
// var  abs = Math.abs(negative);
// document.write("number : " + negative +"<br>"+ "absolute value : " + abs + "<br>" +"<br>");

// var rendom = Math.random()* 6;
// var rendomnumber= Math.ceil(rendom);
// document.write("rendom dice value : "+rendomnumber +"<br> "+"<br>");



// var toss = Math.random()*2;
// var tossno= Math.ceil(toss);
// if (tossno == 1){
//    document.write("head ")
// }else{
//     document.write("tails ")
// }


// var oneTohundrad =  Math.random()* 100;
// var between = Math.ceil(oneTohundrad);
// document.write(" number between 1 and 100 : " + between)


var secrate = Math.ceil(Math.random()*10);
var userno = +prompt("Enter a number 1-10" ,"2");
if (userno == secrate){
    alert("congratulate")
}else{
    alert("try next time")
}
