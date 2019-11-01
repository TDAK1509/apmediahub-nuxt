Cypress.Commands.add("resetDatabase", () => {
    const data = {
        currentUser: {
            contact_list: [
                {
                    id: 2,
                    name: "List 2",
                    users: [4]
                },
                {
                    id: 1,
                    name: "List 1",
                    users: [1, 2, 3]
                }
            ]
        }
    };
    const str = JSON.stringify(data);
    cy.writeFile("test/db/db.json", str);
});
