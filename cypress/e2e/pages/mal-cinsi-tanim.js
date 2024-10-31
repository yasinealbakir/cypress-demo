let txtTanim = '.dx-validator .dx-texteditor-input'
export class MalCinsiTanim {
    create(malCinsTanim, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get(txtTanim).should('be.visible').type(malCinsTanim)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    update(searchText, newVal, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get(txtTanim).should('be.visible').clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    delete(searchText, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(expectedMessage)
    }

}