import Address from "./address";
import Customer from "./customer";

describe("Customer Unit Test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("123", "Carlos");
        customer.changeName("Charles");
        expect(customer.name).toBe("Charles");
    });

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("123", 123, "Test", "123");
        customer.setAddress(address);
        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when try activate customer without address", () => {
        const customer = new Customer("1", "Customer 1");
        expect(() => {
            customer.activate();

        }).toThrowError("Address is required")
    });
});