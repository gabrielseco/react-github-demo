const { HOST, PORT, PROTOCOL } = require('./../../config/env/dev.env');

describe('Repo Page', () => {
  it('should visit the orgs page', () => {
    const menuItem = 'Orgs';
    cy.visit(`${PROTOCOL}${HOST}:${PORT}/#/`);

    cy.title().should('include', 'Github Demo');

    cy.contains(menuItem).click();

    cy.url().should('include', '/orgs');

    const value = 'gabrielseco';

    cy
      .get('.search-box')
      .clear()
      .type(value)
      .trigger('change')
      .should('have.value', value);

    cy.get('.spinner-test').should('have.length', 1);
    cy.get('.profile').should('have.length', 1);
  });
});
