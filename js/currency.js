function setValue(selector, value) {
  document.querySelectorAll(selector).forEach(item => {
    item.innerText = value;
  });
}

function currency() {
  const countryListEUR = [
    "AT",
    "CH",
    "DE",
    "LI",
    "LU",
    "BE",
    "CZ",
    "ES",
    "FR",
    "GR",
    "HU",
    "IT",
    "NL",
    "PL",
    "PT",
    "RO",
    "RS",
    "HR",
    "SK",
    "SL",
    "DK",
    "FI",
    "NO",
    "SE"
  ];

  fetch("/geo")
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(data => {
      if (data.country_code == "GB") {
        setValue(".currency", "£");
        setValue(".currencyText", "pound");
        localStorage.setItem('currency', "£");
        localStorage.setItem('currencyText', "pound");
      } else if (countryListEUR.includes(data.country_code)) {
        setValue(".currency", "€");
        setValue(".currencyText", "euro");
        localStorage.setItem('currency', "€");
        localStorage.setItem('currencyText', "euro");
      } else {
        setValue(".currency", "$");
        setValue(".currencyText", "dollar");
        localStorage.setItem('currency', "$");
        localStorage.setItem('currencyText', "dollar");
      }
    })
    .catch(() => {
      setValue(".currency", "$");
      setValue(".currencyText", "dollar");
      localStorage.setItem('currency', "$");
      localStorage.setItem('currencyText', "dollar");
    });
}

window.addEventListener("DOMContentLoaded", () => {
  currency();
});