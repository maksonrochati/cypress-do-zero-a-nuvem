
describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
        
    it('Verifica o título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    });
    
    it('Preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('test@test.com')
        cy.get('#open-text-area').type('jesus jesus jesus jesus jesus jesus jesus jesus jesus jesus', {delay: 100})
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    });

    it.only('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Makson')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('-test.com')
        cy.get('#open-text-area').type('jesus jesus jesus jesus jesus jesus jesus jesus jesus jesus', {delay: 0})
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    });
});