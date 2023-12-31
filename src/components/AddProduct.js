import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/ProductIcon.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import { addProduct } from '../helper/helper';
import * as Yup from 'yup';


import styles from '../styles/Username.module.css';

export default function AddProduct() {

  const navigate = useNavigate()
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      PName: null,
      Price: null
      
    },
    validationSchema: Yup.object({
        PName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        Price: Yup.string()
          .required('Required'),
      }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values)
      let registerPromise = addProduct(values)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success : <b>Updated Successfully...!</b>,
        error : <b>Could not Add Product.</b>
      });

      registerPromise.then(function(){ navigate('/')});
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto" >

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="container" style={{ width: "100vw"}}>
      
      <div className='flex justify-center items-center h-screen' style={{ margin: "auto"}}>
        <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Add Product</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <label htmlFor="profile">
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                  </label>
                  
                  <input onChange={onUpload} type="file" id='profile' name='profile' />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('PName')} className={styles.textbox} type="text" id="PName" placeholder='Product Name*' />
                  <select {...formik.getFieldProps('category')} className={styles.textbox}>
                  <option value="" label="Product Category" />
                  <option value="Vegetables" label="Vegetables" />
                  <option value="Fruits" label="Fruits" />
                  <option value="Meat" label="Meat" />
                  <option value="Beverages" label="Beverages" />
                  <option value="Frozen food" label="Frozen food" />
                  <option value="Grocery" label="Grocery" />
                  <option value="Homeware" label="Homeware" />
                  <option value="Household" label="Household" />

                  </select>
                  <input {...formik.getFieldProps('Price')} className={styles.textbox} type="number" id="Price" placeholder='Price*' />
                  <input {...formik.getFieldProps('Unit')} className={styles.textbox} type="number" id="Unit" placeholder='Unit*' />
                  <button className={styles.btn} type='submit'>Add Item</button>
              </div>

             

          </form>

        </div>
      </div>

      </div>
    </div>
  )
}

