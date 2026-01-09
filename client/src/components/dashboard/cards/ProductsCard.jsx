const ProductsCard = () => {
  const products = [
    {
      name: 'WASP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: '/images/wasp.png'
    },
    {
      name: 'SNAIL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: '/images/snail.png'
    },
    {
      name: 'E',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: '/images/e-vehicle.png'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 border border-border shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Products</h3>
          <p className="text-sm text-text-secondary">Architecto design houses</p>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors">
          Marketplace →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-secondary rounded-xl overflow-hidden border border-border hover:border-accent-blue transition-all group cursor-pointer"
          >
            {/* Product Image */}
            <div className="h-40 bg-gradient-to-br from-secondary-light to-secondary flex items-center justify-center p-4">
              <div className="text-6xl font-bold text-text-muted group-hover:text-accent-blue transition-colors">
                {product.name === 'WASP' && '🏗️'}
                {product.name === 'SNAIL' && '🔧'}
                {product.name === 'E' && '🛵'}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h4 className="text-lg font-bold text-white mb-2">{product.name}</h4>
              <p className="text-xs text-text-secondary mb-4 line-clamp-2">
                {product.description}
              </p>
              <button className="w-full px-4 py-2 bg-secondary-light hover:bg-accent-blue text-white text-sm font-medium rounded-lg transition-all">
                Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog & License Links */}
      <div className="mt-6 flex items-center justify-end gap-6 text-sm">
        <a href="#" className="text-text-secondary hover:text-accent-blue transition-colors">
          Blog
        </a>
        <a href="#" className="text-text-secondary hover:text-accent-blue transition-colors">
          License
        </a>
      </div>
    </div>
  );
};

export default ProductsCard;
