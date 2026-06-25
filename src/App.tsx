import "./App.css";
import ServicesPage from "./pages/ServicesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}
 
export default App;