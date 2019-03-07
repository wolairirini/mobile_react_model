import React,{Component} from "react";
import {Flex,Menu,ActivityIndicator} from "antd-mobile";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const img_logo = require('../../img/index/header/logo.png');
const img_menu = require('../../img/index/header/menu.png');

const data = [
    {
        value: '/',
        label: '首页',
    },{
        value: '/download',
        label: '下载',
    },{
        value: 'http://www.jixunlyq.com',
        label: <p>主机加速<span>(Ps4/Xbox)</span></p>,
    },{
        value: '/user',
        label: '会员',
    },{
        value: '/shop',
        label: '商城',
    },{
        value: '/postage',
        label: '资费',
    },{
        value: '/notice',
        label: '公告',
        isLeaf: true,
    },
  ];

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          initData: '',
          show: false,
        };
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    render(){
        const { initData, show, } = this.state;
        const menuEl = (
            <Menu
                // className={"foo-menu animated slideInDown "}
                className={"foo-menu"}
                data={initData}
                value={[]}
                level={1}
                onChange={this.onChange}
                height={''}
            />
        );
        const loadingEl = (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </div>
        );
        return(
            <div className='headerbox'>
                <Flex className='header' justify={'between'} align={'center'}>
                    <img className='logo' src={img_logo}/>
                    <Flex className='menu' align={'center'}>
                        <Link to='' className='btn register'>注册</Link>
                        <Link to='' className='btn login'>登录</Link>
                        <div className={show ? 'menu-active' : ''}>
                            <img src={img_menu} onClick={this.handleClick}/>
                        </div>
                    </Flex>
                </Flex>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
            </div>
        )
    }

    onChange = (value) => {
        console.log(value,value[0].indexOf('/'));
        if(value[0].indexOf('/')===0){
            this.context.router.history.push(value[0]);
        }else{
            window.open(value[0]);  
        };
        this.setState({
            show: false,
        });
    }

    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
            this.setState({
                initData: data,
            });
            }, 0);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }
    
}