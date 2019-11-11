import faker from "faker";

Cypress.Commands.add("resetDatabase", () => {
    const data = getData();
    const str = JSON.stringify(data);
    cy.writeFile("test/db/db.json", str);
});

function getData() {
    return {
        currentUser: getCurrentUser()
    }
}

function getCurrentUser() {
    return {
        contact_list: getCurrentUserContactList(),
        project_list: getCurrentUserProjectList()
    }
}

function getCurrentUserContactList() {
    return [
        {
            id: 2,
            name: "Contact List 2",
            users: [4]
        },
        {
            id: 1,
            name: "Contact List 1",
            users: [1, 2, 3]
        }
    ]
}

function getCurrentUserProjectList() {
    return [
        {
            id: 2,
            name: faker.company.catchPhrase()
        },

        {
            id: 1,
            name: faker.company.catchPhrase()
        }
    ]
}