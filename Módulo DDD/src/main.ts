import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "Carlos");
const address = new Address("Rua tal", 123, "Sao Paulo", "123");
customer.setAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Item1", 10);
const item2 = new OrderItem("2", "Item2", 20);

const order = new Order("1", "123", [item1, item2]);