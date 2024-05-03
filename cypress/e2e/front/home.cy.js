describe('home spec', () => {

  beforeEach(()=>{
    cy.visit('https://xepelin.com/')
    cy.wait(500)
  })

  it('Verificar boton de registrarse de pagina', () => {
    cy.wait(500)
    cy.get('#registration-started').contains('Regístrate')
    cy.wait(500)
  })
  
  it('Intentar contactar sin completar todos los campos obligatorios', () => {
    cy.wait(500)
    cy.get('button:contains("Contáctanos")').click()
    cy.wait(500)
    cy.get('button:contains("Enviar a un Asesor")').click()
    cy.wait(500)
    cy.get('[class="flex items-center gap-2 bg-danger-background p-2.5"]').contains('Selecciona al menos una opción')
  })
  it('Completar formulario',() => {
    cy.wait(600)
    cy.get('button:contains("Contáctanos")').click()
    cy.wait(500)
    cy.get('[name="firstname"]').type('Oriana') //Nombre
    cy.get('[name="lastname"]').type('Dinarelli') //Apellido
    cy.get('[type="tel"]').type('+56123456789') //Numero de telefono 
    cy.get('[name="email"]').type('ori.dinarelli@gmail.com') //Correo corporativo
    cy.get('[name="company"]').type('Testing Automatizado') //Nombre de empresa
    cy.get('[name="rut_de_la_empresa"]').type('123456789') //Rut empresa
    cy.get('[type="checkbox"]').eq(0).check() //Chequea Financiamiento de facturas
    cy.wait(500)
  })
})