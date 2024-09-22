{

/*******************************************************
 * Пример компонента до рефакторинга
 */
class Card {
    constructor(data, units = "") {
        this.data = data;
        this.units = units;
    }

    formatNumber(n) {
        if (this.units === "$") {
            const USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            return USDollar.format(n);
        } else if (this.units === "%") {
            return `${(n * 100).toFixed(2)}%.`;
        } else {
            return `${n}`;
        }
    }

    render(root) {
        // отрисовка с использованием this.formatNumber()
        const text = this.formatNumber(this.data);
        const textNode = document.createTextNode(text);
        root.appendChild(textNode);
    }
}

const simpleCard = new Card(data);

const priceCard = new Card(price, "$");

const percentageCard = new Card(ratio, "%");

}

// ===============================================================

{

/*******************************************************
 * Вариант рефакторинга – получаем функцию форматирования снаружи
 */
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

const percentageCard = new Card(data, n => `${(n * 100).toFixed(2)}%.`);

// теперь легко добавлять новые виды карточек:
const lengthCard = new Card(data, n => `${n}м.`);

}