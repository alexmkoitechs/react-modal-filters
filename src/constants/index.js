export const mainFormItems = [
  { name: "city", label: "Type City", type: "text" },
  { name: "price_from", label: "Price from", type: "number" },
  { name: "price_to", label: "Price to", type: "number" },
  { name: "area_from", label: "Area from", type: "number" },
  { name: "area_to", label: "Area to", type: "number" },
  { name: "floor_from", label: "Floor from", type: "number" },
  { name: "floor_to", label: "Floor to", type: "number" },
  { name: "isBusiness", label: "Business", type: "checkbox" },
  { name: "hasMortgage", label: "Mortgage", type: "checkbox" },
  { name: "hasRepair", label: "Repair", type: "checkbox" },
  { name: "vipped", label: "VIP", type: "checkbox" },
  { name: "featured", label: "Premium", type: "checkbox" },
];

export const radioButtonsItems = [
  {
    label: 'Rent or Sale',
    name: 'leased',
    items: [
      {
        value: true,
        title: "Rent",
      },
      {
        value: false,
        title: "Sale",
      },
    ],
  },
  {
    label: 'Daily rent',
    name: 'paidDaily',
    items: [
      {
        value: true,
        title: "Yes",
      },
      {
        value: false,
        title: "No",
      },
    ],
  },
];

export const roomsItems = [1, 2, 3, 4];

export const REACT_APP_API_URL='https://dummyjson.com/c/9bcf-df6d-464b-9df1';