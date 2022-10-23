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
    constructor (containerID) {
        this.containerID = containerID;
        this.items = [];
    }

    setContainerID (containerID) {
        this.containerID = containerID;
    }

    addExisitngItem (item) {
        this.items.push(item);
    }

    addItem (name, address, cssClass) {
        this.items.push(new MenuItem(name, address, cssClass));
    }

    removeItem (itemName) {
        this.items = this.items.filter((item) => {
            return item.name != itemName;
        })
    }

    render () {
        const container = document.getElementById(this.containerID);
        const menu = document.createElement("div");

        this.items.map((item) => {
            const menuItem = document.createElement("a");
            menuItem.textContent = item.name;
            menuItem.href = item.address;
            menuItem.classList = item.cssClass;
            menu.appendChild(menuItem);
        })

        container.appendChild(menu);
    }
}

const menu = new DynamicMenu ("container");

menu.addItem ("item1", "https://wallhaven.cc/w/9mjoy1", "class1");

menu.render();