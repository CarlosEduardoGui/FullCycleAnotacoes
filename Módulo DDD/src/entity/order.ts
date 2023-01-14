import OrderItem from "./orderItem";

export default class Order {
    private _id: string;
    private _costumerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(_id: string, _costumerId: string, _items: OrderItem[]) {
        this._id = _id;
        this._costumerId = _costumerId
        this._items = _items;
        this._total = this.total();

        this.validate();
    }

    validate(){
        if(this._id === ""){
            throw new Error("Id is required");
        }

        if(this._costumerId === ""){
            throw new Error("Custumer Id is required");
        }

        if(this._items === undefined || this._items.length === 0){
            throw new Error("Items are required");
        }
    }

    total(): number {
        return this._items.reduce((total, item) => total + item._price, 0);
    }
}