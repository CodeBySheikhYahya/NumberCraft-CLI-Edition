#! /usr/bin/env node
// shabang
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 14 + 1);
// console.log(RandomNumber);
//user input for guessing number
const Response = await inquirer.prompt([{
        name: "PlayerPredictDigit",
        type: "number",
        message: "Take a guess at the number between 1 - 14."
    }]);
if (Response.PlayerPredictDigit === RandomNumber) {
    console.log("Congratulations!you have successfully guessed the number");
}
else {
    console.log("sorry,you have not guessed the number");
}
// computer will generate a random number
// user input for guessing number
// comparre computer generated number and user input
// computer will generate a random number
// ye jo random k agay () iska mtlb hotha hay call karna or ye ho function hay random ka wo hamay just 0 say lay k aik beech may number generate kartha hay jesay k 0.36693039354501167 , 0.7063386803925849 acha ab ye values jo hain wo tho points may hain may is say tho faida nahi tho hmnay aik or cheez use kiii jisko hmanay  math.floor boldia iska kaam hay values ko round off karna hay but again aik or issue hay jo hay k ye values ko round off kar k zero hii dikaiga q k math.random hamesha 1 say nichay waali values generaye kartha hay  tho ab ye remove karnay k lia * steric ka sign use karengay or jahan say jahan tak ka number guess karana hay wo wo * iskay agay deden tho jo steric k baad wala number hoga uskay hisaab say numbers guess karega
// jesay mujy dice banani hay tho usmay tho zero nahi hotha tho zero ko khatam karnay k lia +1 karna parhega jesay mujy banani ho 6+1 const RandomNumber = Math.floor(Math.random()*6+1); plus 1 ka mtlb hay kisi bhi number may plus 1 kar k chalao tho zero nahi aiga
// agar yahan hamaray pass spelling mistake hothii tho wo just wohii code run kartha jo else may hotha q k if ki condition may hamnay spelling mistake kii hay
//In this code snippet, `await` is used in conjunction with `inquirer.prompt()` function. This code seems to be written in JavaScript, using the `inquirer` package, which is commonly used for creating command-line interfaces.
// 1. `inquirer.prompt()` is a function used to ask the user for input in a terminal.
// 2. `await` is used before `inquirer.prompt()`. This indicates that the code will wait for the `inquirer.prompt()` function to finish executing before moving on to the next line of code. This is because `inquirer.prompt()` returns a promise, and using `await` allows you to wait for that promise to resolve before continuing.
// 3. Once the user provides input, it will be stored in the `Response` variable.
// 4. After obtaining the user's input, the code checks if the input (`Response.PlayerPredictDigit`) is equal to the predefined constant `RandomNumber`.
// 5. If the input matches the predefined number (`RandomNumber`), it prints "Congratulations! you have successfully guessed the number". Otherwise, it prints "Sorry, you have not guessed the number".
// So, in summary, `await` here is used to pause the execution of the code until the user provides input through the `inquirer.prompt()` function. This makes the code wait for the user's response before proceeding further.
