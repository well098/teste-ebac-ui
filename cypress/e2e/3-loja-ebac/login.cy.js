///< reference types="cypress"/>

describe ('Funcionalidade: Login',() =>{

it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('welitinhogomes@hotmail.com')
    cy.get('#password').type('Ea113101@')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, welitinhogomes (não é welitinhogomes? Sair)')
})

})