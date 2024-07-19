import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box, Input } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";




export function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue) ;
  }
    return (
      <div className={"order-page"}>
        <Container className={"order-container"}>
          <Stack className="order-left">
            <TabContext value={value}>
              <Box  className={"order-nav-frame"}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" className={"table-list"}>
                  <Tab label="PAUSED ORDERS" value="1" />
                  <Tab label="PROCESS ORDERS" value="2" />
                  <Tab label="FINISHED ORDERS" value="3" />
                </TabList>
              </Box>
              <Stack className={"order-main-content"}>
                <TabPanel value="1"><PausedOrders/></TabPanel>
                <TabPanel value="2"><ProcessOrders/></TabPanel>
                <TabPanel value="3"><FinishedOrders/></TabPanel>
              </Stack>
            </TabContext>
          </Stack>

          <Stack className={"order-right"}>
            <Box className={"order-info-box"}>
              <Box className={"member-box"}>
                <div className={"order-user-img"}>
                  <img src={"/icons/default-user.svg"} className={"order-user-avatar"}/>
                  <div className={"order-user-icon-box"}>
                    <img src={"/icons/user-badge.svg"} className={"order-user-prof-img"}/>
                  </div>
                </div>
                <span className={"order-user-name"}>Andrew</span>
                <span className={"order-user-prof"}>User</span>
              </Box>
              <Box className={"liner"}></Box>
              <Box className={"order-user-address"}>
                <LocationOnIcon/>
                <span className={"spec-address-txt"}>South Korea, Seoul</span>
              </Box>
            </Box>
            <Box className={"order-info-box"}>
              <Input className={"card-input"} placeholder="Card number: 7777 7777 7777 7777"/>
              <Box sx={{display: "flex", flexDirection: "row", gap:"1%"}}>
                <Input className={"card-half-input"} placeholder="07/07"/>
                <Input className={"card-half-input"} placeholder="CVV:007"/>
              </Box>
              <Input className={"card-input"} placeholder="Andrew MIT"/>
              <div className={"cards-box"}>
                <img src="/icons/western-card.svg" alt="" />
                <img src="/icons/master-card.svg" alt="" />
                <img src="/icons/paypal-card.svg" alt="" />
                <img src="/icons/visa-card.svg" alt="" />
              </div>
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }