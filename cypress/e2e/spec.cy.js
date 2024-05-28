describe('main page', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: 
        [
          {
          "stance": "regular",
          "name": "treflip",
          "obstacle": "flat ground",
          "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
          "id": 1
          },
          {
          "stance": "switch",
          "name": "heelflip",
          "obstacle": "stairs",
          "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
          "id": 2
          },
          {
          "stance": "regular",
          "name": "frontside 50-50, backside 180 out",
          "obstacle": "ledge",
          "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
          "id": 3
          }
          ]
    })
  })
    it('should display certain elements on the page', () => {
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('.form').contains('Choose Your Stance') 
    cy.get('.form').contains('Choose Your Obstacle') 
    cy.get('input[name="name"]').should('have.attr', 'placeholder', 'Name of Trick')
    cy.get('input[name="tutorial"]').should('have.attr', 'placeholder', 'Link to Tutorial')
  })
  it('should display all tricks', () => {
    cy.get('.tricks-display').find('.trick-card').should('have.length', 3)
    cy.get('.trick-card').first().contains('treflip')
    cy.get('.trick-card').last().contains('frontside 50-50, backside 180 out')
  })
  it('should add a trick and display all tricks on the DOM', () => {
    cy.get('select[name="stance"]').select('regular')
    cy.get('input[name="name"]').type('Dinner Roll')
    cy.get('select[name="obstacle"]').select('Rail')
    cy.get('input[name="tutorial"]').type('https;//example.com/jpg')
    cy.get('button').click()
    cy.get('.tricks-display').find('.trick-card').should('have.length', 4)
    cy.get('.trick-card').first().contains('treflip')
    // cy.get('.trick-card').last().contains('Dinner Roll')
  })
  
})