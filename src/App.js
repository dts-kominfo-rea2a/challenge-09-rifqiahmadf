import "./App.css";
import Header from "../src/components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <br />
      {contacts.map((user, index) => (
        <Contact key={index} data={user} />
      ))}
    </div>
  );
};

export default App;
