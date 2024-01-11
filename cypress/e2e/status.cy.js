import 'cypress-each'
import {Endpoints} from "../fixtures/endpoints"


const timeout = 5000
const target = Cypress.env("target")

const endpoints = Endpoints[target] || []

describe( 'Status mm-*', () => {

    describe( `Service endpoints`, () => {

        it.each( endpoints )(
            endpoint => `${ endpoint.name } -- ${ endpoint.url }`,
            endpoint => {
                cy.request( {
                    method: "get",
                    url: endpoint.url,
                    followRedirect: true,
                    timeout,
                } ).its( 'status' ).should( 'equal', 200 )
            } )

    } )

} )