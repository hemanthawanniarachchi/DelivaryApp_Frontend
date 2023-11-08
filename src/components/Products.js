import React from "react";
import '../styles/Products.css'
import avatar from '../assets/product.jpg';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Item(props) {
    return (
         <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={avatar} className="profile_img" alt="avatar" />
                { props.brand.name } <br/>
                { props.brand.model } <br/>
                <span style={{color: "#a19e95", marginBottom: ""}}>remaining: { props.quantity }</span>
                
            </div>
    );
  }

export default function Products(){
    const itemInfoArray = [
        { img:"#", name: "Dishwash Liquid", model: "350Rs" ,quantity: "5"},
        { img:"#", name: "Shampoo", model: "200Rs" ,quantity: "5"},
        { img:"#", name: "Toothpaste", model: "50Rs" ,quantity: "5"},
        { img:"#", name: "Bread", model: "100Rs" ,quantity: "5"},
        { img:"#", name: "Dishwash Liquid", model: "350Rs" ,quantity: "5"},
        { img:"#", name: "Shampoo", model: "200Rs" ,quantity: "5"},
        { img:"#", name: "Toothpaste", model: "50Rs" ,quantity: "5"},
        { img:"#", name: "Bread", model: "100Rs" ,quantity: "5"},
        { img:"#", name: "Dishwash Liquid", model: "350Rs",quantity: "5"},
        { img:"#", name: "Shampoo", model: "200Rs" ,quantity: "5"},
        { img:"#", name: "Toothpaste", model: "50Rs" ,quantity: "5"},
        { img:"#", name: "Bread", model: "100Rs" ,quantity: "5"},
        { img:"#", name: "Dishwash Liquid", model: "350Rs" ,quantity: "5"},
        { img:"#", name: "Shampoo", model: "200Rs" ,quantity: "5"},
        { img:"#", name: "Toothpaste", model: "50Rs" ,quantity: "5"},
        { img:"#", name: "Bread", model: "100Rs" ,quantity: "5"},
    ];
    return(
    <div className=" body">


{/* widgets */}
        <div className="Products">
            <div className="widgetsall"></div>
                {itemInfoArray.map((itemInfo,index)=>(
                    <div className="widget">
                        <Item key={ index } brand={itemInfo} quantity={itemInfo.quantity}/>
                        <IconButton  style={{margin: "10px"}} color="primary" aria-label="remove from shopping cart" onClick={()=>{
                                //let temp = itemList;
                                //setItemList(temp.splice(index, 1));
                                //removeFromCart(itemInfo.customerid, itemInfo.productid);
                            }}>
                                <AddShoppingCartIcon className="addtoCartBtn"/>
                            </IconButton>
                    </div>
                ))}
        </div>
    </div>
    )
}