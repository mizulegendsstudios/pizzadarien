import { createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { Cart } from '@/components/Cart'
import { useCartStore } from '@/store/cart'
import { Star, Clock, Flame, Award, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex gap-4 justify-center mt-6">
      <div className="flex flex-col items-center">
        <div className="bg-red-600 text-white text-3xl md:text-5xl font-black p-4 rounded-xl shadow-inner min-w-[80px]">
          {minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-white mt-2 font-bold text-sm uppercase tracking-widest">Minutos</span>
      </div>
      <div className="text-red-500 text-3xl md:text-5xl font-black mt-2">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-red-600 text-white text-3xl md:text-5xl font-black p-4 rounded-xl shadow-inner min-w-[80px]">
          {seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-white mt-2 font-bold text-sm uppercase tracking-widest">Segundos</span>
      </div>
    </div>
  )
}

function LandingPage() {
  const { addItem } = useCartStore()

  return (
    <div className="bg-zinc-50 overflow-hidden">
      <Cart />

      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white py-24 md:py-32 flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop" 
            alt="Pizza Header" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center flex flex-col items-center">
          <span className="bg-amber-500/20 text-amber-500 font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-amber-500/50">
            Artesanos de la Pizza
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-white drop-shadow-2xl">
            Sabor Auténtico en <span className="text-amber-500">Panamá</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium">
            Masa madre fermentada por 48 horas, ingredientes locales frescos y horneadas a la perfección.
          </p>
          <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white text-xl font-black py-5 px-10 rounded-full transition transform hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.4)] flex items-center gap-3">
            <Flame size={24} />
            Ver Menú y Ordenar
          </a>
        </div>
      </section>

      {/* Why We Are The Best Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">¿Por qué somos los mejores?</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 text-center flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-amber-100 p-5 rounded-full text-amber-600 mb-6">
                <Award size={40} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-3">Masa Madre 48h</h3>
              <p className="text-zinc-600 leading-relaxed">Nuestra masa reposa y fermenta lentamente durante 48 horas, resultando en una textura ligera, crujiente y de fácil digestión.</p>
            </div>
            <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 text-center flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-green-100 p-5 rounded-full text-green-600 mb-6">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-3">Ingredientes Locales</h3>
              <p className="text-zinc-600 leading-relaxed">Apoyamos a productores panameños utilizando vegetales frescos y embutidos de la más alta calidad para un sabor inigualable.</p>
            </div>
            <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 text-center flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-red-100 p-5 rounded-full text-red-600 mb-6">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-3">Recién Horneadas</h3>
              <p className="text-zinc-600 leading-relaxed">Cada pizza se prepara al instante y va directamente de nuestro horno de piedra a la puerta de tu casa. Siempre calientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <span className="inline-block bg-red-600 text-white text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 animate-pulse">
            OFERTA RELÁMPAGO ⚡
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Envío GRATIS + <span className="text-amber-500">20% de Descuento</span> en tu primer pedido
          </h2>
          <p className="text-xl text-zinc-400 mb-8 font-medium">
            ¡Date prisa! Esta promoción exclusiva para clientes de WhatsApp termina pronto.
          </p>
          <Countdown />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">Nuestro Menú</h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-zinc-600 max-w-2xl mx-auto">Selecciona tus pizzas favoritas y pidelas en un solo clic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-zinc-100 flex flex-col">
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-zinc-900 font-black shadow-lg">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-zinc-900 mb-2">{product.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6 flex-grow">{product.shortDescription}</p>
                  
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                    className="w-full bg-zinc-950 hover:bg-amber-500 hover:text-zinc-950 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>Añadir al carrito</span>
                    <span className="text-xl leading-none">+</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Lo que dicen nuestros clientes</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", text: "¡La mejor pizza de Panamá sin duda! La masa madre es increíble y llegó caliente a mi casa en San Francisco.", stars: 5 },
              { name: "Ana P.", text: "El servicio por WhatsApp es súper rápido. La Trufada es de otro planeta. 100% recomendados.", stars: 5 },
              { name: "Miguel A.", text: "Se nota la calidad de los ingredientes. Excelente atención y las pizzas son grandes y bien resueltas.", stars: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-zinc-800 p-8 rounded-3xl relative">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-zinc-300 text-lg italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <span className="text-sm text-zinc-500">Cliente Verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-800 text-center">
        <p className="font-medium">© {new Date().getFullYear()} Pizza Pro Panamá. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Hecho con ❤️ para Panamá.</p>
      </footer>
    </div>
  )
}
