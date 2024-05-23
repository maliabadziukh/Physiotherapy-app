const express = require("express");

const app = express();

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/physios", (request, response, next) => {
  const physios = [
    {
      id: 1,
      name: "John Smith",
      specialisation: "orthopedics",
    },
    {
      id: 2,
      name: "Jane Doe",
      specialisation: "poop",
    },
    {
      id: 3,
      name: "Michael Johnson",
      specialisation: "orthopedics",
    },
    {
      id: 4,
      name: "Emily Davis",
      specialisation: "orthopedics",
    },
    {
      id: 5,
      name: "William Brown",
      specialisation: "orthopedics",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      specialisation: "orthopedics",
    },
    {
      id: 7,
      name: "Olivia Wilson",
      specialisation: "orthopedics",
    },
  ];
  response.status(200).json({
    message: "Physios fetched successfully!",
    physios: physios,
  });
});

module.exports = app;
