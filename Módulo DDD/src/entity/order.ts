import OrderItem from "./orderItem";

export default class Order {
    _id: string;
    _costumerId: string;
    _items: OrderItem[];

    constructor(_id: string, _costumerId: string, _items: OrderItem[]) {
        this._id = _id;
        this._costumerId = _costumerId
        this._items = _items;
    }
}