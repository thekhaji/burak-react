import React, { ChangeEvent, useEffect, useState } from "react";
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

import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts, setRestaurant, setChosenProduct } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
    });

const productsRetriever = createSelector(
        retrieveProducts,
        (products) => ({products})
      );
      
export default function Products(){

    const {setProducts} = actionDispatch(useDispatch());
    const {products} = useSelector(productsRetriever);
    const [productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
    });
    const [searchText, setSearchText] = useState<string>("") ;
    const history = useHistory();

    useEffect(()=>{
        const product = new ProductService();
        product.getProucts(productSearch)
        .then((data)=> setProducts(data))
        .catch((err)=> console.log(err));
        
    }, [productSearch]);

    useEffect(()=>{
        if (searchText === ""){
            productSearch.search = "";
            setProductSearch({ ...productSearch });
        }

    }, [searchText]);

    /** HANDLERS **/
    const searchCollectionHandler = (collection: ProductCollection) => {
        console.log(collection);
        productSearch.page = 1;
        productSearch.productCollection = collection;
        setProductSearch({ ...productSearch });
    };

    const searchOrderHandler = (order: string) => {
        console.log(order);
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });
    }

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    };

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({...productSearch});
    };

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    }


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
                                    type={"search"}
                                    placeholder=" Type here"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyDown={(e) => {
                                        
                                        if(e.key === "Enter"){
                                            e.preventDefault();
                                            searchProductHandler();
                                        } 
                                    }}
                                />
                                
                                <Chip icon={<SearchIcon />} color={"primary"} label="Search" sx={{width: "40%", height: "100%"}} onClick={searchProductHandler}/>
                                
                                
                            </Paper>
                        </Stack>
                    </Stack>
                    
                    <Stack className={"dishes-filter-section"}>
                        <Stack className={"dishes-filter-box"}>
                            <Button variant={"contained"} color={ productSearch.order === "createdAt" ? "primary" : "secondary"} className={"order"} onClick={() => searchOrderHandler("createdAt")}  >
                                New
                            </Button>
                            <Button variant={"contained"} color={ productSearch.order === "productPrice" ? "primary" : "secondary"} className={"order"} onClick={() => searchOrderHandler("productPrice")}>
                                Price
                            </Button>
                            <Button variant={"contained"} color={ productSearch.order === "productViews" ? "primary" : "secondary"} className={"order"} onClick={() => searchOrderHandler("productViews")}>
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"list-category-box"}>
                            <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.DISH ? "primary" : "secondary"} className={"order"} onClick={()=> searchCollectionHandler(ProductCollection.DISH)}>
                                DISH
                            </Button>
                            <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.SALAD ? "primary" : "secondary"} className={"order"} onClick={()=> searchCollectionHandler(ProductCollection.SALAD)}>
                                SALAD
                            </Button>
                            <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.DRINK ? "primary" : "secondary"} className={"order"} onClick={()=> searchCollectionHandler(ProductCollection.DRINK)}>
                                DRINK
                            </Button>
                            <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.DESERT ? "primary" : "secondary"} className={"order"} onClick={()=> searchCollectionHandler(ProductCollection.DESERT)}>
                                DESSERT
                            </Button>
                            <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.OTHER ? "primary" : "secondary"} className={"order"} onClick={()=> searchCollectionHandler(ProductCollection.OTHER)}>
                                OTHER
                            </Button>
                        </Stack>
                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product: Product)=>{
                                    const imagePath = `${serverApi}/${product.productImages[0]}`
                                    const sizeVolume = 
                                        product.productCollection === ProductCollection.DRINK 
                                            ? product.productVolume + " litre" 
                                            : product.productSize + " size";
                                    return (
                                        <Stack key={product._id} className={"product-card"} onClick={()=>chooseDishHandler(product._id)}>
                                            <Stack className={"product-img"} sx={{backgroundImage: `url(${imagePath})` }}>
                                                <div className={"product-sale"}>{sizeVolume}</div>
                                                <Button className={"shop-btn"}>
                                                    <img src={"/icons/shopping-cart.svg"} ></img>
                                                </Button>
                                                <Button className={"view-btn"} sx={{}}>
                                                    <Badge badgeContent={product.productViews} color="secondary">
                                                        <RemoveRedEyeIcon sx={{color: 
                                                            product.productViews === 0 ? "grey" : "white"}}/>
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>{product.productName}</span>
                                                <div className={"product-price"}><MonetizationOnIcon sx={{fontSize:"15px"}}/> {product.productPrice}</div>
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
                        <Pagination count={products.length !==0 ? productSearch.page + 1 : productSearch.page} page={productSearch.page} renderItem={(item)=>(
                            <PaginationItem components={{previous: ArrowBackIcon, next: ArrowForwardIcon}} {...item}
                            color={"secondary"}/>
                        )
                        } onChange={paginationHandler}/>
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