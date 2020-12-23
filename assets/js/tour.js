function Tour(tour) {
  const { avg_hours } = tour.attributes;

  const name = tour.attributes.name;
  const activites = tour.activities.map((activity) => activity.name);
  const hours = avg_hours !== 24 ? avg_hours : null;
  const days = tour.attributes.days;
  const price = tour.attributes.original_price;
  const photo = tour.attributes.principal_photo;

  function print() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card__image-container" style="background-image: url('${photo}');"></div>
        <div class="card__body">
          <div class="card__body-title">
            <h2>${name}</h2>
          </div>
          <div class="card__body-content">
            <h3 class="subtitle">Actividades</h3>
            <p class="text">${activites.join(", ")}</p>
          </div>
          <div class="card__footer">
            <div class="card__footer-left">
              <span class="text">${
                hours ? `${hours} horas ` : `${days} días `
              }</span>
            </div>
            <div class="card__footer-right">
              <h3 class="subtitle">Desde</h3>
              <span class="price">S/${price}</span>
            </div>
          </div>
        </div>
    `;
    return card;
  }
  return {
    print,
  };
}

export default Tour;
