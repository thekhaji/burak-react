import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import { HomePage } from ".";

const selectHomePage = (state: AppRootState) => state.homePage; 
//homePage daxldor  Storageni qolga olamiz, umumiy applicationimizni statini ichidagi homePageni qolga olamiz

export const retrievePopularDishes = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.popularDishes);
export const retrieveNewDishes = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.newDishes);
export const retrieveTopUsers = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.topUsers);