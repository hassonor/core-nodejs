### How to Run
___
1. `npm install`
2. `npm run start`
3. Navigate to `https://localhost:3003/graphql`


#### Create Product
```graphql
mutation {
    createProduct(input: {
        name:"Or Hasson Product",
        description: "cool description",
        price:34.99,
        soldout:ONSALE,
        inventory:21,
        stores:[{store: "Tel Aviv"},{store:"Haifa"}]
    }) {
        price
        name
        id
        inventory
        soldout
    }
}
```