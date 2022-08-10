

function ProductRow(props) {
    const {eachProduct} = props

    const isInStock = () => {
        if(eachProduct.inStock===true){
            return (
                <p style={{color:"black"}}>{eachProduct.name}</p>)
        }else{
            return (
                <p style={{color:"red"}}>{eachProduct.name}</p>)
        }
    }

  return (
    <div>
    <td>

        {isInStock()}
        </td>
        <td>{eachProduct.price}
    
    </td>
    </div>
  )
}

export default ProductRow