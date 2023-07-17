var second=document.querySelector('.container .top #second');
var minute=document.querySelector('.container .top #minute');
var hour=document.querySelector('.container .top #hour');

var startbtn=document.querySelector('.container .bottom #start');
var stoptbtn=document.querySelector('.container .bottom #stop');
var resetbtn=document.querySelector('.container .bottom #reset');

var timer;
var timer_on=0;

startbtn.addEventListener('click' , f1);
stoptbtn.addEventListener('click' , f2);
resetbtn.addEventListener('click' , f3);

function f1(event){
    if(timer_on==0){
        timer_on=1;
        timer=setInterval(count , 1000);
    }
    
}


function count(){
    if(Number(second.querySelector('.right').innerHTML)<9){
        second.querySelector('.right').innerHTML=Number(second.querySelector('.right').innerHTML)+1;   
    }
    else{
        second.querySelector('.right').innerHTML=0;
        if(Number(second.querySelector('.left').innerHTML) < 5)
        {
            second.querySelector('.left').innerHTML=Number(second.querySelector('.left').innerHTML)+1;
        }
        else{
            second.querySelector('.left').innerHTML=0;
            if(Number(minute.querySelector('.right').innerHTML)<9){
                minute.querySelector('.right').innerHTML=Number(minute.querySelector('.right').innerHTML)+1;
            }
            else{
                minute.querySelector('.right').innerHTML=0;
                if(Number(minute.querySelector('.left').innerHTML) < 5){
                    minute.querySelector('.left').innerHTML=Number(minute.querySelector('.left').innerHTML)+1;
                }
                else{
                    minute.querySelector('.left').innerHTML=0;
                    if(Number(hour.querySelector('.right').innerHTML) < 9){
                        hour.querySelector('.right').innerHTML=Number(hour.querySelector('.right').innerHTML)+1;
                    }
                    else{
                        hour.querySelector('.right').innerHTML=0;
                        hour.querySelector('.left').innerHTML=Number(hour.querySelector('.left').innerHTML)+1;
                    }  
                }
            } 
        } 
    }
}

function f2(){
    if(timer_on==1){
        timer_on=0;
        clearInterval(timer);
    }
}

function f3(){
    timer_on=0;
    clearInterval(timer);
    location.reload(true);
    
}
