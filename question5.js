"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let age = prompt('Enter the Age ');
if (age >= 18) {
    console.log("He's eligible to do vote based on their age");
}
else {
    console.log("He's not eligible to do vote");
}
