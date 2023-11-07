import '../styles/Layout.css';
import * as React from 'react';

import SideDrawer from './SideDrawer';
import AddProduct from './AddProduct';

export default function Layout(props){
   
    return (
        <div id="mainContainer">
               
                <SideDrawer body={props.body}>       
                </SideDrawer>
               
        </div> 
    );
}