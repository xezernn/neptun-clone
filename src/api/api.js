import axios from "axios";
import configObj from "../config/config";

async function getAllProducts(cat, subCat) {

    let salam = await axios.get(`${configObj.base}/products?subcategory=${subCat}&category=${cat}&per_page=13&page=2`)
    .then(res => res.data )

    return salam
    
    
}
export default  getAllProducts
