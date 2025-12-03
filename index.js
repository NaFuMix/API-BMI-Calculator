const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;

    if (!height || !weight) {
        return res.status(400).send("Please provide height and weight query parameters.");
    } else if (isNaN(height) || isNaN(weight)) {
        return res.status(400).send("Height and weight must be numbers.");
    } else if (height <= 0 || weight <= 0) {
        return res.status(400).send("Height and weight must be positive numbers.");
    } else if (height / 100 > 3) {
        return res.status(400).send("Height seems to be unrealistic.");
    } else if (height >= 100) {
        bmi = weight / (height / 100) ** 2;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }
        return res.send(`Your BMI is ${bmi.toFixed(2)} <br> Category: ${category}`);
    } else if (height <= 3) {
        bmi = weight / (height) ** 2;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }
        return res.send(`Your BMI is ${bmi.toFixed(2)} <br> Category: ${category}`);
    } else {
        return res.status(400).send("Invalid height value.");
    }
})

app.listen(3000, () => {
    console.log("Server start successfully")
})