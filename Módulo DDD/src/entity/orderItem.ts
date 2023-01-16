export default class OrderItem {
    private _id: string;
    private _productId: string;
    private _name: string;
    private _price: number;
    private _quantity: number;

    constructor(_id: string, _name: string, _price: number, _productId: string, _quantity: number) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._productId = _productId;
        this._quantity = _quantity;
    }

    get price(): number{
        return this._price;
    }

    get quantity(): number{
        return this._quantity;
    }

    orderItemTotal(): number{
        return this._price * this._quantity;
    }


}