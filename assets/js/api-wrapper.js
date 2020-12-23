async function getApiDataByCity(city) {
  const tours = await fetchApi(city);
  return joinActivitiesToTour(tours);
}

async function fetchApi(city) {
  const response = fetch(
    `https://api.turismoi.com/api/tours?filter%5Bcities%5D=${city}&page%5Bpage%5D=1&page%5Bper_page%5D=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
        accept: "application/vnd.api+json",
        "Accept-Search-Filters": "yes",
        "Accept-Language": "es",
        Authorization:
          "Token eyJhbGciOiJIUzI1NiJ9.eyJyZXNlbGxlcl9lbWFpbCI6ImFwYWRpbGxhK3BydWViYWRldkB0dXJpc21vaS5jb20ifQ.ICmqJen12eyoyNfKlMoSkZG5yffULVVNBalbqztFxoU",
      },
    }
  );
  return (await response).json();
}

function joinActivitiesToTour(data) {
  const activitiesData = data.included.reduce((activities, activity) => {
    activities[activity.id] = activity.attributes;
    return activities;
  }, {});

  // include activities by tour
  return data.data.map((tour) => {
    const activities = tour.relationships.activities.data.map(
      (activity) => activitiesData[activity.id]
    );
    return { ...tour, activities };
  });
}

export { getApiDataByCity };
