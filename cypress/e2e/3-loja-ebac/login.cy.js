/// <referemne tuypes="cypress"/>
describe('Funcionalidade: login', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
       cy.screenshot()
    });
    
    it('deve fazer login com sucesso', () => {
        
        cy.get('#username').type('gabrielteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gabrielteste (não é gabrielteste? Sair)')

    })

it('deve exibir uma mesngem de erro ao inserir ususario invalido', () => {
    cy.get('#username').type('gabrielinvalidoteste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
    
});

it('deve apaprecer mensagem de erro para senha invalida', () => {
    cy.get('#username').type('gabrielteste@teste.com.br')
    cy.get('#password').type('testeerro@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail gabrielteste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error > li').should('exist')
});



})