// In App.jsx
import { useState } from "react"; // React hook for managing state
import { Navbar } from "./components/Navbar"; // Component for navigation bar
import { NewsBoard } from "./components/NewsBoard"; // Component to display news articles

const App = () => {
  // State to track the selected news category
  const [category, setCategory] = useState("general");

  return (
    <div>
      {/* Navbar component with a function to update the selected category */}
      <Navbar setCategory={setCategory} />
      {/* NewsBoard component to display news based on the selected category */}
      <NewsBoard category={category} />
    </div>
  );
};

export default App;