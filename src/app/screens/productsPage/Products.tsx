import React from "react";
import {Box, Button, Chip, Container, Icon, InputBase, PaginationItem, Paper, Stack, ThemeProvider} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import  MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../MaterialTheme";
import { url } from "inspector";


const products = [
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
]


export default function ChosenProduct(){
    return (
        <div className={"products"}>
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"avatar-big-box"}>
                        <Box className={"title"}>Burak Restaurant</Box>
                        <Stack className={"avatar-input"}>
                            {/* <input placeholder={"Type here"}></input>
                            <ThemeProvider theme={theme} >
                                
                                <Chip icon={<SearchIcon />} color={"primary"} label="Search" />
                            </ThemeProvider> */}
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, borderRadius: 18 }}
                                >
                                <InputBase
   
                                    placeholder=" Type here"
                                />
                                
                                <Chip icon={<SearchIcon />} color={"primary"} label="Search" sx={{width: "40%", height: "100%"}}/>
                                
                                
                            </Paper>
                        </Stack>
                    </Stack>
                    
                    <Stack className={"dishes-filter-section"}>
                        <Stack className={"dishes-filter-box"}>
                            <Button variant={"contained"} color={"primary"} className={"order"}>
                                New
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                Price
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"list-category-box"}>
                            <Button variant={"contained"} color={"primary"} className={"order"}>
                                DISH
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                SALAD
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                DRINK
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                DESSERT
                            </Button>
                            <Button variant={"contained"} color={"secondary"} className={"order"}>
                                OTHER
                            </Button>
                        </Stack>
                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product, index)=>{
                                    return (
                                        <Stack key={index} className={"product-card"}>
                                            <Stack className={"product-img"} sx={{backgroundImage: `url(${product.imagePath})` }}>
                                                <div className={"product-sale"}>NORMAL size</div>
                                                <Button className={"shop-btn"}>
                                                    <img src={"/icons/shopping-cart.svg"} ></img>
                                                </Button>
                                                <Button className={"view-btn"} sx={{}}>
                                                    <Badge badgeContent={20} color="secondary">
                                                        <RemoveRedEyeIcon sx={{color: 20 ? "white" : "grey"}}/>
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>{product.productName}</span>
                                                <div className={"product-price"}><MonetizationOnIcon sx={{fontSize:"15px"}}/> {12}</div>
                                            </Box>
                                        </Stack>
                                    )
                                })
                            ) : (
                                <Box className={"no-data"}>Products are not available!</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className={"pagination-section"}>
                        <Pagination count={3} page={1} renderItem={(item)=>(
                            <PaginationItem components={{previous: ArrowBackIcon, next: ArrowForwardIcon}} {...item}
                            color={"secondary"}/>
                        )
                        }/>
                    </Stack>
                </Stack>
            </Container>
            <div className={"brands-logo"}>
                <Container className={"logo-container"}>
                    <Box className={"logo-title"}>Our Family Brands</Box>
                    <Stack className={"logo-card"}>
                        <Stack className={"logo-img"} sx={{backgroundImage: `url("/img/gurme.webp")`}}></Stack>
                        <Stack className={"logo-img"} sx={{backgroundImage: `url("/img/seafood.webp")`}}></Stack>
                        <Stack className={"logo-img"} sx={{backgroundImage: `url("/img/sweets.webp")`}}></Stack>
                        <Stack className={"logo-img"} sx={{backgroundImage: `url("/img/doner.webp")`}}></Stack>
                    </Stack>
                </Container>
            </div>
            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our address</Box>
                        <iframe
                            style={{marginTop:"60px"}}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d34668.21984811921!2d28.955733118674868!3d41.03726870694996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab716d26c9505%3A0xaeb6cf03050318fe!2sCznBurak%20Restaurant!5e0!3m2!1sru!2skr!4v1721261641079!5m2!1sru!2skr"
                            width="1320"
                            height="580"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}