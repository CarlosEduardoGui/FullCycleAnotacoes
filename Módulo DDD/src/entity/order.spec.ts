import Order from "./order";
import OrderItem from "./orderItem";

describe("Order Unit Test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Id is required");
    });

    it("should throw error when customer id is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("Custumer Id is required");
    });

    it("should throw error when items is undefined", () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Items are required");
    });

    it("should calculate total", () => {
        const item = new OrderItem("1", "Item 1", 10);
        const item2 = new OrderItem("2", "Item 2", 10);
        const order = new Order("1", "1", [item]);
        
        let total = order.total();
        
        expect(total).toBe(10);
        
        const order2 = new Order("2", "2", [item, item2]);
        total = order2.total();

        expect(total).toBe(20);
    });
});