import './App.css'

import EmptyPage from './pages/EmptyPage';

import DataFetcher from './components/DataFetcher'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DataFetcher />,
  },
  {
    path: "/empty",
    element: <EmptyPage/>
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
