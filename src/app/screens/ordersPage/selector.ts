import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import { OrdersPage } from ".";


const selectOrdersPage = (state: AppRootState) => state.ordersPage; 
//ordersPage daxldor  Storageni qolga olamiz, 
//umumiy applicationimizni statini ichidagi ordersPageni qolga olamiz

export const retrievePausedOrders = createSelector(
    selectOrdersPage, 
    (OrdersPage)=> OrdersPage.pausedOrders);

export const retrieveProcessOrders = createSelector(
    selectOrdersPage, 
    (OrdersPage)=> OrdersPage.processOrders);

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage, 
    (OrdersPage)=> OrdersPage.finishedOrders);