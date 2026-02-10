import { NotesList } from '@/components/ShoppingListPage/NoteList';
import ShoppingListSummary from '@/components/ShoppingListPage/ShoppingListSummary';
import React, { useState } from 'react'

const initialItems = [
  {
    id: 1,
    name: "Milk 2.8%",
    quantity: 2,
    unit: "liter",
    checked: false,
    prices: { tesco: 389, aldi: 359, lidl: 349, spar: 399 },
  },
  {
    id: 2,
    name: "Bread",
    quantity: 1,
    unit: "db",
    checked: false,
    prices: { tesco: 459, aldi: 429, lidl: 419, spar: 479 },
  },
  {
    id: 3,
    name: "chicken",
    quantity: 500,
    unit: "g",
    checked: false,
    prices: { tesco: 1899, aldi: 1799, lidl: 1749, spar: 1999 },
  },
  {
    id: 4,
    name: "Tomato",
    quantity: 1,
    unit: "kg",
    checked: false,
    prices: { tesco: 699, aldi: 649, lidl: 599, spar: 749 },
  },
  {
    id: 5,
    name: "Egg",
    quantity: 10,
    unit: "db",
    checked: true,
    prices: { tesco: 899, aldi: 849, lidl: 829, spar: 929 },
  },
  {
    id: 6,
    name: "Apple",
    quantity: 1,
    unit: "kg",
    checked: false,
    prices: { tesco: 499, aldi: 449, lidl: 429, spar: 529 },
  },
];

function ShoppingListPage() {
  const [items, setItems] = useState(initialItems);

  const toggleItems = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item !== id))
  };
  // refactor based on API
  const addItem = (name) => {
    if (!name.trim()) return;
    const newItem = {
      id: Date.now(),
      name: name.trim(),
      quantity: 1,
      unit: "db",
      checked: false,
      prices: {
        tesco: Math.floor(Math.random() * 500) + 200,
        aldi: Math.floor(Math.random() * 500) + 200,
        lidl: Math.floor(Math.random() * 500) + 200,
        spar: Math.floor(Math.random() * 500) + 200,
      },
    };
    setItems([...items, newItem]);
  }

  const storeTotals = { tesco: 0, aldi: 0, lidl: 0, spar: 0 };
  items.forEach((item) => {
    if (item.checked) return;

    Object.keys(storeTotals).forEach((store) => {
      storeTotals[store] += item.prices[store] * (item.quantity > 10 ? 1 : item.quantity);
    })
  })

  const cheapestStore = Object.entries(storeTotals).sort((a, b) => a[1] - b[1])[0]?.[0];
  const mostExpensive = Math.max(...Object.values(storeTotals));
  const cheapest = Math.min(...Object.values(storeTotals));
  const potentialSavings = mostExpensive - cheapest;

  const activeItems = items.filter((item) => !item.checked);
  const checkedItems = items.filter((item) => item.checked);

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-6 max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2! gap-6'>

          {/* node lsit -left Side */}
          <div className='lg:grid-snap-2!'>
            <NotesList
            activeItems={activeItems}
            checkedItems={checkedItems}
            onToggle={toggleItems}
            onDelete={deleteItem}
            onAdd={addItem}
            />
          </div>

          <div className="lg:col-span-1">
            <ShoppingListSummary
              storeTotals={storeTotals}
              cheapestStore={cheapestStore}
              potentialSavings={potentialSavings}
              itemCount={activeItems.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingListPage