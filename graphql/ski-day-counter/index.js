const {ApolloServer,gql } = require("apollo-server");


const typeDefs = gql`
    type ProgrammerDay {
        id: ID!
        date: String!
        mountain: String!
        condition: Conditions
    }
    
    enum Conditions {
        POWDER
        HEAVY
        ICE
        THIN
    }
    
    type Query {
        totalDays: Int!
        allDays: [ProgrammerDay!]!
    }
  `;

const resolvers = {

};



const server = new ApolloServer({
  typeDefs,
  mocks: true
})

server.listen().then(({url}) => console.log(`Server running at ${url}`))