import React,{Component} from "react";
import {Flex,NavBar,Icon} from "antd-mobile";
export default class Layout extends Component{
    render(){
        return(
            <Flex direction={'column'}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    NavBar
                </NavBar>
                <div className='tx1' style={{background:'red'}}>asd</div>
            </Flex>
        )
    }
}