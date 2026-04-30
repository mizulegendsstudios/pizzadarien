export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Pepperoni Especial',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    description: 'Nuestra clásica Pepperoni con doble porción de pepperoni ahumado, queso mozzarella fundido y borde relleno de queso en masa madre fermentada por 48 horas.',
    shortDescription: 'Borde de queso y salsa artesanal.',
    price: 12.50,
  },
  {
    id: 2,
    name: 'Margherita con Masa Madre',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    description: 'La auténtica receta italiana. Tomates San Marzano, mozzarella fresca di bufala, albahaca recién cortada y un toque de aceite de oliva extra virgen.',
    shortDescription: 'Tomates San Marzano, albahaca y mozzarella fresca.',
    price: 10.00,
  },
  {
    id: 3,
    name: 'La Trufada Panamá',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    description: 'Una experiencia gourmet en cada mordida. Base blanca con crema de trufa, champiñones frescos, prosciutto y rúcula.',
    shortDescription: 'Base de crema de trufas, prosciutto y champiñones.',
    price: 15.50,
  },
  {
    id: 4,
    name: 'Meat Lover Extrema',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
    description: 'Para los amantes de la carne. Chorizo italiano, bacon crocante, jamón artesanal y carne de res sazonada sobre nuestra salsa de tomate de la casa.',
    shortDescription: 'Chorizo, bacon, jamón y carne sobre salsa de la casa.',
    price: 14.00,
  }
]

export default products
