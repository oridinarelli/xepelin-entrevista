describe('Login launcher', ()=>{

    it('Intentar ingresar email invalido', () => {
        cy.visit(`${Cypress.env('APP_URL')}/login`)
        cy.get('[placeholder="Email"]').type('email')
        cy.get('[placeholder="Tu contraseña"]').type('1234')
        cy.get('[data-testid="login-email-helper-text"]').should('be.visible')
    })

    it('Intentar ingresar mas de 30 caracteres', () => {
        cy.visit(`${Cypress.env('APP_URL')}/login`)
        cy.get('[placeholder="Email"]').type('emailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemail@gmail.com')
        cy.get('[placeholder="Tu contraseña"]').type('1234123123123123123123123123123123123123123123123123123123123123123123123123123123')
        cy.get('[data-testid="login-login-button"]').click()
        cy.get('.sc-iQbOkh > .sc-eBwKMn').contains('Error al validar los datos.')
    })
})