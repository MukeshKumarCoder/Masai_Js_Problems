let payment = document.getElementById("payment").value;
let  para = document.getElementById("para")

function paymentProsess(amount){
    return  new Promise((res, reject)=>{

        setTimeout(() => {
            if(amount > 0){
                res("Payment Successfull")
            }else{
                reject("Payment not Successfull")
            }
        }, randomTime(10, 3)* 600);
    })
    
}
function make_payment(){
    para.textContent = "Procesing"
    
    paymentProsess(payment).then((success) =>{
      para.textContent = success;

    })
    .catch((failed)=>{
        para.textContent = failed;
    })
}

function randomTime(max, min){
  return Math.floor(Math.random(max-min)+ min)
}
