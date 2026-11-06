const World = {
    rows: 14, columns: 24, element: null, map: [],
    init() { this.element = document.getElementById("world"); this.generate(); this.render(); },
    generate() {
        this.map = [];
        const heights = Array.from({ length: this.columns }, () => 7 + Math.floor(Math.random() * 4));
        for (let row = 0; row < this.rows; row++) {
            const line = [];
            for (let col = 0; col < this.columns; col++) {
                const ground = heights[col];
                let tile = row < ground ? "sky" : row === ground ? "grass" : row <= ground + 3 ? "dirt" : "stone";
                if (row > ground + 5 && Math.random() < 0.035) tile = "coal";
                if (row > ground + 7 && Math.random() < 0.018) tile = "iron";
                if (row > ground + 8 && Math.random() < 0.012) tile = "diamond";
                if (row > ground + 4 && Math.random() < 0.018) tile = "empty";
                line.push(tile);
            }
            this.map.push(line);
        }
        for (let col = 2; col < this.columns - 2; col++) {
            if (Math.random() > 0.16) continue;
            const ground = heights[col];
            for (let row = Math.max(0, ground - 3); row < ground; row++) this.map[row][col] = "oak-log";
            if (ground - 4 >= 0) this.map[ground - 4][col] = "oak-leaves";
            if (ground - 3 >= 0) { this.map[ground - 3][col - 1] = "oak-leaves"; this.map[ground - 3][col + 1] = "oak-leaves"; }
        }
    },
    render() {
        this.element.innerHTML = "";
        this.map.flat().forEach((type) => { const tile = document.createElement("div"); tile.className = `tile tile-${type}`; this.element.appendChild(tile); });
    }
};
document.addEventListener("DOMContentLoaded", () => World.init());
