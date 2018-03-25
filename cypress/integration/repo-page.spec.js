const { HOST, PORT, PROTOCOL } = require('./../../config/env/dev.env');

describe('Repo Page', () => {
  const lookByName = value => {
    cy
      .get('.search-box')
      .clear()
      .type(value)
      .trigger('change')
      .should('have.value', value);

    cy.get('.spinner-test').should('have.length', 1);

    cy.get('.repo-item').should('have.length', 10);
  };
  it('should visit the repo page', () => {
    const menuItem = 'Repos';
    cy.visit(`${PROTOCOL}${HOST}:${PORT}/#/`);

    cy.title().should('include', 'Github Demo');

    cy.contains(menuItem).click();

    cy.url().should('include', '/');

    lookByName('gabrielseco');

    lookByName('SaraVieira');
  });
});
