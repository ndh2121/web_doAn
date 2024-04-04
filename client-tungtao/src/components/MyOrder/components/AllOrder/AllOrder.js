import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../../../../actions/OrderAction";
import { formatPrice } from "../../../../untils/index";
import "./AllOrder.css";

const orderItem = (item) => (
    <div className="all-myorder-item">
        <div className="all-myorder-item-img">
            <img src={item.image}></img>
        </div>
        <div className="all-myorder-item-name">
            <p>{item.name}</p>
            <span>x{item.qty}</span>
        </div>
        <div className="all-myorder-item-price">
            {formatPrice(item.salePrice)}
        </div>
    </div>
);

export const orderParent = (item) => (
    <div className="all-myorder-parent-item">
        <div className="all-myorder-list">
            {item.orderItems.map((item) => orderItem(item))}
        </div>
        <div className="all-myorder-item-totalprice">
            <div>
                <span>Tổng số tiền : </span>{" "}
                <strong>{formatPrice(item.totalPrice)}đ</strong>
            </div>
        </div>
    </div>
);

function AllOrder(props) {
    const dispatch = useDispatch();
    const { myOrders } = useSelector((state) => {
        console.log(state);
        return state.orderByUser;
    });

    console.log("allorder", myOrders);

    const { userInfo } = useSelector((state) => state.userSignin);
    useEffect(() => {
        dispatch(getOrderByUser(userInfo._id));
    }, []);
    // const orderByUser = myOrders?.filter(myOrders => myOrders.user === userInfo._id)
    return (
        <div className="all-myorder">
            {myOrders && myOrders.length > 0 ? (
                myOrders.map((item) => orderParent(item))
            ) : (
                <div className="order-empty">
                    Bạn không có đơn hàng nào
                    <script
                        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                        type="module"
                    ></script>
                    <dotlottie-player
                        src="https://lottie.host/a314e79c-1e9d-4d5f-8a7f-6128423a8372/L3GmeGn6R9.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "400px", height: "400px" }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            )}
        </div>
    );
}

export default AllOrder;
