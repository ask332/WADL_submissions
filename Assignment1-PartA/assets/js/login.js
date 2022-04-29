let email=document.getElementById('login');
let password = document.getElementById('password');
let textContent1;
let textContent2;

email.addEventListener('change', (e)=>{
  textContent1= e.target.value;
  console.log(textContent1);
});

password.addEventListener('change',(e)=>{
  textContent2=e.target.value;
  console.log(textContent2);
})

document.getElementById('submit').addEventListener("click",()=>{
console.log(textContent1+" "+"Logged In");
alert("User Logged In!!")}
)