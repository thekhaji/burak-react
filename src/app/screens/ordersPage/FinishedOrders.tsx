import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";

export default function FinishedOrders(){
    return (<Stack>
        {[].map((ele,index) => {
            return(
                <Box key={index} className={"order-main-box"}>
                    <Box className={"order-box-scroll"}>
                        {[1,2,3].map((el,ind)=>{
                            return (
                                <Box key={ind} className={"orders-name-price"}>
                                    <img src={"/img/lavash.webp"} className={"order-dish-img"} />
                                    <p className={"title-dish"}>Lavash</p>
                                    <Box className={"price-box"}>
                                        <p>$9</p>
                                        <img src={"/icons/close.svg"} alt="" />
                                        <p>2</p>
                                        <img src={"/icons/pause.svg"} alt="" />
                                        <p style={{marginLeft: "15px"}}>$24</p>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                    <Box className={"total-price-box"}>
                        <Box className={"box-total"}>
                            <p>Product price</p>
                            <p>$18</p>
                            <img src={"/icons/plus.svg"} style={{marginLeft:"20px"}} alt="" />
                            <p>Delivery Cost</p>
                            <p>$2</p>
                            <img src={"/icons/pause.svg"} alt="" style={{marginLeft:"20px"}} />
                            <p>Total</p>
                            <p>$20</p>
                        </Box>

                    </Box>
                </Box>
            );
        })}
        
        {true && (
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                <img src={"/icons/noimage-list.svg"} style={{width: 300, height:300}} />
            </Box>
        )}

    </Stack>);
}