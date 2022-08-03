let total=0;
document.querySelector('#Zero').addEventListener('click',makeZero);
document.querySelector('#Add3').addEventListener('click',AddThree);
document.querySelector('#Add9').addEventListener('click',Addnine);
document.querySelector('#Minus2').addEventListener('click',Minusnine);
document.querySelector('#Add15').addEventListener('click',Add15);
document.querySelector('#minus30').addEventListener('click',Minus30);
function Minus30(){
    total=total-30;
    document.querySelector('#PutTheValueInResult').innerText=total;
}
function makeZero(){
    total=0;
    document.querySelector('#PutTheValueInResult').innerText=total;
}
function AddThree(){
    total=total+3;
    document.querySelector('#PutTheValueInResult').innerText=total;
}
function Addnine(){
    total=total+9;
    document.querySelector('#PutTheValueInResult').innerText=total;
}
function Minusnine(){
    total=total-2;
    document.querySelector('#PutTheValueInResult').innerText=total;
}
function Add15(){
    total=total+15;
    document.querySelector('#PutTheValueInResult').innerText=total;
}