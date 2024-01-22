import RestaurantDetails from "./RestaurantDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzasList from "./PizzasList"; // Corrected import
import PizzasForm from "./PizzasForm"; // Corrected import
import RestaurantPizza from "./Restaurant_Pizza"; // Corrected import
import Restaurants from "./Restaurants"; // Corrected import

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetails />}
          />
          <Route path="/*" element={<Restaurants />}/>
         
          <Route path="/pizzas/:id" element={<PizzasList />} /> {/* Corrected import */}
          <Route path="/restaurant_pizzas/new" element={<PizzasForm />} /> {/* Corrected import */}
          <Route path="/restaurant_pizzas" element={<RestaurantPizza />} /> {/* Corrected import */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
