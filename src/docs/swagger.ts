import { version } from "mongoose";
import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Documentation Event API",
    description: "Documentation Event API",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-event-orcin.vercel.app/api",
      description: "Deploy Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "rianyuliawan",
        password: "rian1234",
      },
      RegisterRequest: {
        fullName: "king rian",
        username: "kingrian",
        email: "king@yopmail.com",
        password: "rian1234",
        confirmPassword: "rian1234",
      },
      ActivationRequest: {
        code: "abcdef",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
