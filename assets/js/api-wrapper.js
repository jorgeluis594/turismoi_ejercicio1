async function getApiDataByCity(city) {
  const tours = await fetchApi(city);
  return tours;
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

export { getApiDataByCity };
