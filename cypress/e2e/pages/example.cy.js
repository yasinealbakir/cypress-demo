import { Menu } from "./menu";
import { MalCinsiTanim } from "./mal-cinsi-tanim"
import { slowCypressDown } from "cypress-slow-down";
const menu = new Menu()
const malCinsiTanim = new MalCinsiTanim()

slowCypressDown(100)
describe('Ticari Belgelendirme Testleri', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.step('Oturum açılıyor...')
        cy.fixture('loginData').as('credentials'); //'as' ile alias belirtilir.
        cy.get('@credentials').then((data) => {    //'then' bir önceki komuttan elde edilen datayı kullanmak içindir.
            cy.login(data.username, data.password);
        });
    })

    it('Mal Cinsi Tanım Ekranını Ziyaret Et', () => {
        cy.visit(Cypress.env('preprod'));
        const menuHierarchy = ['Ticari Belgelendirme', 'Tır', 'Tanımlar', 'Mal Cinsi Tanım'];
        menu.clickMenuItem(menuHierarchy, 'mal-cinsi-tanim-list');
    });

    it('Mal Cinsi Tanımlama', () => {
        malCinsiTanim.create('mal cinsi')
    });

    it('Mal Cinsi Güncelleme', () => {
        malCinsiTanim.update('mal cinsi', 'mal cinsi güncel')
    });

    it('Mal Cinsi Tanım Silme', () => {
        malCinsiTanim.delete()
    });

});