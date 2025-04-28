describe('Teste de Login Inválido', () => {
    it('Deve exibir mensagem de erro com credenciais incorretas', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      cy.get('#username').type('student');
      cy.get('#password').type('senhaErrada123');
      cy.get('#submit').click();
  
      cy.get('#error').should('be.visible')
        .and('contain', 'Your username or password is invalid!');
    });
  });
  