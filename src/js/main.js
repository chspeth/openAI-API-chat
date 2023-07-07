import { OpenAI } from "./openAI.js";
import dotenv from 'dotenv';
dotenv.config();

// const messageTemplate = document.querySelector('#msgtempl').content.querySelector('.message');
// const userQuestion = document.getElementById('message').value;

const openAI = new OpenAI(process.env.OPENAI_KEY);
const topic = 'Tell a random fact about today';
const model = 'text-davinci-003';

await openAI.generateText(topic, model, 30)
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.error(error);
    });
