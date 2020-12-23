function Screen() {
  const container = document.getElementById("container");

  function addCards(cards) {
    cards.forEach((card) => {
      container.appendChild(card.print());
    });
  }

  function cleanScreen() {
    container.innerHTML = "";
  }

  return {
    addCards,
    cleanScreen,
  };
}

export default Screen;
