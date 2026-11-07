const Tools = {
    selected: null,
    init() {
        document.querySelectorAll("[data-tool]").forEach((button) => {
            button.addEventListener("click", () => {
                this.selected = button.dataset.tool;
            });
        });
    }
};
document.addEventListener("DOMContentLoaded", () => Tools.init());
