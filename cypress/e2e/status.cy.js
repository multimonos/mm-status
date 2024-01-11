import 'cypress-each'
import { ServiceEndpoints } from "../fixtures/endpoints"


const timeout = 5000
const target = Cypress.env( "target" )

const endpoints = ServiceEndpoints[target] || []

describe( 'Status mm-*', () => {

    describe( `Service Endpoints`, () => {

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