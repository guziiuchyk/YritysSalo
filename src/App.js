import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/home/home";
import Form1 from "./components/pages/forms/form1/form1";
import Form2 from "./components/pages/forms/form2/form2";
import Form3 from "./components/pages/forms/form3/form3";
import Form4 from "./components/pages/forms/form4/form4";
import Form5 from "./components/pages/forms/form5/form5";
import Form6 from "./components/pages/forms/form6/form6";
import Result from "./components/pages/forms/result/result";
import {Provider} from "react-redux";
import store from './components/redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/forms/1",
    element: <Form1/>,
  },
  {
    path: "/forms/2",
    element: <Form2/>,
  },
  {
    path: "/forms/3",
    element: <Form3/>,
  },
  {
    path: "/forms/4",
    element: <Form4/>,
  },
  {
    path: "/forms/5",
    element: <Form5/>,
  },
  {
    path: "/forms/6",
    element: <Form6/>,
  },
  {
    path: "/forms/result",
    element: <Result/>,
  },
]);

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
