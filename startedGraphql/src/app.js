const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const app = express()



app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/', (req, res) => {
    res.status(200).send("YES")
})


app.listen(4000, (e) => {
    console.log(">> listening on port 4000")
})