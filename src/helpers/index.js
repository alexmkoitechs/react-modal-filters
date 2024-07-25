export const getFilteredCards = (checkedFilters, cardsData) => {
  if (Object.keys(checkedFilters).length === 0) {
    return cardsData;
  }

  const filteredData = cardsData.filter((card) => {
    for (let key in checkedFilters) {
      if (typeof checkedFilters[key] === "boolean" && (card[key] !== checkedFilters[key])) {
        return false;
      }

      if (key === "city" && card.city.name !== checkedFilters.city) {
        return false;
      }
    }

    if (
      (checkedFilters.price_from && card.price.value < checkedFilters.price_from) ||
      (checkedFilters.price_to && card.price.value > checkedFilters.price_to)
    ) {
      return false;
    }

    if (
      (checkedFilters.area_from && card.area.value < checkedFilters.area_from) ||
      (checkedFilters.area_to && card.area.value > checkedFilters.area_to)
    ) {
      return false;
    }

    if (
      (checkedFilters.floor_from &&
        (card.floor === null || card.floor < checkedFilters.floor_from)) ||
      (checkedFilters.floor_to && (card.floor === null || card.floor > checkedFilters.floor_to))
    ) {
      return false;
    }

    if (checkedFilters.rooms && !checkedFilters.rooms.includes(card.rooms)) {
      return false;
    }

    return true;
  });

  return filteredData;
};

export const parseFuncRadio = (value) => !!value ? value === "true" : undefined;

export const getUpdatedDates = (updatedDate) => {
  const now = new Date();
  const date = new Date(updatedDate);
  const diffBetweenDates = Math.abs(now - date);
  const diffDays = Math.ceil(diffBetweenDates / (1000 * 60 * 60 * 24));

  return diffDays;
};
