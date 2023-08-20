"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let cubeSide = prompt('Enter the value of CubeSide ');
let cubeVolume = cubeSide ** 3;
console.log(cubeVolume + " is the volume of the Cube");
