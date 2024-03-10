// BMI Calculater...


import inquirer from "inquirer";

    const BMI = await inquirer.prompt([{

        type: "number",
        name: "weight",
        message: "Enter Your weight in kg: "
    },{
    
        type: "number",
        name: "height",
        message: "Enter Your Height in Meters: "
    }]);
    
    let bmi: number = 0;
    
    bmi = BMI.weight / (BMI.height * BMI.height);
    console.log(`Your BMI is: ${bmi} kg/m2`);    