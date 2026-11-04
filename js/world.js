const World = {
    rows: 14, columns: 24, element: null, map: [],
    init() { this.element = document.getElementById("world"); this.generate(); this.render(); },
    generate() {
        this.map = [];
        for (let row = 0; row < this.rows; row++) {
            const line = [];
            for (let col = 0; col < this.columns; col++) line.push(row < 9 ? "sky" : row === 9 ? "grass" : "dirt");
            this.map.push(line);
        }
    },
    render() {
        this.element.innerHTML = "";
        this.map.flat().forEach((type) => { const tile = document.createElement("div"); tile.className = `tile tile-${type}`; this.element.appendChild(tile); });
    }
};
document.addEventListener("DOMContentLoaded", () => World.init());
