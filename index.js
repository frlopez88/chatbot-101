import prompt from "prompt-sync";
const input = prompt();
import dotenv from "dotenv";
dotenv.config();

const apiAccount = process.env.API_CLOUD_FARE_ACCOUNT;
const apiToken = process.env.API_CLOUD_FARE_TOKEN;
const apiModel = process.env.API_CLOUD_FARE_MODEL;

let info = "";

while (info != "exit"){

    info = input("Enter anything: ")
    console.log(info)

}

async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/d0fd23ef4f9eb62ba0059edeb492598b/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer JFGxGzu1rddMfuycIFc0969zeweIaSzfcFAENhAj" },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}