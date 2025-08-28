const conversionRate = {
    BRL: { BRL: 1.0, USD: 0.19, EUR: 0.16, GBP: 0.14 },
    USD: { BRL: 5.2632, USD: 1.0, EUR: 0.8421, GBP: 0.7368 },
    EUR: { BRL: 6.25, USD: 1.1875, EUR: 1.0, GBP: 0.875 },
    GBP: { BRL: 7.1429, USD: 1.3571, EUR: 1.1429, GBP: 1.0 },
};

const icons = {
    BRL: "./assets/real.png",
    USD: "./assets/dolar.png",
    EUR: "./assets/euro.png",
    GBP: "./assets/libra.png"
};

const currencyFromIcon = document.querySelector(".currencyFromIcon");
const currencyToIcon = document.querySelector(".currencyToIcon");

document.getElementById("currencyFrom").addEventListener("change", function () {
    const selectedCurrency = this.value;
    currencyFromIcon.src = icons[selectedCurrency];
    convertValues();
});

document.getElementById("currencyTo").addEventListener("change", function () {
    const selectedCurrency = this.value;
    currencyToIcon.src = icons[selectedCurrency];
    convertValues();
});

document.getElementById("amount").addEventListener("input", function () {
    this.value = this.value.replace(",", ".");
    convertValues();
});

function convertValues() {
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;
    const amount = document.getElementById("amount").value;

    const convertedAmount = amount * conversionRate[currencyFrom][currencyTo];

    const formatterCurrencyFrom = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currencyFrom
    });

    const formatterCurrencyTo = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currencyTo
    });
    document.querySelector(".currencyFromValue").textContent = formatterCurrencyFrom.format(amount);
    document.querySelector(".currencyToValue").textContent = formatterCurrencyTo.format(convertedAmount);

}

