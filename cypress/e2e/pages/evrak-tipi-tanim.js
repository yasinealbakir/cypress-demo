let txtAd = '[data-testid="A54529"] > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
let txtKod = '.dx-texteditor-masked'
let drpBelge = "//dx-select-box[.='Belge']"
let listBelge = "//div[@class='dx-scrollable dx-scrollview dx-visibility-change-handler dx-scrollable-vertical dx-scrollable-simulated dx-list dx-widget dx-collection']//div[@class='dx-scrollable-container']/div/div/div"
let drpAtananPersonelTipi = "//dx-select-box[.='Atanabilen Personel Tipi']"
let listAtananPersonelTipi = "//div[@class='dx-overlay-content dx-popup-normal dx-resizable']//div[@class='dx-scrollview-content']/div"
export class EvrakTipiTanim {

    create(ad, kod, belge, personel, expectedMessage) {
        cy.clickToAddBtnInToolbar()
        cy.get(txtAd).clear().type(ad)
        cy.get(txtKod).clear().type(kod)
        cy.xpath(drpBelge).click()
        cy.clickIfTextInListMatches(listBelge, belge)
        cy.xpath(drpAtananPersonelTipi).click()
        cy.clickIfTextInListMatches(listAtananPersonelTipi, personel)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    update(searchText, newVal, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToUpdateBtnInDatagrid()
        cy.get(txtAd).clear().type(newVal)
        cy.clickToSaveBtnInPopup()
        cy.verifyToastMessage(expectedMessage)
    }

    delete(searchText, expectedMessage) {
        cy.searchInDatagrid(searchText)
        cy.clickToDeleteBtnInDatagrid()
        cy.verifyToastMessage(expectedMessage)
    }

    export(fileName, fileExtension) {
        cy.export(fileName, fileExtension)
    }

}