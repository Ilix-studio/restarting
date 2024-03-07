import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
// import Events from "./components/Events";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import UpdateState from "./components/UpdateState";
// import Vegiables from "./components/Vegiables";
import { QueryClientProvider, QueryClient } from "react-query";
// import SimpleForm from "./form/SimpleForm";
// import Parent from "./understangProps/Parent";
import UsingBasicHooks from "./ThreeRoutes/UsingBasicHooks";
import UsingRQ from "./ThreeRoutes/UsingRQ";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          {/* <Home />
          <Products />
          <Vegiables />
          <Events />
          <UpdateState />
          <UpdateState />
          <Parent />
          <SimpleForm /> */}
          <UsingBasicHooks />
          <UsingRQ />
        </Router>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
