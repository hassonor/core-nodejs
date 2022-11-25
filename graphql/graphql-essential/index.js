import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = {
  product: () => {
    return {
      id: 28759443,
      name: "widget",
      description: "Beautiful widget to use in your garden",
      price: 34.99,
      soldout: false,
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3003, () => console.log("Server is running... 3003:/graphql"));
