function App() {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center h-16 overflow-hidden">
        {/* <h1 className="text-2xl font-bold text-yellow-400">GoldTrust Pawn</h1> */}
        <img src="./assets/goldTrust.png" className="w-24 ml-4" />
        <div className="space-x-6">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
          <a href="#" className="hover:text-yellow-400">Shop</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-yellow-500 text-black text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Instant Cash for Your Valuables
        </h2>
        <p className="text-lg mb-8">
          Gold, Electronics, Jewelry, Watches & More
        </p>
        <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
          Get Free Valuation
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Pawn Loans</h4>
            <p>Quick short-term loans with secure collateral.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Buy & Sell</h4>
            <p>Best deals on electronics, gold, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Jewelry Appraisal</h4>
            <p>Professional gold & diamond evaluation.</p>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="bg-gray-200 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Items</h3>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/36/18/79/361879aae0ebd7e22af746d931a94979.jpg"
              className="w-full h-56 object-cover"
              alt="Rolex Watch"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Rolex Watch</h4>
              <p className="text-yellow-600 font-bold mt-2">$2,500</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              className="w-full h-56 object-cover"
              alt="Gold Necklace"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Gold Necklace</h4>
              <p className="text-yellow-600 font-bold mt-2">$1,200</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              className="w-full h-56 object-cover"
              alt="Gaming Laptop"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Gaming Laptop</h4>
              <p className="text-yellow-600 font-bold mt-2">$900</p>
            </div>
          </div>

        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Quick Loan Estimate</h3>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <input
            type="number"
            placeholder="Item Value ($)"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="number"
            placeholder="Loan Duration (Months)"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400">
            Calculate
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          Contact Us
        </h3>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 rounded-lg text-black"
          ></textarea>
          <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2026 GoldTrust Pawn Shop. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
