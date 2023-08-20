import PromptSync from "prompt-sync";
const prompt=PromptSync();
let number:any=prompt('Enter the Number ');
if (number%2===0){
    console.log("Number is Even")
}
else {
    console.log("Number is Odd")
}
