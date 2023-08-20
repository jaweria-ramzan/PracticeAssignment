import PromptSync from "prompt-sync";
const prompt=PromptSync();
let age:any=prompt('Enter the Age ');
if (age >=18){
    console.log("He's eligible to do vote based on their age")
}
else{
    console.log("He's not eligible to do vote")
}

