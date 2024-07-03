export default function ProductDetails ( {params, } : {
    params : { productsId : string };
} ){
    return <h1>Product details No. {params.productsId}</h1>
}