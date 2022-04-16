// During the test the env variable is set to test
process.env.NODE_ENV = "test";

global.config = require(process.env.NODE_ENV === "test"
  ? "../config-test.json"
  : null);
const mongoose = require("mongoose");

// Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
// eslint-disable-next-line import/extensions
const Contact = require("../models/crm-model.js");
const server = require("../server");

const should = chai.should();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhc3Nvbm9yQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaGFzc29ub3IiLCJfaWQiOiI2MjU5OGY1NzVhNDM4M2U0YzgzMzFiYTkiLCJpYXQiOjE2NTAwMzY2MDN9.21BaLqnFsMGPpXuAZMe1PGxw8IX0KLSNl7HLHJV_bE4";

chai.use(chaiHttp);
// Our parent block
describe("Contacts", field => {
  beforeEach((done) => { // Before each test we empty the database
    Contact.deleteMany({}, (err) => {
      done();
    });
  });
  /*
    * Test the /GET route
    */
  describe("/GET contacts", () => {
    it("it should GET all the contacts", (done) => {
      chai.request(server)
        .get("/api/contacts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  /*
 * Test the /POST route
 */
  describe("/POST book", () => {
    it("it should not POST a book without firstName", (done) => {
      const contact = {
        lastName: "Hasson",
        phone: 421312312,
        email: "hassonor@gmail.com"
      };
      chai.request(server)
        .post("/api/contacts")
        .set({ "Authorization": `Bearer ${token}` })
        .send(contact)
        .end((err, res) => {
          res.should.have.status(400);
          res.text.should.equals("ContactModel validation failed: firstName: Enter a first name");
          done();
        });
    });

    it("it should POST a contact ", (done) => {
      const contact = {
        firstName: "Or",
        lastName: "Hasson",
        phone: 972542326232,
        email: "hassonor@gmail.com"
      };
      chai.request(server)
        .post("/api/contacts")
        .set({ "Authorization": `Bearer ${token}` })
        .send(contact)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("firstName");
          res.body.should.have.property("lastName");
          res.body.should.have.property("email");
          res.body.should.have.property("phone");
          res.body.should.have.property("_id");
          res.body.should.have.property("created_date");
          done();
        });
    });

  });
  /*
 * Test the /GET/:id route
 */
  describe("/GET/:id contact", () => {
    it("it should GET a book by the given id", (done) => {
      const contact = new Contact({
        firstName: "Or",
        lastName: "Hasson",
        phone: 972542326232,
        email: "hassonor@gmail.com"
      });
      // eslint-disable-next-line no-shadow
      contact.save((err, contact) => {
        chai.request(server)
          .get(`/api/contacts/${contact._id}`)
          .set({ "Authorization": `Bearer ${token}` })
          .send(contact)
          // eslint-disable-next-line no-shadow
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("firstName");
            res.body.should.have.property("lastName");
            res.body.should.have.property("email");
            res.body.should.have.property("phone");
            res.body.should.have.property("created_date");
            res.body.should.have.property("_id").eql(contact._id.toString());
            done();
          });
      });

    });
  });
  /*
 * Test the /PUT/:id route
 */
  describe("/PUT/:id contact", () => {
    it("it should UPDATE a contact given the id", (done) => {
      const contact = new Contact({
        "firstName": "Or",
        "lastName": "Hasson",
        "company": "Somewhere",
        "phone": 1232134
      });
      contact.save((err, book) => {
        chai.request(server)
          .put(`/api/contacts/${contact._id}`)
          .set({ "Authorization": `Bearer ${token}` })
          .send({
            "firstName": "Or",
            "lastName": "Hasson2",
            "company": "Somewhere",
            "phone": 1232134
          })
          // eslint-disable-next-line no-shadow
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("firstName");
            res.body.should.have.property("lastName").eql("Hasson2");
            res.body.should.have.property("phone");
            res.body.should.have.property("_id").eql(contact._id.toString());
            done();
          });
      });
    });
  });
  /*
 * Test the /DELETE/:id route
 */
  describe("/DELETE/:id contact", () => {
    it("it should DELETE a contact given the id", (done) => {
      const contact = new Contact({
        "firstName": "Or",
        "lastName": "Hasson",
        "company": "Somewhere",
        "phone": 1232134
      });
      // eslint-disable-next-line no-shadow
      contact.save((err, contact) => {
        chai.request(server)
          .delete(`/api/contacts/${contact._id}`)
          .set({ "Authorization": `Bearer ${token}` })
          // eslint-disable-next-line no-shadow
          .end((err, res) => {
            res.should.have.status(204);
            done();
          });
      });
    });
  });
});

