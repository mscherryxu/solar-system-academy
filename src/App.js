import supabase from "./client";
import AllCampuses from "./components/AllCampuses";

const App = () => {
  return (
    <div className="App">
      <h1>Solar System Academy</h1>
      <AllCampuses />
    </div>
  );
};

export default App;
