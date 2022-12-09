import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
function App() {
  const [page, setPage] = useState("planets")
  return (
    <div className="App">
      <div className="content">
        <h1>React Query Demo</h1>
        <Navbar/>
        {(page === "planets")?(<Planets/>):(<People/>)}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
