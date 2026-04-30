import { useCartStore } from '../store/cart'
import { X, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export function Cart() {
  const { items, isOpen, toggleCart, updateQuantity } = useCartStore()
  const [address, setAddress] = useState('')

  if (!isOpen) return null

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (items.length === 0) return

    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})`)
      .join('\n')

    const message = `*🍕 NUEVO PEDIDO - Pizza Pro Panamá*\n\n*Detalle:*\n${orderDetails}\n\n*Subtotal:* $${total.toFixed(
      2
    )}\n*Dirección de Entrega:* ${address || 'Por confirmar'}\n\n¡Gracias por preferirnos!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/50760000000?text=${encodedMessage}`, '_blank')
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform border-l border-zinc-200">
        <div className="p-5 flex justify-between items-center bg-zinc-950 text-white">
          <h2 className="text-xl font-black text-amber-500">Tu Pedido 🛒</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-zinc-800 rounded-full transition text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-4">
              <span className="text-6xl">🍕</span>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 border-zinc-100">
                  <div className="flex-1">
                    <h3 className="font-bold text-zinc-900">{item.name}</h3>
                    <p className="text-zinc-500 font-medium">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-100 rounded-full p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-white hover:shadow-sm rounded-full transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-4 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-white hover:shadow-sm rounded-full transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 bg-zinc-50 border-t border-zinc-200 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-bold text-zinc-700">
                Dirección de Entrega:
              </label>
              <textarea
                id="address"
                placeholder="Ej. San Francisco, Calle 50, Edificio..."
                className="w-full p-3 rounded-lg border border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none resize-none bg-white"
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center text-lg font-black mb-2">
              <span>Total a pagar:</span>
              <span className="text-amber-600 text-2xl">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              Pedir por WhatsApp 💬
            </button>
          </div>
        )}
      </div>
    </>
  )
}
