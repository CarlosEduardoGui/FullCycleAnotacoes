export default class Address{
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";
 
    constructor(street: string, number: number, city: string, zip: string){
        this._street = street;
        this._number = number;
        this._city = city;
        this._zip = zip;

        this.validate();
    }

    validate(){
        if(this._street.length === 0){
            throw new Error("Address must have at least one street")
        }

        if(this._zip.length === 0){
            throw new Error("Address must have at least one zip")
        }

        if(this._city.length === 0){
            throw new Error("Address must have at least one city")
        }
    }
}