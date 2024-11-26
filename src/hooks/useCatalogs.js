import { useContext } from "react";
import CatalogsContext from "../context/CatalogsProvider";

const useCatalogs = () => useContext(CatalogsContext);

export default useCatalogs;
