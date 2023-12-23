import ThumbPlaceHolder from "/img/menu-thumb-placeholder.jpg";
import MenuThumb from "/img/menu-thumb-1.jpg";
import { useState } from "react";

function HeaderCart() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart((showCart) => !showCart);
  }
  return (
    <ul id="top_menu">
      <li>
        <div className="dropdown dropdown-cart">
          <a
            className={`cart_bt ${showCart && "show"}`}
            onClick={handleShowCart}
          >
            <strong>2 </strong>
          </a>
          {showCart && (
            <div
              className={`dropdown-menu ${showCart && "show"}`}
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                margin: "0px",
                transform: "translate3d(0px, 30.4px, 0px)",
              }}
            >
              <ul>
                <li>
                  <figure>
                    <img
                      src={ThumbPlaceHolder}
                      data-src={MenuThumb}
                      alt=""
                      width="50"
                      height="50"
                      className="lazy"
                    />
                  </figure>
                  <strong>
                    <span>1x Pizza Napoli </span>$12.00{" "}
                  </strong>
                  <a href="#0" className="action">
                    <i className="icon_trash_alt"></i>
                  </a>
                </li>
                <li>
                  <figure>
                    <img
                      src={ThumbPlaceHolder}
                      data-src="img/menu-thumb-2.jpg"
                      alt=""
                      width="50"
                      height="50"
                      className="lazy"
                    />
                  </figure>
                  <strong>
                    <span>1x Hamburgher Maxi </span>$10.00{" "}
                  </strong>
                  <a href="#0" className="action">
                    <i className="icon_trash_alt"></i>
                  </a>
                </li>
                <li>
                  <figure>
                    <img
                      src={ThumbPlaceHolder}
                      data-src="img/menu-thumb-3.jpg"
                      alt=""
                      width="50"
                      height="50"
                      className="lazy"
                    />
                  </figure>
                  <strong>
                    <span>1x Red Wine Bottle </span>$20.00{" "}
                  </strong>
                  <a href="#0" className="action">
                    <i className="icon_trash_alt"></i>
                  </a>
                </li>
              </ul>
              <div className="total_drop">
                <div className="clearfix add_bottom_15">
                  <strong>Total </strong>
                  <span>$32.00 </span>
                </div>
                <a href="order.html" className="btn_1 outline">
                  View Cart{" "}
                </a>
                <a href="order.html" className="btn_1">
                  Checkout{" "}
                </a>
              </div>
            </div>
          )}
        </div>
        {/* dropdown-cart */}
      </li>
    </ul>
  );
}

export default HeaderCart;
