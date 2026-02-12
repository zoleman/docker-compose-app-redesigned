import React from 'react'
import { Search, BarChart2, ShoppingCart, Smile } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Keress termékre",
    description: "Írd be a keresett termék nevét vagy válassz kategóriát.",
  },
  {
    number: "2",
    icon: BarChart2,
    title: "Hasonlítsd össze",
    description: "Nézd meg az árakat az összes támogatott áruházban egyszerre.",
  },
  {
    number: "3",
    icon: ShoppingCart,
    title: "Tervezd meg",
    description: "Készíts bevásárlólistát és optimalizáld a költségeidet.",
  },
  {
    number: "4",
    icon: Smile,
    title: "Spórolj",
    description: "Élvezd a megtakarítást és a hatékony bevásárlást!",
  },
]

function HowItWork() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hogyan működik?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Négy egyszerű lépésben kezdheted el a spórolást
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.number} className="relative text-center">
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                
                <div className="relative z-10 mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWork