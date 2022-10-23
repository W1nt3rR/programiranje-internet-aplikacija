class MenuItem {
    constructor (name, address, cssClass) {

        if(!name || !address)
            return 0;

        this.name = name;
        this.address = address;
        this.cssClass = cssClass;
    }
}

class DynamicMenu {
    constructor () {
        this.items = [];
    }
}