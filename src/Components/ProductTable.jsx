import ProductRow from './ProductRow';

function ProductTable(props) {
  console.log(props);
  const { products } = props;

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {products.map((eachProduct, index) => {
                return (
                  <ProductRow
                    eachProduct={eachProduct}
                    key={eachProduct + index}
                  />
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
