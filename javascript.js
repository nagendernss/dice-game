// let name1=prompt("Enter player 1 name");
// let name2=prompt("Enter player 2 name");

// document.querySelectorAll("p")[0].innerText=name1;
// document.querySelectorAll("p")[1].innerText=name2;

var randomnumber1=Math.random();
randomnumber1*=6;
randomnumber1++;
randomnumber1=Math.floor(randomnumber1);
if(randomnumber1==1){
    document.querySelector(".img1").setAttribute("src","dice1.png");
}
if(randomnumber1==2){
    document.querySelector(".img1").setAttribute("src", "dice2.png");
}
if(randomnumber1==3){
    document.querySelector(".img1").setAttribute("src", "dice3.png");
}
if(randomnumber1==4){
    document.querySelector(".img1").setAttribute("src", "dice4.png");
}
if(randomnumber1==5){
    document.querySelector(".img1").setAttribute("src", "dice5.png");
}
if(randomnumber1==6){
    document.querySelector(".img1").setAttribute("src", "dice6.png");
}
var randomnumber2=Math.random();
randomnumber2*=6;
randomnumber2++;
randomnumber2=Math.floor(randomnumber2);
if(randomnumber2==1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
}
if(randomnumber2==2){
    document.querySelector(".img2").setAttribute("src", "dice2.png");
}
if(randomnumber2==3){
    document.querySelector(".img2").setAttribute("src", "dice3.png");
}
if(randomnumber2==4){
    document.querySelector(".img2").setAttribute("src", "dice4.png");
}
if(randomnumber2==5){
    document.querySelector(".img2").setAttribute("src", "dice5.png");
}
if(randomnumber2==6){
    document.querySelector(".img2").setAttribute("src", "dice6.png");
}

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerText="🚩 "+name1+ " Wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerText=name2+" Wins! 🚩";
}
else{
    document.querySelector("h1").innerText="🏁 Draw 🏁";
}
