import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../pages/Root';
import Home from "../pages/Home";
import Equipments from "../pages/Equipments";
import AddEquipments from "../pages/AddEquipments";
import MyEquipments from "../pages/MyEquipments";
import Profile from "../pages/Profile";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/equipments",
          element: <Equipments></Equipments>
        },
        {
          path: "/add-equipments",
          element: <AddEquipments></AddEquipments>
        },
        {
          path: "/my-equipments",
          element: <MyEquipments></MyEquipments>
        },
        {
          path: "/profile",
          element: <Profile></Profile>
        },

      ]
      
    }
    
  ]);

export default Router;