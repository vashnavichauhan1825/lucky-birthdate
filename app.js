const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const btnPrivacy = document.querySelector('#btn-privacy');
const outputBox = document.querySelector("#output-box");

function compareValues(sum ,luckyNumber)
{
  if(sum%luckyNumber===0){
    outputBox.innerText="YOU'RE LUCKY 🎊 ";
  }else{
    outputBox.innerText ="SORRY ! NOT LUCKY 😟 ";
  }
}
 

function checkBirthDateIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(sum&&dob)
 compareValues(sum,luckyNumber.value)
 else
 outputBox.innerText="please enter both fields";
 
}

btnPrivacy.addEventListener('click', () => {
    const footer = document.querySelector('#footer');
    content.style.filter = 'none';
    footer.style.display = 'block'
    btnPrivacy.parentElement.style.display = 'none';
});

function calculateSum(dob){
 dob = dob.replaceAll("-","");
 let sum =0;
 for(let index=0;index<dob.length;index++){
   sum = sum + Number(dob.charAt(index));
 }
 return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)