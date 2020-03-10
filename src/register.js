// cube createAPI
import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCartlist from 'components/shop-cart-list/shop-cart-list'
import ShopCartSticky from 'components/shop-cart-sticky/shop-cart-sticky'
import Food from 'components/food/food'
createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCartlist)
createAPI(Vue, ShopCartSticky)
createAPI(Vue, Food)
