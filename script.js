// Compute function

function compute()
{
    var principal = document.querySelector("#principal").value;
    var rate = document.querySelector("#rate").value;
    var years = document.querySelector("#years").value;

    var interest = (principal * years * rate) /100;

    var year = new Date().getFullYear()+parseInt(years);
    

    document.querySelector('#result').innerHTML = `If you deposit ${principal}, <br> at an interest rate at ${rate}%. <br> You will receive an amount of ${interest}, <br> in the year ${year}`
}
        
// Update rates on slider

function updateRate() 
{
    var rateval = document.querySelector("#rate").value;
    document.querySelector("#rate_val").innerText = rateval;
}

// Validate Amount

function validateAmount() {
    var principal = document.querySelector("#principal").value;
    var moreThenZero = parseInt(principal);
    if (principal === "" || moreThenZero < 0) {
        alert("Enter a positive number please");
        document.querySelector("#principal").focus();
    }

  }
