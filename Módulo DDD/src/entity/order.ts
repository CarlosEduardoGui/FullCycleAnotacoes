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

    validate(): boolean {
        if (this._id === "") {
            throw new Error("Id is required");
        }

        if (this._costumerId === "") {
            throw new Error("Custumer Id is required");
        }

        if (this._items === undefined || this._items.length === 0) {
            throw new Error("Items are required");
        }

        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero");
        }

        return true;
    }

    total(): number {
        return this._items.reduce((total, item) => total + item.orderItemTotal(), 0);
    }
}