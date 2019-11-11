describe("my-projects", () => {
  beforeEach(() => {
    cy.visit("/en/dashboard/my-projects");
  });

  it("Renders project rows equal to the length of projects data", () => {
    cy.get("[data-test=projectRow]").its("length").should("eq", 2);
  });

  it("Go to project details page on click project row", () => {
    cy.get("[data-test=projectRow]").first().click();
    // Url should go to my-project/:id of the first element 
    // in test database currentUser.project_list
    cy.url().should('include', '/my-projects/2')
  })
});