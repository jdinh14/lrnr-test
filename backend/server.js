const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Static files middleware (make sure the 'public' folder exists in your project directory)
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// Quiz route - Reads and serves quiz.html
app.get("/quiz", (req, res) => {
  fs.readFile("./src/quiz.html", (error, data) => {
    if (error) {
      res.status(500).send("Error reading quiz file");
      return;
    }
    res.write(data);
    res.end();
  });
});

// Grade route - Processes grading requests
app.post("/grade", async (req, res) => {
  const question = req.query.question;
  const answer = req.query.answer;
  const API_KEY = process.env.API_KEY; 

  const prompt = `
        YOU ARE A PROFESSIONAL QUIZ QUESTION EVALUATOR
        You will put your entire being into evaluating quizzes to the best of your ability
        you will follow the following instructions to the letter
        Do not add or remove anything outside of the instructions

        you will compare the question: ${question}
        to the answer: ${answer}

        DO NOT BE EXTREMELY HARSH BE A BIT LENIENT BE FAIR AND BALANCED
        ANSWERS DO NOT HAVE TO BE PERFECT AND DO NOT NEED ADDITIONAL CONTEXT; GUESS THE CONTEXT IF NECESSARY
        DO NOT GIVE EXTREMELY LONG OR EXTREMELY SHORT EVALUATIONS
        KEEP EVALUATIONS TO THE POINT CONTAIN WITHIN 2-3 SENTENCES AND DO NOT ADD ANY EXTRA INFORMATION
        IF THE ANSWER IS WRONG PROVIDE THE CORRECT ANSWER WITHIN THE EXPLANATION

        FORMAT YOUR RESPONSE AS FOLLOWS: "yes/no (percent) because (explanation)" THIS IS EXTREMELY IMPORTANT DO NOT ADD EXTRA INFORMATION
    `;

  // Since `fetch` is not natively available in Node.js, you need to install and require it
  // npm install node-fetch
  const fetch = require("node-fetch");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    }),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    console.log(data);
    res.send(data.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing the grading request");
  }
});

// Listen on port 6747
app.listen(6747, () => {
  console.log("Server listening on port 6747");
});

module.exports = app;
