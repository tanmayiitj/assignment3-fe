import React from 'react'
import p1 from "../images/products/product-1.png"
import cart from "../images/common/add-to-cart.png"

function Items() {
    return (
        <div>
            <div>
                <img
                    src={p1}
                    alt="Ear plugs"
                />
            </div>
            <div>
                <div>
                    <div>Ear plugs</div>
                    <div>Lorem Ipsum, ndh gs</div>
                    <div>$30.99</div>
                </div>
                <div>
                    <div>QTY</div>
                    <select name="quantity" id="product-quantity">
                        1
                    </select>
                    <button id="add-to-cart">
                        <img
                            src={cart}
                            alt="Add to Cart"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Items