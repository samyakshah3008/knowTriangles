const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')


function processing(a,b,c){
     if((a+b)>c && (b+c)>a && (a+c)>b){
        const semiperimeter = (a+b+c) /2
        const calculations = semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
        return calculations
    }
    else{
        return -1
    }
}

function calculateArea(){
   const res = processing(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
  console.log("clicked")
   if(res === -1){
   output.innerText = "Make sure that sides should be like this: (a+b)>c && (b+c)>a && (a+c)>b) and also values cannot be negative "
 
   } 
   
   else{
   output.innerText = "Area according to heron's formula is: " + Math.sqrt(res)
   }
   
}

calculateButton.addEventListener('click',calculateArea)

