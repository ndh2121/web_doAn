import React, { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { deleteTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";

export default function AllTypeProduct() {
  const dispatch = useDispatch();
  const { List } = useSelector((state) => state.allTypeProduct);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleRemoveItem = async (item) => {
    await dispatch(deleteTypeProduct(item))
    dispatch(getAllTypeProduct())
  }

  const MenuFirmProduct = (firmItem,i) => (
    <div key={i} className="filter-menu-firm-item">
      <img src={firmItem.img}></img>
      <div className="filter-menu-firm-item-delete" onClick={() => handleRemoveItem(firmItem)}>
        <span>
          <CloseOutlined></CloseOutlined>
        </span>
      </div>
    </div>
  );


  return (
    <div>
      <div className="filter-menu-firm">
        {List ? List.map((item,i) => MenuFirmProduct(item,i)) : ""}
      </div>
    </div>
  );
}
