import React from "react";
import '../styles/Products.css'
import avatar from '../assets/product.jpg';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import almonds from '../assets/productimages/almonds.jpg';
import alovera from '../assets/productimages/aloeveragel.jpg'
import books from '../assets/productimages/book.jpg'
import bread from '../assets/productimages/bread.jpg'
import coffee from '../assets/productimages/coffee.jpg'
import cracker from '../assets/productimages/cracker.jpg'
import cream from '../assets/productimages/cream.jpg'
import dishwash from '../assets/productimages/Diashwash.jpg'
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
                <img src={props.brand.img} className="profile_img" alt="product" />
                { props.brand.name } <br/>
                { props.brand.model } <br/>
                <span style={{color: "#a19e95", marginBottom: ""}}>remaining: { props.quantity }</span>
                
            </div>
    );
  }

export default function Products(){
    const itemInfoArray = [
        { img:dishwash, name: "Dishwash Liquid", model: "350Rs" ,quantity: "5"},
        { img:shampoo, name: "Shampoo", model: "200Rs" ,quantity: "5"},
        { img:toothpaste, name: "Toothpaste", model: "180Rs" ,quantity: "5"},
        { img:bread, name: "Bread", model: "100Rs" ,quantity: "5"},
        { img:noodles, name: "Instant Noodle", model: "120Rs" ,quantity: "5"},
        { img:soap, name: "Soap", model: "170Rs" ,quantity: "5"},
        { img:coffee, name: "Instant Coffee", model: "360Rs" ,quantity: "5"},
        { img:milk, name: "Milk Powder", model: "440Rs" ,quantity: "5"},
        { img:cracker, name: "Cracker Biscuit", model: "250Rs",quantity: "5"},
        { img:chips, name: "Potato Chips", model: "460Rs" ,quantity: "5"},
        { img: almonds, name: "Salted Almonds", model: "300Rs", quantity: "5" },
        { img:books, name: "A5 Spiral Book", model: "300Rs" ,quantity: "5"},
        { img:glue, name: "Glue Stick", model: "130Rs" ,quantity: "5"},
        { img:duct, name: "Duct Tape", model: "600Rs" ,quantity: "5"},
        { img:cream, name: "Multivitamin Cream", model: "50Rs" ,quantity: "5"},
        { img:alovera, name: "Aloe Vera Gel", model: "100Rs" ,quantity: "5"},
    ];
    return(
    <div className=" body">


{/* widgets */}
        <div className="Products">
            <div className="widgetsall"></div>
                {itemInfoArray.map((itemInfo,index)=>(
                    <div className="widget">
                        <Item key={index} brand={itemInfo} quantity={itemInfo.quantity} />
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