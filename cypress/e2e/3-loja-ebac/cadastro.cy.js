/// <referemne tuypes="cypress"/>
import { faker } from '@faker-js/faker';

describe( 'Funcionalidade:cadastro', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    afterEach(() => {
     cy.screenshot()
});

    it('deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type('gabrielthiego@teste.com.br')
        cy.get('#reg_password').type('testesenhaforte')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
        cy.get('.woocommerce-error > li').should('exist')
       
   
        
        });


    it('deve completar o cadastro com sucesso', () => {
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type('testesenhaforte')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()           
            cy.get('#account_first_name').type(faker.person.firstName())   
            cy.get('#account_last_name').type(faker.person.lastName()) 
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('exist')
        });
    
        it('deve completar o cadastro com sucesso - usando variaveis', () => {

        
            var nome = faker.person.firstName()
            var sobrenome = faker.person.lastName()
            var email = faker.internet.email(nome,sobrenome)
            

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type('testesenhaforte')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()           
            cy.get('#account_first_name').type(nome)   
            cy.get('#account_last_name').type(sobrenome)
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('exist')
        });    
});