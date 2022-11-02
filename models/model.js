import Inventory from "../utils/inventoryclass.js"
export default class Model{
    constructor() {
        this.guitarList = new Inventory;

    }
    initialize(guitars){
        for (const guitar of guitars){
            this.guitarList.addGuitar(
                guitar.serialNumber, guitar.price, guitar.builder, guitar.model,
                guitar.type, guitar.backwood, guitar.topwood);
        }

    }
}