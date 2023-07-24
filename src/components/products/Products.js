import React from 'react'
import './Products.css'
import TitleTemplate from '../titleTemplate/TitleTemplate'
import Product from './product/product'
import portfolio1 from '../../assets/img/portfolio-1.jpg'
import portfolio2 from '../../assets/img/portfolio-2.jpg'
import portfolio3 from '../../assets/img/portfolio-3.jpg'
import portfolio4 from '../../assets/img/portfolio-4.jpg'
import portfolio5 from '../../assets/img/portfolio-5.jpg'
import portfolio6 from '../../assets/img/portfolio-6.jpg'
import portfolio7 from '../../assets/img/portfolio-7.jpg'
import portfolio8 from '../../assets/img/portfolio-8.jpg'
import portfolio9 from '../../assets/img/portfolio-9.jpg'

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
          <Product title="برنامه ۱" text="برنامه" src={portfolio1}/>
          <Product title="اینتزنت ۲" text="اینترنت" src={portfolio2}/>
          <Product title="برنامه ۳" text="برنامه" src={portfolio3}/>
          <Product title="برنامه ۴" text="برنامه" src={portfolio4}/>
          <Product title="محصول ۵" text="محصول" src={portfolio5}/>
          <Product title="برنامه ۶" text="برنامه" src={portfolio6}/>
          <Product title="محصول ۷" text="محصول" src={portfolio7}/>
          <Product title="اینترنت ۸" text="اینترنت" src={portfolio8}/>
          <Product title="برنامه ۹" text="برنامه" src={portfolio9}/>
        </div>
    </div>
  )
}
