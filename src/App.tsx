import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homesection from "./components/Homesection";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Homesection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
