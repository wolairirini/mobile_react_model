import React,{Component} from "react";
import {Flex} from "antd-mobile";
import {Link} from "react-router-dom";

const img_tip = require('../../img/postage/tip.png');
const img_1 = require('../../img/postage/1.png');
const img_2 = require('../../img/postage/2.png');
const img_3 = require('../../img/postage/3.png');
const img_4 = require('../../img/postage/4.png');


export default class Postage extends Component{
    render(){
        return(
            <div className='postage'>
                <div className='banner'></div>
                <Flex className='type' direction={'column'}>
                    <Flex className='content' justify={'center'} >
                        <Flex className='left' direction={'column'} >
                            <h2 className='title'>极迅加速资费</h2>
                            <img src={img_tip}/>
                        </Flex>
                        <Flex className='right' direction={'column'}>
                            <Flex direction={'column'}>
                                <h5><span>28</span><b>元</b></h5>
                                <p>30天(<span>原价38.5元，</span><b>立省10.5元</b>)</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <h5><span>69</span><b>元</b></h5>
                                <p>90天(<span>原价95元，</span><b>立省26元</b>)</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <h5><span>199</span><b>元</b></h5>
                                <p>360天(<span>原价298元，</span><b>立省99元</b>)</p>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Link className='btn' to='/user'></Link>
                </Flex>
                <Flex className='effect' direction={'column'} align={'center'}>
                    <h2 className='title'>加速效果</h2>
                    <Flex className='content'>
                        <Flex className='left' direction={'column'}>
                            <h4>网络优化前</h4>
                            <img src={img_1} />
                            <img src={img_3} />
                        </Flex>
                        <Flex className='right' direction={'column'}>
                            <h4>网络优化后</h4>
                            <img src={img_2} />
                            <img src={img_4} />
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        )
    }
}