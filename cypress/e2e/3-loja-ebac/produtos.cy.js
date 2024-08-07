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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Helena Hooded Fleece'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
      
    it('Deve visitar a página do produto', () => {
        
    });
   
    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});
    