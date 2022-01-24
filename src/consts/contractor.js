
export const ATTRACTION_FIELDS = [
  {
    name: "header",
    label: "Tytuł",
  },
  {
    name: "description",
    label: "Opis",
  },
  {
    name: "image",
    label: "Zdjęcie",
  },
  {
    name: "price",
    label: "Cena",
  },
  {
    name: "email",
    label: "E-mail",
  },
];

export const FLIGHT_FIELDS = [
  {
    name: "header",
    label: "Tytuł",
  },
  {
    name: "description",
    label: "Opis",
  },
  {
    name: "startDate",
    label: "Data rozpoczęcia",
    parseInput: (value) => (new Date(value)).toISOString()
  },
  {
    name: "endDate",
    label: "Data zakończenia",
    parseInput: (value) => (new Date(value)).toISOString()
  },
  {
    name: "image",
    label: "Zdjęcie",
  },
  {
    name: "fromCountry",
    label: "Z kraju",
  },
  {
    name: "toCountry",
    label: "Do kraju",
  },
  {
    name: "price",
    label: "Cena",
  },
];

export const HOTEL_FIELDS = [
  {
    name: "header",
    label: "Tytuł",
  },
  {
    name: "description",
    label: "Opis",
  },
  {
    name: "startDate",
    label: "Data rozpoczęcia",
    parseInput: (value) => (new Date(value)).toISOString(),
  },
  {
    name: "endDate",
    label: "Data zakończenia",
    parseInput: (value) => (new Date(value)).toISOString()
  },
  {
    name: "image",
    label: "Zdjęcie",
  },
  {
    name: "region",
    label: "Region",
  },
  {
    name: "price",
    label: "Cena",
  },
];

export const CONTRACTOR_TYPES = {
  attraction: {
    title: 'Atrakcja',
    endpoint: '/attraction/register',
    fields: ATTRACTION_FIELDS
  },
  flight: {
    title: 'Lot',
    endpoint: '/flight/register',
    fields: FLIGHT_FIELDS,
  },
  hotel: {
    title: 'Hotel',
    endpoint: '/hotel/register',
    fields: HOTEL_FIELDS,
  },
};
