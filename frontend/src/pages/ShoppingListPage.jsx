import { NotesList } from '@/components/ShoppingListPage/NoteList';
import ShoppingListSummary from '@/components/ShoppingListPage/ShoppingListSummary';
import { useCart } from '@/helpers/useCart';
import React, { useState } from 'react'


//todod

function ShoppingListPage() {
    const { cart, removeFromCart ,toggleItem } = useCart();





  const addItem = (name) => {
    
  }

const storeTotals = cart.reduce((totals, item) => {
  if (item.checked) return totals;

  item.prices.forEach(({ storeName, price }) => {
    const key = storeName.toLowerCase();

    if (!totals[key]) {
      totals[key] = 0;
    }

    totals[key] += price * (item.amount ?? 1);
  });

  return totals;
}, {});


  const cheapestStore = Object.entries(storeTotals).sort((a, b) => a[1] - b[1])[0]?.[0];
  const mostExpensive = Math.max(...Object.values(storeTotals));
  const cheapest = Math.min(...Object.values(storeTotals));
  const potentialSavings = (mostExpensive - cheapest).toFixed(2);

  const activeItems = cart.filter((item) => !item.checked);
  const checkedItems = cart.filter((item) => item.checked);

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-6 max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-3! gap-6'>

          {/* node lsit -left Side */}
          <div className='lg:col-span-2!'>
            <NotesList
            activeItems={activeItems}
            checkedItems={checkedItems}
            onToggle={toggleItem}
            onDelete={removeFromCart}
            onAdd={addItem}
            />
          </div>

          <div className="lg:col-span-1!">
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