import React from 'react';
import {formatPrice} from '../../untils/index';
import { message} from 'antd';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction';

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
          });
      };

    const  AddProductToCart = async (product) => {
        const action = AddToCart(product);
        await dispatch(action);
        success()
    }

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </a>
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            <div className="buy">
                <a onClick={() => AddProductToCart(product)}> Thêm vào giỏ hàng</a>
            </div>
        </div>
    );
}

export default Product;