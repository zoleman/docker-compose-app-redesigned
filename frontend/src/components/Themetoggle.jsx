import { useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
