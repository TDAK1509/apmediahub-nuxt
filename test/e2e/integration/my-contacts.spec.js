describe("my-contacts.vue", () => {
    beforeEach(() => {
        cy.visit("/en/dashboard/my-contacts");
    });

    it("Has content title", () => {
        cy.get("[data-test=pageTitle]").should("be.visible");
    });

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
            cy.get("[data-test=listNameInput]").type("ahihi");
            cy.get("[data-test=saveButton]").click();
            cy.get("[data-test=createModal]").should("not.visible");
            cy.contains("ahihi");
        });
    });
});
