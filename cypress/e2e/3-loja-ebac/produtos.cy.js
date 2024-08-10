/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
       // cy.visit('produtos')
       produtosPage.visitarUrl()


    });

    it('selecionar um produto da lista', () => {
        //cy.get(' .product-block ')
          //.first()
          //last()
          //.eq(2)
         // .contains('Apollo Running Short')
         // .click()
         produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
          cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Helena Hooded Fleece'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
      
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Arcadio Gym Short')
        cy.get('.product_title').should('contain', 'Arcadio Gym Short')
    });
   
    it.only('Deve adicionar o produto ao carrinho', () => {
         let qtd = 7 
        produtosPage.visitarProduto('Stellar Solar Jacket')
        produtosPage.addCarrinho('S', 'Red' , qtd)
        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Stellar Solar Jacket” foram adicionados no seu carrinho.')
    });

    
    it.only('Deve adicionar o produto ao carrinho por massa de dados', () => {
       cy.fixture('produtos').then(dados => {

        produtosPage.visitarProduto(dados[2].nomeProduto)
        produtosPage.addCarrinho(
            dados[2].tamanho, 
            dados[2].cor, 
            dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
        });
    })   
});
    