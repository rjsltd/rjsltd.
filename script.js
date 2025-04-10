document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const travelers = document.getElementById("travelers").value;

  const queryString = `results.html?from=${from}&to=${to}&date=${date}&travelers=${travelers}`;
  window.location.href = queryString;
});
