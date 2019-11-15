describe("my-projects", () => {
  beforeEach(() => {
    cy.visit("/en/dashboard/my-projects");
  });

  it("Go to project details page on click project row", () => {
    cy.get("[data-test=projectRow]")
      .first()
      .click();
    cy.url().should("match", /my-projects\/.+/);
  });
});
