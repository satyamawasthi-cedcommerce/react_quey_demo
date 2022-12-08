import Launches from "./components/launches/Launches";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <div className="App">
      <div className="content">
        <Launches />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
