import React from "react";
// import '../styles/Products.css'
import '../styles/Cart.css'
import { useState,useEffect } from "react";
import { getCartItems,removeFromCart } from '../helper/helper';
import avatar from '../assets/product.jpg';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import duct from '../assets/productimages/ducttape.jpg'
import glue from '../assets/productimages/glue.jpg'
import milk from '../assets/productimages/milk.jpg'
import noodles from '../assets/productimages/noodles.jpg'
import chips from '../assets/productimages/potato.jpg'
import shampoo from '../assets/productimages/shampoo.jpg'
import soap from '../assets/productimages/soap.jpg'
import toothpaste from '../assets/productimages/toothpaste.jpg'

function Item(props) {
    return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={props.id.img} className="profile_img" alt="avatar" />
                { props.productName } <br/>
                <span style={{color: "#a19e95", marginBottom: "10px"}}>remaining: { props.quantity }</span>
            
            </div>
    );
  }

export default function Cart(props){
    
    let totalProductCost = 3400;
    let shippingCost= 340;
    let tax = 124.53;

    const itemInfoArray = [
        { img:duct, productName: "Dishwash Liquid", model: "350Rs", id: "test1", quantity: "5"},
        { img:"#", productName: "Shampoo", model: "200Rs", id: "test2",quantity: "5"},
        { img:"#", productName: "Dishwash Liquid", model: "350Rs", id: "test3" ,quantity: "5"},
        { img:"#", productName: "Shampoo", model: "200Rs", id: "test4" ,quantity: "5"},
        { img:"#", productName: "Dishwash Liquid", model: "350Rs", id: "test5" ,quantity: "5"},
        { img:"#", productName: "Shampoo", model: "200Rs", id: "test6" ,quantity: "5"},
        { img:"#", productName: "Dishwash Liquid", model: "350Rs", id: "test7" ,quantity: "5"},

    ];
    const [itemList, setItemList] = useState(itemInfoArray)
    useEffect(() => {
        console.log(props.customerId)
        // Fetch the cart items and set the itemList state when the data is available
        getCartItems(props.customerId).then((data) => {
          setItemList(data.data);
          console.log(data.data)
        });
      }, [props.customerId]);
    
    
    return(
    <div className=" body">
{/* widgets */}
    <div className="Products">
        <div className="widgetsall"></div>
                {itemList.map((itemInfo,index)=>(
                    <div className="widget">
                        <Item id={ itemInfo.id } key={ index } productName={itemInfo.productName} quantity={itemInfo.quantity} />
                        {/* <button className="removeFromCart" onClick={()=>{
                            let temp = itemList;
                            setItemList(temp.splice(index, 1));
                            removeFromCart(itemInfo.customerid, itemInfo.productid);
                        }}> */}
                        
                            {/* <span className="glyphicon glyphicon-shopping-cart"></span>
                            Remove From Cart</button> */}
                            <IconButton color="secondary" aria-label="remove from shopping cart" onClick={()=>{
                                let temp = itemList;
                                setItemList(temp.splice(index, 1));
                                removeFromCart(itemInfo.customerid, itemInfo.productid);
                            }}>
                                <RemoveShoppingCartIcon className="remFromCartBtn"/>
                            </IconButton>
                    </div>
                ))}
        </div>
        <div className="checkoutContainer">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%"}}>
                        <div><span style={{ marginLeft: "10px"}}>Product Total: </span></div>
                        <div><span>Rs. {totalProductCost}</span></div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%", fontSize: "medium"}}>
                        <div><span style={{ marginLeft: "10px"}}>Shipping: </span></div>
                        <div><span>Rs. {shippingCost}</span></div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%", fontSize: "medium"}}>
                        <div><span style={{ marginLeft: "10px"}}>Tax: </span></div>
                        <div><span>Rs. {tax}</span></div>
                    </div>
                    <Divider style={{width: "100%", margin: "10px"}}/>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%", marginBottom: "20px"}}>
                        <div><span style={{ marginLeft: "10px"}}>Total: </span></div>
                        <div><span>Rs. {totalProductCost+shippingCost+tax}</span></div>
                    </div>       
                    <div></div>

        </div>
    </div>
    )
}