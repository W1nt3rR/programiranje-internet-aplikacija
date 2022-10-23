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
        menu.classList = "dynamicMenu";

        this.items.map((item) => {
            const menuAnchor = document.createElement("a");
            menuAnchor.href = item.address;
            
            const menuText = document.createElement("p");
            menuText.textContent = item.name;
            
            const menuItem = document.createElement("div");
            menuItem.classList.add(item.cssClass);
            menuItem.classList.add("menuItem");

            menuItem.appendChild(menuText);
            menuAnchor.appendChild(menuItem);
            menu.appendChild(menuAnchor);
        })

        container.appendChild(menu);
    }
}

const menu = new DynamicMenu ("container");

menu.addItem ("item1", "https://wallhaven.cc/w/9mjoy1", "class1");
menu.addItem ("item2", "https://wallhaven.cc/w/9mjoy1", "class2");
menu.addItem ("item3", "https://wallhaven.cc/w/9mjoy1", "class3");
menu.addItem ("item4", "https://wallhaven.cc/w/9mjoy1", "class1");

const item = new MenuItem("existing", "https://wallhaven.cc/w/e7jj6r");
menu.addExisitngItem(item);

menu.render();