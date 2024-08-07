///  <reference types="cypress"  />

describe('Funcionalidade:Detalhes de conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario,login.senha)

        })
       
    });
it('deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Gabriel', 'Thiego', 'gabriel.thiego')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});    

});