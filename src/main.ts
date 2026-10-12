const CSE_CX = "114c9d7a000fb46fb";
const CSE_SRC = `https://cse.google.com/cse.js?cx=${CSE_CX}`;

function setStatus(message: string): void {
  const el = document.querySelector<HTMLParagraphElement>("#status");
  if (el) el.textContent = message;
}

function ensureCseLoaded(): void {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CSE_SRC}"]`,
  );
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

function hideEmptyResults(): void {
  const container = document.querySelector<HTMLElement>("#results-wrap");
  if (!container) return;
  container.style.display = "none";
  const showIfReady = (): void => {
    const hasResults =
      container.querySelector(".gsc-result, .gsc-results .gsc-webResult") !== null;
    container.style.display = hasResults ? "" : "none";
  };
  new MutationObserver(showIfReady).observe(container, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  showIfReady();
}
