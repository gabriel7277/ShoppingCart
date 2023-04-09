import { useContext } from "react";
import ProductContext from "../context/ProductsProvider";
import ProductsContext, { UseProductsContextType } from "../context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts