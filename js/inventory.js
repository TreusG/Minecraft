const Inventory = {
    element: null,
    items: { dirt: 0, stone: 0 },
    init() { this.element = document.getElementById("inventory"); this.render(); },
    add(name) { this.items[name] = (this.items[name] || 0) + 1; this.render(); },
    render() {
        if (!this.element) return;
        this.element.textContent = Object.entries(this.items).filter(([, count]) => count > 0).map(([name, count]) => `${name}: ${count}`).join(" | ");
    }
};
document.addEventListener("DOMContentLoaded", () => Inventory.init());
