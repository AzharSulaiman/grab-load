// Scripts that get injected into web pages/load boards the user opens.
// Extracts broker/load data from website DOM, saves to extension storage, and communicates data back to your popup or background scripts.

console.log("Load board scraper active");

const extractLoadData = () => {
  const loads = [];
  document.querySelectorAll('.load-row').forEach(row => {
    const origin = row.querySelector('.origin')?.innerText || '';
    const destination = row.querySelector('.destination')?.innerText || '';
    const rate = row.querySelector('.rate')?.innerText || '';
    const broker = row.querySelector('.broker')?.innerText || '';
    loads.push({ origin, destination, rate, broker });
  });
  chrome.storage.local.set({ loads });
};

setInterval(extractLoadData, 10000);
