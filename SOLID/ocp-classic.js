class Card {
    constructor(data) {
      this.data = data;
    }
  
    formatNumber(n) {
      return `${n}`;
    }
  
    render(root) {
      // отрисовка с использованием this.formatNumber()
    }
  }
  
  
  class UsdCard extends Card {
    formatNumber(n) {
      return USDollar.format(n);
    }
  }
  
  
  class PercentageCard extends Card {
    formatNumber(n) {
      return `${(n * 100).toFixed(2)}%.`;
    }
  }
  
  
  const usdCard = new UsdCard(data);
  
  const percentageCard = new PercentageCard(data);
  
  // JS также позволяет перекрыть метод у конкретного экземпляра:
  percentageCard.formatNumber = (n) => "..."
  