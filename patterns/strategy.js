class Card {
    constructor(data, formatter) {
        this.data = data;
        this.formatter = formatter;
    }

    formatNumber(n) {
        return this.formatter(n);
    }

    render(root) {
        // отрисовка с использованием this.formatNumber()
    }
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const usdCard = new Card(data, USDollar.format);
