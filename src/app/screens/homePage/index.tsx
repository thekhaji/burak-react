import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
})

export function HomePage() {
  const {setPopularDishes} = actionDispatch(useDispatch());
  //Selector: Store => Data


  useEffect(()=>{
    //Backend server data reuest => Data
    
    const result = [
      {
          "_id": "66988c075db138a245de422f",
          "productStatus": "PROCESS",
          "productCollection": "DRINK",
          "productName": "Tea",
          "productPrice": 3,
          "productLeftCount": 22,
          "productSize": "NORMAL",
          "productVolume": 1.5,
          "productDesc": "Tea delicious",
          "productImages": [
              "uploads/products/4853497c-8465-45d6-96d8-e0f676ab9d02.jfif"
          ],
          "productViews": 0,
          "createdAt": "2024-07-18T03:29:11.393Z",
          "updatedAt": "2024-07-18T03:29:11.393Z",
          "__v": 0
      },
      {
          "_id": "668e6bb4f7c68b8202fea87a",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "Osh",
          "productPrice": 12,
          "productLeftCount": 49,
          "productSize": "NORMAL",
          "productVolume": 1,
          "productDesc": "This is Uzbek Traditional Osh!",
          "productImages": [
              "uploads/products/b6ae1bbb-f13b-42e0-a694-91114703ecb4.jfif"
          ],
          "productViews": 0,
          "createdAt": "2024-07-10T11:08:36.714Z",
          "updatedAt": "2024-07-10T11:10:17.186Z",
          "__v": 0
      },
      {
          "_id": "6683f9adfae37d064a3faa13",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "shashlik",
          "productPrice": 12,
          "productLeftCount": 12,
          "productSize": "NORMAL",
          "productVolume": 1,
          "productDesc": "eng zori!",
          "productImages": [
              "uploads/products/6b37f6f3-1798-47db-bd41-893dba1fdfaa.png"
          ],
          "productViews": 0,
          "createdAt": "2024-07-02T12:59:25.203Z",
          "updatedAt": "2024-07-02T12:59:25.203Z",
          "__v": 0
      },
  ]

  //slice: Data => Store
  //@ts-ignore
  setPopularDishes(result);

  },[]);

  return <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }