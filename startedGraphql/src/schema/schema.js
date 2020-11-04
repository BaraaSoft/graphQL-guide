const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },

    }
})


const users = [
    { id: "111", firstName: "John", age: 30 },
    { id: "123", firstName: "Mike", age: 23 },
    { id: "404", firstName: "Rose", age: 27 }
]


const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                return users.find((x) => x.id == args.id)
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQueryType
})


module.exports = schema