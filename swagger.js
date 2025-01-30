import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "chak API",
    description: "chak API 문서",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
