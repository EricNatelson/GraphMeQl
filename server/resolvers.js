
const rootValue = {
    hello: () => 'Hello, world',
    name: () => 'Eric Natelson',
    introduction: () => 'Hello! This is an interactive resume built with GraphQL. Start a query with something like query(education) ',
    education: () => 'Florida State University'
}

module.exports = { rootValue };