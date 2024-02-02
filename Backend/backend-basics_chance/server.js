import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const name = chance.name();
const age = chance.age();
const profession = chance.profession();

export const server = createServer((request, response) => {
  if (request.url === "/test-random-person") {
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    response.statusCode = "404";
    response.end("Sorry! Not Found");
  }
});
