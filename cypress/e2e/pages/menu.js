let parentMenuSelector = '#kt_aside_menu > ul > li';
let subMenuSelector = ' > div > ul > li';
let subMenuItem = '.kt-menu__item--open.kt-menu__item.kt-menu__item--submenu';

export class Menu {
    // Rekürsif olarak menü öğelerini kontrol eden fonksiyon
    clickMenuItem = (menuHierarchy, expectedUrl) => {
        let currentSelector = parentMenuSelector;

        menuHierarchy.forEach((menuText, index) => {
            cy.step('Alt menü öğeleri için currentSelectoru güncelle')
            if (index > 0) {
                currentSelector += subMenuItem + subMenuSelector;
            }

            cy.get(currentSelector,).then(($el) => {
                cy.step('Menüyü gezecek')
                cy.wrap($el).each(($item) => {  //'each'- eldeki bir dizi içerisinde dönmek ve istenileni yaptırmak için kullanılır.
                    if ($item.text().includes(menuText)) {
                        cy.step('Uygun menü itemı bulursan tıkla')
                        cy.wrap($item).click(); //'wrap'- içine yerleştirilmiş nesnelerin değerini vermek için kullanılır.
                        return false;
                    }
                });
            });
        });
        cy.step('Doğru ekranının açıldığını kontrol edecek.')
        cy.url().should('contains', expectedUrl)
        cy.get('#kt_aside_toggler').click()
    };

    menuIsimleriniYazdir() {
        const results = [];
        cy.get(parentMenuSelector).each(($el, index) => {
            cy.log('Results: ' + index + " - " + $el.text())
            results.push($el.text())

        }).then(() => {
            cy.writeFile('cypress/e2e/list.txt', results)
        })
    }

    searchInMenu(searchText, clickItem) {
        cy.get("[placeholder='Menüde Ara']").clear().type(searchText)
        cy.clickIfTextInListMatches("//div[@class='mat-autocomplete-panel mat-autocomplete-visible']/mat-option", clickItem)

    }



}
