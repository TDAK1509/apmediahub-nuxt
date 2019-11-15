describe("dashboard/my-contacts", () => {
  before(() => {
    cy.exec("yarn db:reset");
  });

  beforeEach(() => {
    cy.visit("/en/dashboard/my-contacts");
  });

  describe("Create and delete list", () => {
    describe("Create new contact list", () => {
      beforeEach(() => {
        cy.get("[data-test=createButton]").click();
      });

      it("Clicks 'create' open create modal", () => {
        cy.get("[data-test=createModal]").should("be.visible");
      });

      it("Clicks 'close' close modal", () => {
        cy.get("[data-test=closeButton]").click();
        cy.get("[data-test=createModal]").should("not.visible");
      });

      it("Clicks 'save' when input is blank does not close modal (means error)", () => {
        cy.get("[data-test=saveButton]").click();
        cy.get("[data-test=createModal]").should("be.visible");
      });

      it("Clicks 'save' shows new list and close modal", () => {
        cy.get("[data-test=listNameInput]").type("asdklfj;asdl;fjas");
        cy.get("[data-test=saveButton]").click();
        cy.get("[data-test=createModal]").should("not.visible");
        cy.contains("asdklfj;asdl;fjas").should("be.visible");
      });
    });

    describe("Delete list", () => {
      it("Clicks 'delete' show modal confirm", () => {
        cy.get("[data-test=deleteButton]")
          .first()
          .click();
        cy.get("[data-test=confirmModal]").should("be.visible");
      });

      it("Clicks 'no' close modal", () => {
        cy.get("[data-test=deleteButton]")
          .first()
          .click();
        cy.get("[data-test=noButton]").click();
        cy.get("[data-test=confirmModal]").should("not.visible");
      });

      it("Clicks 'yes' in modal delete contact list row", () => {
        cy.get("[data-test=deleteButton]")
          .first()
          .click();

        cy.get("[data-test=yesButton]").click();

        cy.contains("asdklfj;asdl;fjas").should("not.visible");
      });
    });
  });

  describe("Actions with list", () => {
    it("Click 'Open' goes to contact-details page", () => {
      cy.get("[data-test=openButton]")
        .first()
        .click();
      cy.url().should("match", /my-contacts\/.+/);
    });
  });
});
