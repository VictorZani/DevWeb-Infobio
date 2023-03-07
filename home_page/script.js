function calculateBMI() {
    // Get the weight and height values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate the BMI
    var bmi = weight / (height * height);

    // Show the result on the page
    document.getElementById("bmi-result").textContent = bmi.toFixed(2);

    // Check the BMI value to determine the category
    if (bmi < 18.5) {
        document.getElementById("bmi-category").textContent = "Underweight";
    } else if (bmi < 25) {
        document.getElementById("bmi-category").textContent = "Normal weight";
    } else if (bmi < 30) {
        document.getElementById("bmi-category").textContent = "Overweight";
    } else if (bmi < 35) {
        document.getElementById("bmi-category").textContent = "Obesity grade 1";
    } else if (bmi < 40) {
        document.getElementById("bmi-category").textContent = "Obesity grade 2";
    } else {
        document.getElementById("bmi-category").textContent = "Obesity grade 3";
    }
}

// Add click event to the button
document.getElementById("calculate-bmi").addEventListener("click", calculateBMI)