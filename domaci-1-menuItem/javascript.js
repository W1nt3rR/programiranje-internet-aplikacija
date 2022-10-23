class MenuItem {
    constructor (name, address, cssClass) {

        if(!name || !address)
            return 0;

        this.name = name;
        this.address = address;
        this.cssClass = cssClass;
    }

    isValid () {
        if(!this.name || !this.address)
            return false;

        return true;
    }
}

class DynamicMenu {
    constructor () {
        this.items = [];
    }
}