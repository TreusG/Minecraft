const splashText = document.getElementById("splashText");
const splashes = ["2D, but Blocky!", "Use the Right Tool!", "Now with Trees!"];
if (splashText) splashText.textContent = splashes[Math.floor(Math.random() * splashes.length)];
document.getElementById("tutorialBtn")?.addEventListener("click", () => document.getElementById("tutorialDialog")?.showModal());
document.getElementById("closeTutorialBtn")?.addEventListener("click", () => document.getElementById("tutorialDialog")?.close());
