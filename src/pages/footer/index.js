import React,{Component} from "react";
import {Flex,} from "antd-mobile";
import {Link} from "react-router-dom";

export default class Footer extends Component{
   
    render(){
        return(
            <Flex className='footer' direction={'column'}>
                <p><Link to=''>关于极迅</Link> | <Link to='/postage'>极迅资费</Link> | <Link to=''>客服中心</Link> | <Link to='/concatus'>联系我们</Link> | <Link to=''>产品介绍</Link></p>
                <p>川公网安备51019002001034  蜀ICP备12029967号 ICP证编号：川B2-20150052</p>
            </Flex>
        )
    }

}