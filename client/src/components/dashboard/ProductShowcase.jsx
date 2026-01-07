import "../../styles/dashboard.css";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "WASP",
      description: "3 in 1 digital work station, innovation advancing sustainable progress beyond all speed to serve in industry.",
      badge: "New",
      image: null,
    },
    {
      id: 2,
      name: "SNAA",
      description: "3 in 1 digital work station, innovation advancing sustainable progress beyond all speed to serve in industry.",
      badge: "Featured",
      image: null,
    },
    {
      id: 3,
      name: "E-Vehicle",
      description: "3 in 1 digital work station, innovation advancing sustainable progress beyond all speed to serve in industry.",
      badge: "Popular",
      image: null,
    },
  ];

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-image">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div style={{ fontSize: "48px", color: "white" }}>🚗</div>
            )}
            {product.badge && (
              <div className="product-badge">{product.badge}</div>
            )}
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <button className="product-action">Info</button>
          </div>
        </div>
      ))}
    </div>
  );
}