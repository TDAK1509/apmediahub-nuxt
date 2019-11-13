describe("my-jobs", () => {
  beforeEach(() => {
    cy.visit("/en/dashboard/my-jobs");
  });

  it("Go to job details page on click job row", () => {
    cy.get("[data-test=jobRow]")
      .first()
      .click();
    cy.url().should("match", /my-jobs\/.+/);
  });
});
