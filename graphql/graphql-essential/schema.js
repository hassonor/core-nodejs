import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
  }
  
  type Query {
    product: Product
  }
`);

export default schema;
