import React, { Component } from 'react'
import './UserCenter.css';
import { reqUser, reqImgsId } from '../../api';
import UserCenterLogined from './UserCenterLogined'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd'

class UserCenter extends Component{
   
   constructor(props){
      super(props);
      this.state={
         hasLogined: JSON.stringify(this.props.user) !== '{}'
      }
   }

   // getLoginedOrNot = ()=>{
   //   this.setState({
   //      hasLogined: JSON.stringify(this.props.user) !== '{}'
   //   })
   // }

   render(){
     if(this.state.hasLogined){
        return <UserCenterLogined/>
     }else{
        return <Link to="login">
           <Result
              title="未登录，无法查看用户中心"
               extra={
                 <Button type="primary" key="console">
                    前往登录
                  </Button>
                }
           >
           </Result>
        </Link>
     }
   }
}


export default connect(
   state => ({ user: state.user }),
)(UserCenter)