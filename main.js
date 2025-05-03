function calculateFutureValue() {
  // input values
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const years = parseFloat(document.getElementById("years").value);
  const compound = parseFloat(document.getElementById("compound").value);

  //result and error elements
  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("error");

  // Validate inputs
  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(years) ||
    principal < 0 ||
    rate < 0 ||
    years < 0
  ) {
    errorElement.style.display = "block";
    resultElement.style.display = "none";
    return;
  }

  const n = compound; // number of compounding periods per year
  const nt = n * years; // total number of compounding periods
  const futureValue = principal * Math.pow(1 + rate / n, nt);

  // Display result
  resultElement.innerHTML = `
            Future Value: $${futureValue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        `;
  resultElement.style.display = "block";
  errorElement.style.display = "none";
}
