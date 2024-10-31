export class Yer {

    constructor(yerAdi, yerTipi, mernisKod, mersisKod, grupAdi, üstYerAdi) {
        this.yerAdi = yerAdi;
        this.yerTipi = yerTipi;
        this.mernisKod = mernisKod;
        this.mersisKod = mersisKod;
        this.grupAdi = grupAdi;
        this.üstYerAdi = üstYerAdi;

    }

    get yerAdi() {
        return this._yerAdi;
    }

    set yerAdi(value) {
        this._yerAdi = value;
    }

    get yerTipi() {
        return this._yerTipi;
    }

    set yerTipi(value) {
        this._yerTipi = value;
    }

    get mernisKod() {
        return this._mernisKod;
    }

    set mernisKod(value) {
        this._mernisKod = value;
    }

    get mersisKod() {
        return this._mersisKod;
    }

    set mersisKod(value) {
        this._mersisKod = value;
    }

    get grupAdi() {
        return this._grupAdi;
    }

    set grupAdi(value) {
        this._grupAdi = value;
    }

    get üstYerAdi() {
        return this._üstYerAdi;
    }

    set üstYerAdi(value) {
        this._üstYerAdi = value;
    }

}