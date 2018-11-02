import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './exmanagesys/App'
import Login from './exmanagesys/pages/login'
import Admin from './exmanagesys/admin'
import Home from './exmanagesys/pages/home';
import Buttons from './exmanagesys/pages/ui/buttons'
import Modals from './exmanagesys/pages/ui/modals'
import NoMatch from './exmanagesys/pages/nomatch'
import Loadings from './exmanagesys/pages/ui/loadings'
import Notice from './exmanagesys/pages/ui/notice'
import Messages from './exmanagesys/pages/ui/messages'
import Tabs from './exmanagesys/pages/ui/tabs'
import Gallery from './exmanagesys/pages/ui/gallery'
import Carousel from './exmanagesys/pages/ui/carousel'
import FormLogin from './exmanagesys/pages/form/login'
import FormRegister from './exmanagesys/pages/form/register'
import BasicTable from './exmanagesys/pages/table/basicTable'
import HighTable from './exmanagesys/pages/table/highTable'
import Rich from './exmanagesys/pages/rich'
import City from './exmanagesys/pages/city/index'
import Order from './exmanagesys/pages/order/index'
import Common from './exmanagesys/common'
import OrderDetail from './exmanagesys/pages/order/detail'
import BikeMap from './exmanagesys/pages/map/bikeMap'
import User from './exmanagesys/pages/user/index'
import Bar from './exmanagesys/pages/echarts/bar/index'
import Pie from './exmanagesys/pages/echarts/pie/index'
import Line from './exmanagesys/pages/echarts/line/index'
import Permission from './exmanagesys/pages/permission'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/manage/login" component={Login}/>
                        <Route path="/manage/common" render={() =>
                            <Common>
                                <Route path="/manage/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                        <Route path="/manage" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/manage/home' component={Home} />
                                    <Route path="/manage/ui/buttons" component={Buttons} />
                                    <Route path="/manage/ui/modals" component={Modals} />
                                    <Route path="/manage/ui/loadings" component={Loadings} />
                                    <Route path="/manage/ui/notification" component={Notice} />
                                    <Route path="/manage/ui/messages" component={Messages} />
                                    <Route path="/manage/ui/tabs" component={Tabs} />
                                    <Route path="/manage/ui/gallery" component={Gallery} />
                                    <Route path="/manage/ui/carousel" component={Carousel} />
                                    <Route path="/manage/form/login" component={FormLogin} />
                                    <Route path="/manage/form/reg" component={FormRegister} />
                                    <Route path="/manage/table/basic" component={BasicTable} />
                                    <Route path="/manage/table/high" component={HighTable} />
                                    <Route path='/manage/rich' component={Rich} />
                                    <Route path="/manage/city" component={City} />
                                    <Route path="/manage/order" component={Order} />
                                    <Route path='/manage/bikeMap' component={BikeMap} />
                                    <Route path='/manage/user' component={User} />
                                    <Route path="/manage/charts/bar" component={Bar} />
                                    <Route path="/manage/charts/pie" component={Pie} />
                                    <Route path="/manage/charts/line" component={Line} />
                                    <Route path="/manage/permission" component={Permission} />
                                    <Redirect to="/manage/home" />
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
