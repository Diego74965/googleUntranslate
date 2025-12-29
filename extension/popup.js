document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("filterEnabled");
  if (!checkbox) return;

  // Load saved preference (use boolean fallback)
  chrome.storage.local.get(["filterEnabled"], (data) => {
    checkbox.checked = data.filterEnabled === true;
  });

  // Update preference when user toggles checkbox
  checkbox.addEventListener("change", () => {
    chrome.storage.local.set({ filterEnabled: checkbox.checked });
  });
});
