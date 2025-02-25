import Card from "./components/card";
import { AVAILABLE_IMAGE } from "./data";

function App() {
  return (
    <>
    <div className="container"></div>
      <header>
        <h1>Samsung product</h1>
      </header>
      <section className="product-card">
        <div className="product">
          {AVAILABLE_IMAGE.map(product => (
            <Card key = {product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
