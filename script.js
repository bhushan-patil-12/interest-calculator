let sCalculate = document.getElementById("sCalculate");
let cCalculate = document.getElementById("cCalculate");

function simpleInterest() {
    let sPrincipal = document.getElementById("sPrincipal").value;
    let sROI = document.getElementById("sROI").value;
    let sNYears = document.getElementById("sNYears").value;
    let resultSimple = sPrincipal * (1 + ((sROI / 100) * sNYears));
    document.getElementById("sResult").innerHTML = resultSimple.toFixed(2);
}

function compoundInterest() {
    let cPrincipal = document.getElementById("cPrincipal").value;
    let cROI = document.getElementById("cROI").value;
    let cNYears = document.getElementById("cNYears").value;
    let compound = document.getElementById("compound").value;

    let resultCompound = cPrincipal * (Math.pow(1 + ((cROI / 100) / compound), (compound * cNYears)));
    document.getElementById("cResult").innerHTML = resultCompound.toFixed(2);
}

sCalculate.addEventListener("click", simpleInterest);
cCalculate.addEventListener("click", compoundInterest);