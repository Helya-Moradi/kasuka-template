import React from 'react'
import './Products.css'
import TitleTemplate from '../titleTemplate/TitleTemplate'
import Product from './product/product'

export default function Products() {
  return (
    <div className='productcontainer'>
        <TitleTemplate type='نمونه کارها' title="نمونه کارها ما را بررسی کنید"/>
        <ul className="productCategory">
          <li className="categoryItem active">همه</li>
          <li className="categoryItem">برنامه</li>
          <li className="categoryItem">محصول</li>
          <li className="categoryItem">اینترنت</li>
        </ul>
        <div className="products">
          <Product title="برنامه ۱" text="برنامه" src="./img/portfolio-1.jpg"/>
          <Product title="اینتزنت ۲" text="اینترنت" src="./img/portfolio-2.jpg"/>
          <Product title="برنامه ۳" text="برنامه" src="./img/portfolio-3.jpg"/>
          <Product title="برنامه ۴" text="برنامه" src="./img/portfolio-4.jpg"/>
          <Product title="محصول ۵" text="محصول" src="./img/portfolio-5.jpg"/>
          <Product title="برنامه ۶" text="برنامه" src="./img/portfolio-6.jpg"/>
          <Product title="محصول ۷" text="محصول" src="./img/portfolio-7.jpg"/>
          <Product title="اینترنت ۸" text="اینترنت" src="./img/portfolio-8.jpg"/>
          <Product title="برنامه ۹" text="برنامه" src="./img/portfolio-9.jpg"/>
        </div>
    </div>
  )
}
