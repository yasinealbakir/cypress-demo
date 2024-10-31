import { Yer } from "../entity/Yer"
const yer = new Yer()
let txtYerAdiSelector = '[data-testid="A17678"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let drpYerTipiSelector = '[data-testid="A17683"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let listYerTipi = "//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollview-content']/div"
let txtMernisKodu = '[data-testid="A17687"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let txtMersisKodu = ':nth-child(4) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let drpGrupAdi = '[data-testid="A17691"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let listGrupAdi = "//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div"
let drpUstYerAdi = '[data-testid="A17693"] > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let listUstYerAdi = "//ul[@class='dx-treeview-node-container']/li"

export class YerIslemleri {

    create(yer, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get(txtYerAdiSelector).clear().type(yer.yerAdi)
        cy.get(drpYerTipiSelector).click()
        cy.clickIfTextInListMatches(listYerTipi, yer.yerTipi)
        cy.get(txtMernisKodu).clear().type(yer.mernisKod)
        cy.get(txtMersisKodu).clear().type(yer.mersisKod)
        cy.get(drpGrupAdi).click()
        cy.clickIfTextInListMatches(listGrupAdi, yer.grupAdi)
        cy.get(drpUstYerAdi).click()
        cy.clickIfTextInListMatches(listUstYerAdi, yer.üstYerAdi)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    update(searchText, newVal, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickExpandBtnInDatagrid()
        cy.clickToUpdateBtnInDatagrid()
        cy.get(txtYerAdiSelector).clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    delete(searchText, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickExpandBtnInDatagrid()
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(expectedMessage)
    }

}