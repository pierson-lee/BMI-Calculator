const system = document.getElementById("system");
const heightLabel = document.getElementById("heightLabel");
const weightLabel = document.getElementById("weightLabel");
const form = document.getElementById("bmiForm");
const result = document.getElementById("pf");
const desc = document.getElementById("desc");
const calcButton = document.getElementById("calculate");
let bmi;

//Default Metric system
system.value = `metric`;
heightLabel.textContent = `Height (cm): `;
weightLabel.textContent = `Weight (kg): `;

function updateLabels() {
    if(system.value === `metric`) {
        heightLabel.textContent = `Height (cm): `;
        weightLabel.textContent = `Weight (kg): `;
        height.value = "";
        weight.value = "";
        result.textContent = "";
    } else {
        heightLabel.textContent = `Height (in): `;
        weightLabel.textContent = `Weight (lb): `;
        height.value = "";
        weight.value = "";
        result.textContent = "";
    }
}

function calculateBMI() {
    //bmi calcualtion
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        window.alert("Invalid input!");
        return;
    } else {
        if(document.getElementById("system").value == `metric`) {
            bmi = (weight / (height * height / 10000));
        } else {
            bmi = (weight / (height * height)) * 703;
        }
        result.textContent = `Your BMI is ${bmi.toFixed(1)}.`;
        desc.innerHTML = '<a href="https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" target="_blank">View BMI Categories</a>';
    }
}

system.addEventListener("change",updateLabels);
calcButton.addEventListener("click",calculateBMI);