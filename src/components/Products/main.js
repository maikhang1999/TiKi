import React,{useEffect,useState} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import {
  showProducts,
  showMoreProducts,
} from '../../Actions/index';
const useStyles = makeStyles((theme) => ({
  InfiniteScroll: {
    display: "flex",
    flexDirection: "colunm",
    alignItems: "center",
    backgroudCorlor: "white",
    padding: "0 0 16px",
    marginBottom: "24px",
    borderRadius: "0 0 4px 4px",
    position:'relative'
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "stretch",
    backgroudCorlor: "#ffffff",
    borderTop: "1px solid #f2f2f2"
  },
  btn:{
    cursor:'pointer',
    display:'inline-block',
    width:'240px',
    padding:'8px 12px',
    borderRadius:'4px',
    border:'1px solid #0d5cb6',
    color:'#0d5cb6',
    fontSize:'13px',
    textAlign:'center',
    position:'absolute',
    bottom:'-50px',
    left:'40%',
    marginTop:'10px',
  }
}));
function Main({showProducts,products,showMoreProducts}) {
  const classes = useStyles();
  const [page,setPage] = useState(2);
  useEffect(() => {
    showProducts();
  },[]);
 
  const handleShowMoreProduct = (page) =>{
    
    (async ()=>{
      showMoreProducts(page);
    })();
    setPage(page+1);
  }
  return (
    <div className={classes.InfiniteScroll}>
      <div className={classes.content}>
        {products.map((product, index) => (
          <ProductItem product={product} />
        ))}
      </div>
      <a className={classes.btn} onClick={()=>handleShowMoreProduct(page)}>Xem Them</a>
    </div>
  );
}
const mapStateToProps = (state) => {
 
  return {
    products: state.products.ProductList
  };
};
export default connect(mapStateToProps, {showProducts,showMoreProducts})(Main);