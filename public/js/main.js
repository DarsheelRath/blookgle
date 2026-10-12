const CSE_CX = "114c9d7a000fb46fb";
const CSE_SRC = `https://cse.google.com/cse.js?cx=${CSE_CX}`;
function setStatus(message) {
    const el = document.querySelector("#status");
    if (el)
        el.textContent = message;
}
function ensureCseLoaded() {
    const existing = document.querySelector(`script[src="${CSE_SRC}"]`);
    if (existing) {
        setStatus("Search engine ready.");
        return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = CSE_SRC;
    script.onload = () => setStatus("Search engine ready.");
    script.onerror = () => setStatus("Could not load Google search. Check connection / ad-blocker.");
    document.head.appendChild(script);
    setStatus("Loading search engine…");
}
document.addEventListener("DOMContentLoaded", ensureCseLoaded);
document.addEventListener("DOMContentLoaded", hideEmptyResults);
function hideEmptyResults() {
    const container = document.querySelector("#results-wrap");
    if (!container)
        return;
    container.style.display = "none";
    const showIfReady = () => {
        const hasResults = container.querySelector(".gsc-result, .gsc-results .gsc-webResult") !== null;
        container.style.display = hasResults ? "" : "none";
    };
    new MutationObserver(showIfReady).observe(container, {
        childList: true,
        subtree: true,
        characterData: true,
    });
    showIfReady();
}
export {};
//# sourceMappingURL=main.js.map