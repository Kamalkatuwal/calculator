const numbers = document.querySelectorAll('[number]');
let operators = document.querySelectorAll('[operator]');
let main =document.querySelectorAll('[operators]');
let equals = document.querySelector('[equalsto]');
let prevdis=document.querySelector('[prev]');
let currentdis=document.querySelector('[current]');

numbers.forEach(button=> {
    button.addEventListener('click', (e) => {
        const inti=e.target.innerText;
        if( inti ==='.' && currentdis.innerText.includes('.')){
            return
        }
        if (inti === '.' && currentdis.innerHTML === '') {
            currentdis.innerText += '0';
        }
        currentdis.innerText+=e.target.innerText;
        console.log('clicked');
    });
});
 operators.forEach((operator)=>{
    operator.addEventListener('click',(e)=>{
        if(e.target.innerText==='AC'){
            currentdis.innerHTML="";
            prevdis.innerHTML=''
        }
        else if(e.target.innerHTML==='DEL' && currentdis.innerHTML===''){
            currentdis.innerHTML=prevdis.innerHTML;
            prevdis.innerHTML=''
        }
        else if(e.target.innerHTML==='DEL'){
        currentdis.innerHTML=currentdis.innerHTML.slice(0,-1);
        console.log('clicked');
        }
    })
        
 });
 main.forEach(operation => {
    operation.addEventListener('click', (e) => {
        const operators = ['+', '-', '*', '%'];
        const clickedOperator = e.target.innerHTML;
        const lastCharacter = prevdis.innerHTML.trim().slice(-1);

        if (prevdis.innerHTML === '' && currentdis.innerHTML === '') {
            return;
        }

        if (operators.includes(lastCharacter) && operators.includes(clickedOperator)) {
            return;
        }

        prevdis.innerHTML += currentdis.innerHTML + clickedOperator;
        currentdis.innerHTML = '';
    });
});


 equals.addEventListener('click', () => {
    let sum;
    let sub;
    let divid;
    let multiply;
    if(prevdis.innerHTML.trim().slice(-1)==='+'){
    sum=parseInt(prevdis.innerHTML.trim().slice(0,-1)) + parseInt(currentdis.innerHTML.trim());
    currentdis.innerHTML=sum;
    prevdis.innerHTML=''
    }
    if(prevdis.innerHTML.trim().slice(-1)==='-'){
        sub=parseInt(prevdis.innerHTML.trim().slice(0,-1)) - parseInt(currentdis.innerHTML.trim());
        currentdis.innerHTML=sub;
        prevdis.innerHTML=''
        }
        if(prevdis.innerHTML.trim().slice(-1)==='*'){
            multiply=parseInt(prevdis.innerHTML.trim().slice(0,-1)) * parseInt(currentdis.innerHTML.trim());
            currentdis.innerHTML=multiply;
            prevdis.innerHTML=''
            }
            if(prevdis.innerHTML.trim().slice(-1)==='%'){
                divid=parseInt(prevdis.innerHTML.trim().slice(0,-1)) / parseInt(currentdis.innerHTML.trim());
                currentdis.innerHTML=divid;
                prevdis.innerHTML=''
                }
});
