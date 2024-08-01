/// <referemne tuypes="cypress"/>

describe('Funcionalidade: login', () =>{
    
    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('gabrielteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gabrielteste (não é gabrielteste? Sair)')
        

    })
})