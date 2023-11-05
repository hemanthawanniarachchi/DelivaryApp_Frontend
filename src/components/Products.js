import React from "react";
import '../styles/Products.css'

function Item(props) {
    return (
        <p>
            { props.brand.img } <br/>
            { props.brand.name } <br/>
            { props.brand.model }</p>
    );
  }

export default function Products(){
    const itemInfoArray = [
        { img:"#", name: "Dishwash Liquid", model: "350Rs" },
        { img:"#", name: "Shampoo", model: "200Rs" },
        { img:"#", name: "Toothpaste", model: "50Rs" },
        { img:"#", name: "Bread", model: "100Rs" },
    ];
    return(
    <div className=" body">
{/* topbar */}
        <div class="topbar">
                <a class="tab" href="#tab1">Home</a>
                <a class="tab" href="#tab2">Login</a>
            </div>

{/* widgets */}
        <div className="Products">
            <div className="widgetsall"></div>
                {itemInfoArray.map((itemInfo,index)=>(
                    <div className="widget">
                        <Item key={ index } brand={itemInfo} />
                        <button className="addtocart">
                            <span class="glyphicon glyphicon-shopping-cart"></span>
                            Add to Cart</button>
                    </div>
                ))}
        </div>
    </div>
    )
}