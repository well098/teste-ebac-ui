///< reference types="cypress"/>
const perfil = require ('../../fixtures/perfil.json')
describe ('Funcionalidade: Login',() =>{
 
     beforeEach(() => {
     cy.visit('minha-conta')
     });

     afterEach(() => {
        cy.screenshot()
     });

it('Deve fazer login com sucesso', () => { 
    cy.get('#username').type('welitinhogomes@hotmail.com')
    cy.get('#password').type('Ea113101@')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, welitinhogomes (não é welitinhogomes? Sair)')
  })

it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    cy.get('#username').type('wel2itinhogomes@hotmail.com')
    cy.get('#password').type('Ea113101@')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
    
  });

  it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => { 
    cy.get('#username').type('welitinhogomes@hotmail.com')
    cy.get('#password').type('Ea1131010@')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail welitinhogomes@hotmail.com está incorreta.')
  });

  it('Deve fazer login com sucesso -Usando massa de dados', () => {

    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, welitinhogomes (não é welitinhogomes? Sair)')
  });

  it.only('Deve fazer login com sucesso -Usando Fixture', () => {
    cy.fixture('perfil').then(dados =>{
      cy.get('#username').type(dados.usuario, {log: false})
      cy.get('#password').type(dados.senha, {log: false})
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, welitinhogomes (não é welitinhogomes? Sair)')
  });





    }) 


  
    
    
  });


