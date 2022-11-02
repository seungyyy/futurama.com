export const seletedInventoryList = [
  {
    id: 0,
    category: 'all',
  },
  {
    id: 1,
    category: 'Pest Control',
  },
  {
    id: 2,
    category: 'Misc',
  },
  {
    id: 3,
    category: 'Food',
  },
  {
    id: 4,
    category: 'Publications',
  },
  {
    id: 5,
    category: 'Toys',
  },
  {
    id: 6,
    category: 'Health',
  },
  {
    id: 7,
    category: 'Clothing',
  },
];

type inventoryNameType = {
  [key: string] : string
}

export const inventoryName: inventoryNameType = {
  'all': 'all', 
  'Pest Control':'Pest Control',
  'Misc': 'Misc',
  'Food': 'Food',
  'Publications': 'Publications',
  'Toys': 'Toys',
  'Health': 'Health',
  'Clothing': 'Clothing'
}