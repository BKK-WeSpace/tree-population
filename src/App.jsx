
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from './routes/Router';
import useGetTrees from './data/hooks/useGetTrees';


function App() {


  const { isLoading, trees } = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, trees); // Delete this line when the frontend work begins.

  return <RouterProvider router={router}/>
}

export default App;
