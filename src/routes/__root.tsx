import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../store/cart'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pizza Pro Panamá 🍕 | La Mejor Pizza Artesanal en Panamá' },
      { name: 'description', content: 'Pizza artesanal en Panamá con masa madre e ingredientes frescos locales. ¡Pide tu pizza online hoy por WhatsApp!' }
    ],
  }),
  shellComponent: RootDocument,
})

function Header() {
  const { toggleCart, items } = useCartStore()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-zinc-950 text-white p-4 sticky top-0 z-50 border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-amber-500">
          Pizza Pro <span className="text-white">Panamá</span> 🍕
        </h1>
        <button 
          onClick={toggleCart}
          className="relative p-2 bg-amber-600 hover:bg-amber-700 transition rounded-full text-white flex items-center gap-2"
        >
          <ShoppingCart size={20} />
          <span className="font-bold">Carrito</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased bg-zinc-50 text-zinc-900">
        <Header />
        <main>
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  )
}
