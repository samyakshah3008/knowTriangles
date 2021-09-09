const inputs = document.querySelectorAll('.side-input');
const calculatebutton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

function processing(a,b){
    var sumOfSquares = a*a  + b*b
   
    return sumOfSquares
}

function calculateHypotenuse(){
    
   var sumOfSquares= processing(Number(inputs[0].value),Number(inputs[1].value))
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    if(inputs[0].value < 0){
        output.innerText = "length cannot be negative"
      } else if(inputs[1].value < 0){
        output.innerText = "length cannot be negative"
      } else if(inputs[0].value === ""){
        output.innerText = "Fill the length box so we can check"
     } else if(inputs[1].value === ""){
       output.innerText = "Fill the length box so we can check"
    }
       else{
        output.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse
      }
    
    
    

}

calculatebutton.addEventListener('click',calculateHypotenuse)


