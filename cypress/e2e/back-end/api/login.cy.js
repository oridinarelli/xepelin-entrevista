describe('API Login', () => {
    it('Ivalid request', ()=>{
        // Parametros
        const email = 'test@test.com';
        const password = '1234';

        cy.request({
            url: Cypress.env('API_URL'),
            method: 'POST',
            body: { email, password },
            failOnStatusCode: false,
            }).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(403)
            })
    })
})