import Image from "next/image";

export default function ProductCollection() {
  const products = [
    {
      id: 1,
      image: "/product-1.png",
      name: "Classic Himalayan Salt",
      description: "A Vedaka Fox Nuts (Phool Makhana) 200g| Light & Crunchy",
      price: "$12",
      tags: ["Roasted", "Premium Pack", "Global Delivery"],
    },
    {
      id: 2,
      image: "/product-2.png",
      name: "Peri Peri Roast",
      description: "A Vedaka Fox Nuts (Phool Makhana) 200g| Light & Crunchy",
      price: "$14",
      tags: ["Spiced", "Signature Taste", "Online Purchase"],
    },
    {
      id: 3,
      image: "/product-3.png",
      name: "Truffle Black Pepper",
      description: "A Vedaka Fox Nuts (Phool Makhana) 200g| Light & Crunchy",
      price: "$16",
      tags: ["Luxury Edition", "Refined Taste", "Premium Gift"],
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Signature Makhana Collection</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Three refined flavours designed for premium presentation, online purchase, and a modern snacking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-brand-accent/30 transition-all">
              <div className="relative aspect-square overflow-hidden bg-white/[0.05]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-xl font-bold text-brand-accent">{product.price}</span>
                </div>
                <p className="text-sm text-white/50 mb-6 font-light">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider bg-white/10 border border-white/5 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <button className="py-3 px-4 bg-white text-black text-sm font-bold rounded-lg hover:bg-white/90 transition-all">
                    Add to Cart
                  </button>
                  <button className="py-3 px-4 border border-white/20 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
