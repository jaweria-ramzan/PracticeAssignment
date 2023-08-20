import PromptSync from "prompt-sync";
const prompt=PromptSync();
let number:any=prompt('Enter the Number ');
if (number<0){
    console.log("Number is Negative")
}
else if (number>0){
    console.log("Number is Positive")
}
else {
    console.log("Number is ZERO")
}
