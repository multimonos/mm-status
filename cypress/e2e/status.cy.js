import 'cypress-each'


const endpoints = [
    { name: "player", url: "http://localhost:5173" },
    { name: "api", url: "http://localhost:8880" },
    { name: "api.vite", url: "http://localhost:8881" },
    { name: "api/sequences", url: "http://localhost:8880/sequences" },
    { name: "api/audio", url: "http://localhost:8880/audio" },
    { name: "api/sketches", url: "http://localhost:8880/sketches" },
    { name: "sketch", url: "http://localhost:7770" },
    { name: "sketch/sketches", url: "http://localhost:7770/sketches" },
]

describe( 'Status mm-*', () => {

    it.each( endpoints )(
        endpoint => `${ endpoint.name }\n ${ endpoint.url }`,
        endpoint => {
            cy.request( endpoint.url ).its( 'status' ).should( 'equal', 200 )
        } )

} )