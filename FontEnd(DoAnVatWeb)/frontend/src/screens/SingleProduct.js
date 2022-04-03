import React, { useEffect,useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import {useDispatch, useSelector} from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";

const SingleProduct = ({ history, match }) => {
  const [qty,setQty] = useState(1);
  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const {loading,error,product} = productDetails;
  useEffect(()=>{
    dispatch(listProductDetails(productId));
  },[dispatch,productId]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  }
  return (
    <>
      <Header />
      <div className="container single-product">
        {
          loading ? (
            <Loading/>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
                    <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Giá tiền :</h6>
                  <span>{product.price}đ</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Thể loại:</h6>
                  <span>{product.type}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>unavailable</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Đánh giá :</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} đánh giá`}
                  />
                </div>
                {product.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Số lượng</h6>
                      <select 
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button onClick={AddToCartHandle} className="round-black-btn">Add To Cart</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">NHẬN XÉT SẢN PHẨM</h6>
            <Message variant={"alert-info mt-3"}>không nhận xét</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Nhóm 11 </strong>
              <Rating />
              <span>March 12 2022</span>
              <div className="alert alert-info mt-3">
                sản phẩm ok
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>KHÁCH HÀNG ĐÁNH GIÁ SẢN PHẨM</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>đánh giá</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Bình luận</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={"alert-warning"}>
                Please{" "}
                <Link to="/login">
                  " <strong>Login</strong> "
                </Link>{" "}
                Đăng nhập để đánh giá sản phẩm{" "}
              </Message>
            </div>
          </div>
        </div>
            </>
          )
        }


      </div>
    </>
  );
};

export default SingleProduct;
