let parentMenuSelector = '#kt_aside_menu > ul > li';
let subMenuSelector = ' > div > ul > li';
let subMenuItem = '.kt-menu__item--open.kt-menu__item.kt-menu__item--submenu';
let listMenuItems = "//div[@class='mat-autocomplete-panel mat-autocomplete-visible']/mat-option"
let txtMenudeAra = "[placeholder='Menüde Ara']"
export class Menu {
    clickMenuItem = (menuHierarchy, expectedUrl) => {
        let currentSelector = parentMenuSelector;
        menuHierarchy.forEach((menuText, index) => {
            cy.step('Alt menü öğeleri için currentSelectoru güncelle')
            if (index > 0) {
                currentSelector += subMenuItem + subMenuSelector;
            }
            cy.get(currentSelector,).then(($el) => {
                cy.wrap($el).each(($item) => {  //'each'- eldeki bir dizi içerisinde dönmek ve istenileni yaptırmak için kullanılır.
                    if ($item.text().includes(menuText)) {
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

    searchInMenu(searchText, clickItem) {
        cy.get(txtMenudeAra).clear().type(searchText)
        cy.clickIfTextInListMatches(listMenuItems, clickItem)
    }
}
