import React, { Component, Suspense } from 'react';
import { Link } from "react-router-native";

import routes from '../../routes';
import Page from '../HOC/Page';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }
    componentDidMount() {
        this.setState({
            product
        })
    }

    render() {
        let { product } = this.state;
        return (
            <view>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <view className="container">
                        <a className="navbar-brand" href="/top">T.SmartHome</a>
                        <view className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link to="/top" className="nav-link">Trang Chủ</Link></li>
                                <li className="nav-item"><Link to="/product" className="nav-link">Sản Phẩm</Link></li>
                                <li className="nav-item"><Link to="/blog" className="nav-link">Tin Tức</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Liên Hệ</Link></li>
                                <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart" />[{product != null && product != '' ? product.length : 0}]</Link></li>
                            </ul>
                        </view>
                    </view>
                </nav>
                {/* END nav */}
                <Suspense fallback={<Spin />}>
                    <Switch>
                        {
                            (routes || []).map((route, idx) => {
                                return route.component ? (
                                    <Page 
                                        key={idx}
                                        path={route.path}
                                        name={route.name}
                                        component={route.component}
                                        exact={route.exact}
                                    />  
                                ) : null
                            })
                        }
                        <Redirect to="/404"/>
                    </Switch>
                </Suspense>
                <footer className="ftco-footer bg-light ftco-section">
                    <view className="container">
                        <view className="row mb-5">
                            <view className="col-md">
                                <view className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Modist</h2>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </view>
                            </view>
                            <view className="col-md">
                                <view className="ftco-footer-widget mb-4 ml-md-5">
                                    <h2 className="ftco-heading-2">Menu</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">Shop</a></li>
                                        <li><a href="#" className="py-2 d-block">About</a></li>
                                        <li><a href="#" className="py-2 d-block">Journal</a></li>
                                        <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                                    </ul>
                                </view>
                            </view>
                            <view className="col-md-4">
                                <view className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Help</h2>
                                    <view className="d-flex">
                                        <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                            <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                                            <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                                            <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                                            <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
                                        </ul>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="py-2 d-block">FAQs</a></li>
                                            <li><a href="#" className="py-2 d-block">Contact</a></li>
                                        </ul>
                                    </view>
                                </view>
                            </view>
                            <view className="col-md">
                                <view className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <view className="block-23 mb-3">
                                        <ul>
                                            <li><span className="icon icon-map-marker" /><span className="text">16/23 Ward Tan Chanh Hiep District 12 HCM City</span></li>
                                            <li><a href="#"><span className="icon icon-phone" /><span className="text">+84703781380</span></a></li>
                                            <li><a href="#"><span className="icon icon-envelope" /><span className="text">thien111294@gmail.com</span></a></li>
                                        </ul>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view className="row">
                            <view className="col-md-12 text-center">
                                <p>
                                     Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://clientchat.herokuapp.com" target="_blank">ThienStyle</a>
                                </p>
                            </view>
                        </view>
                    </view>
                </footer>
                <view className="overlay-shop"></view>
            </view>
        )
    }
}