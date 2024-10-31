export class MalCinsiTanim {
    create(malCinsTanim, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').type(malCinsTanim)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    update(searchText, newVal, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get('.dx-validator .dx-texteditor-input').should('be.visible').clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    delete(searchText, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(expectedMessage)
    }

}