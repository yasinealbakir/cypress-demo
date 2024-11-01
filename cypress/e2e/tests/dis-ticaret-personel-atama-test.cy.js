import { slowCypressDown } from "cypress-slow-down";
import { Menu } from "../pages/menu";
import { DisTicaretPersonelAtama } from "../pages/dis-ticaret-personel-atama";
const menu = new Menu()
const disTicaret = new DisTicaretPersonelAtama()

slowCypressDown(100)
describe('Dış Ticaret Personel Birim Atama Listesi Ekranı', { testIsolation: false }, () => {

    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials');
        cy.get('@credentials').then((data) => {
            cy.login(data.username, data.password);
        });

    })

    it('Menü Ağacından Ekranı Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Ticari Belgelendirme', 'Dış Ticaret', 'Tanımlar', 'Dış Ticaret Personel Birim Atama'];
        menu.clickMenuItem(menuHierarchy, 'dis-ticaret/dis-ticaret-personel-birim-atama-list');
    });

    it('Personel Atama Testi', () => {
        disTicaret.create('YASİN', 'Dış Ticaret Merkez', 'Başarı ile kaydedildi.')
    });

});