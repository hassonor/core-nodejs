const {ApolloServer,gql, MockList} = require("apollo-server");

/**
 *  IMPORTANT
 *  -----------------
 *  The AllDays variable was inspired by:
 *  https://www.youtube.com/watch?v=mwq-T2CrJRU
 *
 * */

const typeDefs = gql`
    scalar Date
    
    """
    An object that describes the characteristics of programmer day
    
    """
    type ProgrammerDay {
        "A Programmer day's unique identifier"
        id: ID!
        "The date that a programmer day occurred"
        date: Date!
        "The location that a programmer day occurred"
        mountain: String!
        "The shape that the snow was in then this programmer day happened"
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
    
    input AddDayInput{
        date: Date!
        mountain: String!
        conditions: Conditions
    }
    
    type RemoveDayPayload{
        day: ProgrammerDay!
        removed: Boolean
        totalBefore: Int
        totalAfter: Int
    }
    
    type Mutation {
        addDay(input: AddDayInput!): ProgrammerDay
        removeDay(id: ID!): RemoveDayPayload!
    }
    
    type Subscription {
        newDay: ProgrammerDay!
    }
  `;

const resolvers = {

};

const mocks = {
    Date: () => "1/2/2025",
    String: () => "Cool data",
    Query: () => ({
        allDays: () => new MockList([1,7])
    })
}


const server = new ApolloServer({
  typeDefs,
  mocks
})

server.listen().then(({url}) => console.log(`Server running at ${url}`))

/*
example of AddDay graphql mutation:
mutation {
    addDay(input: {
        date: "1/1/2022",
        mountain: "Tel Aviv"
        conditions: ICE
    }) {
        date
    }
}

example of removeDate graphql mutation:
mutation {
    removeDay(id: "123"){
        day {
            mountain
            date
        }
    }
}

example of get all days data
query {
    allDays {
        date
        mountain
        conditions
    }

}
 */