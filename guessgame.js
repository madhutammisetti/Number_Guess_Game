let max=parseInt(prompt('Enter your Maximum Number'));
while(!max){
    max=parseInt(prompt("Invaild format , Please Enter valid number format .."));
}
const targetNum=Math.floor(Math.random()*max)+1;
console.log(targetNum);

let guess=parseInt(prompt("Enter your First Guess"));
let attempts=1;

while(parseInt(guess)!== targetNum){
    if(guess==='q')break;
    attempts++
    if(guess > targetNum){
        guess=(prompt("Its too High , Enter your New Guess."));
    } else{
        guess=(prompt("Its too Low , Enter your New Guess."));
    }
}




if(guess==='q'){
    console.log('ok you Quit.GOOD BYE!!');
}
else{
    console.log(`Congrats You Win,You Got The Number !!! You took ${attempts} attempts..`)

}