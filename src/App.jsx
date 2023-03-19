
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from './routes/Router';
import useGetTrees from './data/hooks/useGetTrees';


function App() {

  return <RouterProvider router={router}/>
}

export default App;
