import product from "./product";

const Image = () => {
    return <img src={product.Image} alt={product.name} width={400}></img>
}

export default Image