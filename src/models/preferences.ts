export interface PlaceCityInterface {
  city: string;
  centers: string[];
}

export interface PlaceInterface {
  state: string;
  cities: PlaceCityInterface[];
}

export interface PreferencesInterface {
  places: PlaceInterface[];
}

export function PreferencesModel(data: PreferencesInterface | any): PreferencesInterface {
  const entryPlaces = (data && data.places && data.places.length) ? data.places as PlaceInterface[] : [];
  const places = entryPlaces.map((place) => {
    if (!place.state) return null;
    const entryCities = place.cities || [];
    const cities = (entryCities.map(city => {
      if (!city.city) return null;
      const centers = city.centers || [];
      return { city: city.city, centers };

    }).filter(city => city !== null)) as unknown as PlaceCityInterface

    return { state: place.state, cities }
  }).filter(place => place !== null) as unknown as PlaceInterface[];
  return {
    places,
  }
}
