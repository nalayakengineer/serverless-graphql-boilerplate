const schema = `
type Message {
    message: String!
}
type Query {
    message : Message!
}

`;

export { schema }