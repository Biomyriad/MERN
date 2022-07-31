const express = require("express");
const app = express();
const port = 8000;

const { faker } =  require('@faker-js/faker');

const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number()
  }
}

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/company", (req, res) => {
  res.json([createUser(),createCompany()]);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );