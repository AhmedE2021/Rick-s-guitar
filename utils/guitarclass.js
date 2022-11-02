export default class Guitar{
    constructor(serialNumber, price, builder, model, type, backwood, topwood
    )
    {
        this.serialNumber = serialNumber
        this.price = price
        this.builder = builder
        this.model = model
        this.type = type
        this.backwood = backwood
        this.topwood = topwood
    }
    getSerialNumber() {
        return this.serialNumber;
    }

    getPrice() {
        return this.price;
    }

    getBuilder() {
        return this.builder;
    }

    getModel() {
        return this.model;
    }

    getType() {
        return this.type;
    }

    getBackwood() {
        return this.backwood;
    }

    getTopwood() {
        return this.topwood;
    }
}