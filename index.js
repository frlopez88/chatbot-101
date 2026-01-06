import prompt from "prompt-sync";
const input = prompt();
import dotenv from "dotenv";
dotenv.config();

const apiAccount = process.env.API_CLOUD_FARE_ACCOUNT;
const apiToken = process.env.API_CLOUD_FARE_TOKEN;
const apiModel = process.env.API_CLOUD_FARE_MODEL;

let info = "";

let messages = [
    {
        role:"system",
        content:`You are going to be a AI Agent that will be solving question abou
        1) The Batman Movie, the one from 2021.
        2) The Superman vs Batman movie from zack snyder
        3) The 3 Batman movies from Christopher Nolan `
    }
];

while (info != "exit"){

    info = input("Ask me anything about The Batman Movies since 2005 up: ")
    
    const msg = {
        role: "user",
        content : info
    };

    messages.push(msg);

    const result = await run(apiModel, messages);

    console.log(result.result.response);

}

async function run(model, msg) {
    
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${apiAccount}/ai/run/${model}`,
    {
      headers: { Authorization: `Bearer ${apiToken}` },
      method: "POST",
      body: JSON.stringify({messages: msg}),
    }
  );
  const result = await response.json();
  return result;
}