///< reference types="cypress"/>

describe('Funcionalidades produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('  .product-block ') 
        ///.first()
        ///.last()
        ///.eq(5)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click() 
        
        cy.get('#tab-title-description > a').should('contain','Descrição')



    });
});