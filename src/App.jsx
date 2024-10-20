import { route } from "./Route";
import { useRoutes } from "react-router-dom";

const App = () => {
  const element = useRoutes(route)
  return element;
}

export default App