
const message = () => {
    return { "message": "hello world!" }
}

export const resolvers = {
    Query: {
        message
    }
}