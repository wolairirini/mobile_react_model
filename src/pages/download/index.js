import React,{Component} from "react";
import {Flex} from "antd-mobile";

const img_1 = require('../../img/download/1.png');
const img_2 = require('../../img/download/2.png');
const img_zhuji = require('../../img/download/zhuji.png');


export default class Download extends Component{
    constructor(props){
        super(props)
        this.state={
            other_display:'none',
        }
    }
    render(){
        const {other_display} = this.state;
        return(
            <div className='download'>
               <div className='pc'>
                    <h2 className='title'>PC加速器</h2>
                    <Flex className='content'>
                        <img src={img_1}/>
                        <img src={img_2}/>
                    </Flex>
                    <div className='btn-group'>
                        <a className='btn_main' href="https://www.jixunjsq.com/download/JixunjsqInstall_3.0.4.0.rar ">极速版3.0下载</a>
                        <div className='btn_others'>
                            <a onClick={this.otherbtnsSwitch} className='btn' href='javascript:;'>其他版本下载</a>
                            <ul style={{display:other_display}}>
                                <li><a href="https://www.jixunjsq.com/download/JiXunInstall_mini.rar">极速版2.0下载</a></li>
                                <li><a href="https://www.jixunjsq.com/download/JiXunInstall_1.0.5.7.rar">旗舰版下载</a></li>
                            </ul>
                        </div>
                    </div>
               </div>
               <div className='zhuji'>
                    <h2 className='title'>主机加速</h2>
                    <img src={img_zhuji} />
                    <a target='_blank' href='http://www.jixunlyq.com'>立即购买</a>
               </div>
               <div className='pingce'>
                    <h2 className='title'>视频评测</h2>
                    <iframe src="//player.bilibili.com/player.html?aid=27002677&cid=46510124&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
               </div>
            </div>
        )
    }
    otherbtnsSwitch=()=>{
        let {other_display} = this.state;
        if(other_display==='none'){
            other_display='block'
        }else{
            other_display='none'
        }
        this.setState({
            other_display
        })
    }
}