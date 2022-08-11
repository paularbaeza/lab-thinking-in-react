
import { useState } from 'react';
import itemsList from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(itemsList);
  const [productsDisplayed, setProductsDisplayed] = useState(itemsList)


const filterSearch =(searchValue)=>{
let searchResults = products.filter((eachProduct)=> {
return eachProduct.name.includes (searchValue)
})
setProductsDisplayed(searchResults)
}

  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterSearch={filterSearch}/>
        <ProductTable products={productsDisplayed}/>
      </div>    
  )
}


export default ProductsPage