import React from 'react'
import { TrendingDown, Bell, ListChecks, BarChart3 } from "lucide-react"

const features = [
  {
    icon: TrendingDown,
    title: "Price comparison",
    description: "See immediately which store has the cheapest price for the product you are looking for. Save time and money.",
  },
  {
    icon: Bell,
    title: "Price monitoring",
    description: "Set up a notification and be notified immediately when your favorite product goes on sale.",
  },
  {
    icon: ListChecks,
    title: "Shopping list",
    description: "Make a list and the system will show you which store will be the cheapest for your shopping.",
  },
  {
    icon: BarChart3,
    title: "Árstatisztikák",
    description: "Follow price trends in real time and always buy at the best moment.",
  },
]

function featuresSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Smart shopping, made easy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get the most out of your shopping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default featuresSection