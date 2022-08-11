function ProductRow(props) {
  const { eachProduct } = props;

  const isInStock = () => {
    if (eachProduct.inStock === true) {
      return <p style={{ color: 'black' }}>{eachProduct.name}</p>;
    } else {
      return <p style={{ color: 'red' }}>{eachProduct.name}</p>;
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>{isInStock()}</td>
          <td>{eachProduct.price}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductRow;
