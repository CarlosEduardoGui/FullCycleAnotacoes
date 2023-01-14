import Product from "./product";

describe("Product Unit Test", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Product 1", 1230);
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 1230);
        }).toThrowError("Name is required");
    });

    it("should throw error when price is negative", () => {
        expect(() => {
            const product = new Product("123", "Product 1", -1);
        }).toThrowError("Price is invalid");
    });

    it("should change name", () => {
        const product = new Product("1", "Product 1", 1000);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");
    });

    it("should change price", () => {
        const product = new Product("1", "Product 1", 1000);
        product.changePrice(50);
        expect(product.price).toBe(50);
    });
});