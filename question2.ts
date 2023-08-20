import PromptSync from "prompt-sync";
const prompt=PromptSync();
let cubeSide:any=prompt('Enter the value of CubeSide ')
let cubeVolume=cubeSide **3;
console.log(cubeVolume + " is the volume of the Cube");

