const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "../../ENV/.env" });
var cors = require('cors')

app.use(cors())

app.post("/", (req, res) => {

  console.log('Request: ', req)


  // const projectId = process.env.PROJECT_ID;
  // const location = "us-central1";
  // const modelId = process.env.MODEL_ID;
  // const filePath =
  //   "http://localhost:3000/2016-holden-commodore-22222041_14674220.jpg";

  // const { PredictionServiceClient } = require("@google-cloud/automl").v1;
  // const fs = require("fs");

  // const client = new PredictionServiceClient({
  //   keyFilename: "./carrecognizer-359522-41396db63726.json",
  // });

  // const content = fs.readFileSync(filePath);

  // async function predict() {

  //   const request = {
  //     name: client.modelPath(projectId, location, modelId),
  //     payload: {
  //       image: {
  //         imageBytes: content,
  //       },
  //     },
  //     params: {
  //       score_threshold: "0.8",
  //     },
  //   };

  //   const [response] = await client.predict(request);

  //   for (const annotationPayload of response.payload) {
  //     console.log(`Predicted class name: ${annotationPayload.displayName}`);
  //   }
  // }

  // predict();
});

app.listen(3001, () => {
  console.log('server running at 3001')
});