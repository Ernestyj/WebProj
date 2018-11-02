import React from 'react'
import { Row,Col } from 'antd';

import NavLeft from "./components/NavLeft";
import Header from "./exmanagesys/components/Header";
import Footer from "./exmanagesys/components/Footer";


export default class Main extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="21" className="main">
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}
