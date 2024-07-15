 
 const inner = document.getElementById("inner-container");
         
 const num = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'.','/'];
 for (let index = 0; index < num.length; index++) {
     const element = num[index];

     const btn = document.createElement("button");
     btn.id = "btn"; 
     btn.innerHTML = element;
     btn.onclick = function()
     {
         document.getElementById("input").value += element;
     };

     inner.appendChild(btn);

 } 
const btnEqual = document.createElement('button');
btnEqual.id = "btn";
btnEqual.innerHTML = '=';
btnEqual.onclick = function()
{
  let x = document.getElementById("input").value;
  let y =  eval(x);
  document.getElementById("input").value = y;
}
inner.appendChild(btnEqual);


function clr()
{
document.getElementById("input").value = "";
}

 



