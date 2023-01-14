import Address from "./address";

export default class Customer {
    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    setAddress(address: Address) {
        this._address = address;
    }

    activate(){
        this._active = true;
    }

}