 var nv_style_anim = document.createElement("style");
                                      nv_style_anim.innerHTML = ` .woocommerce ul.products[class*=columns-] li.product, .woocommerce-page ul.products[class*=columns-] li.product {
    width: 50%;
    float: left;
    clear: both;
    margin: 0 0 0px;
    border: .5px solid #d4d5d9;
}

.woocommerce ul.products li.product .button {
    margin-top: 1em;
    display: inline-block;
    padding: 10px 35px 10px;
    font-size: 13px;
    font-weight: 700;
	margin-left: 17%;  
    color: white;
    text-transform: uppercase;
    line-height: 20px;
    background-color: #ff0085;
    border: none;
    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    border-radius: 25px;
    -webkit-transition: all 0.6s ease-out;
    -moz-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;
}


.woocommerce ul.products li.product .price {
     
    font-weight: 500;
    color: #282c3f;
    font-size: 13px;
    margin-left: 10px;
    display: block;
    margin-bottom: .5em;
}


.woocommerce ul.products li.product .woocommerce-loop-category__title, .woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce ul.products li.product h3 {
    /* padding: 0.5em 10px; */
    margin: 0;
    font-size: 1em;
    position: relative;
    padding-left: 20px;
    font-weight: 500;
    color: var(--dark);
    line-height: 2.57;
    text-align: left;
    color: #282c3f;
    font-size: 13px;
    width: 95%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

ul.products li.product .tinvwl_add_to_wishlist_button {
    margin-top: -3em;
}

.tinv-wishlist .tinvwl_add_to_wishlist_button.tinvwl-icon-heart:before, .woocommerce ul.products li.product a.tinvwl-button.tinvwl_add_to_wishlist_button.tinvwl-icon-heart:before, .woocommerce-page ul.products li.product a.tinvwl-button.tinvwl-icon-heart.tinvwl_add_to_wishlist_button:before, a.wishlist_products_counter.top_wishlist-heart:before, span.wishlist_products_counter.top_wishlist-heart:before, a.sidr-class-wishlist_products_counter.sidr-class-top_wishlist-heart:before {
    content: '\e909';
    display: inline-block;
    font-family: tinvwl-webfont !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 30px;
    vertical-align: sub;
    margin-right: 5px;
}
.tinv-wishlist * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: none;
}`;
                                      
                                      document.body.appendChild(nv_style_anim);