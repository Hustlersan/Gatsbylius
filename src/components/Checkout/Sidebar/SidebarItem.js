import React from "react";
import PropTypes from "prop-types";

import { priceParser } from "../../../helpers/cartHelper";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import {
  incrementQty,
  decrementQty,
  removeItemFromCart,
} from "../../../services/cart";
import { Item } from "./styled";

const SidebarItem = ({ item, storeState, storeDispatch, isCartPage }) => {
  return (
    <Item key={item.id}>
      <img src={item.product.images[0].cachedPath} />
      <div className="item-datas">
        <div className="item-name-delete">
          <span>{item.product.name}</span>
          {isCartPage && (
            <FaTimesCircle
              onClick={() =>
                removeItemFromCart(item.id, storeState, storeDispatch)
              }
              className="item-delete-icon"
              fontSize="1.2rem"
            />
          )}
        </div>
        <div className="item-price-qty">
          <span className="item-price">
            {priceParser(item.total, storeState.currency)}
          </span>
          {isCartPage ? (
            <div className="item-qty">
              <span>Qty</span>
              <div className="item-dec-inc">
                <span
                  className="icon"
                  onClick={() =>
                    decrementQty(item.id, storeState, storeDispatch)
                  }
                >
                  <FaChevronLeft fontSize="1.3rem" />
                </span>
                <span>{item.quantity}</span>
                <span
                  className="icon"
                  onClick={() =>
                    incrementQty(item.id, storeState, storeDispatch)
                  }
                >
                  <FaChevronRight fontSize="1.3rem" />
                </span>
              </div>
            </div>
          ) : (
            <span className="item-qty">Qty {item.quantity}</span>
          )}
        </div>
      </div>
    </Item>
  );
};

SidebarItem.propTypes = {
  isCartPage: PropTypes.bool,
  item: PropTypes.object.isRequired,
  storeDispatch: PropTypes.func.isRequired,
  storeState: PropTypes.object.isRequired,
};

export default SidebarItem;
