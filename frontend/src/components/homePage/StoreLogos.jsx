import React from 'react'

const stores = [
  { name: "Tesco", color: "bg-blue-600" },
  { name: "Aldi", color: "bg-sky-500" },
  { name: "Lidl", color: "bg-yellow-500" },
  { name: "Spar", color: "bg-green-600" },
  { name: "Penny", color: "bg-red-600" },
  { name: "CBA", color: "bg-orange-500" },
  { name: "Auchan", color: "bg-red-700" },
]

function StoreLogos() {
  return (
        <section className="bg-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-background/70 mb-6">
          Price comparison from the largest Hungarian stores
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {stores.map((store) => (
            <div
              key={store.name}
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className={`w-8 h-8 ${store.color} rounded-lg flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{store.name.charAt(0)}</span>
              </div>
              <span className="text-background font-medium">{store.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoreLogos