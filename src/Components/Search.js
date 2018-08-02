import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            tempValue:'',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info,
        })
        this.props.getUserEditInfoApp(info);
    }
    showEditUser = () => {
        if(this.props.editUserStatus === true){
            return (<EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} dataEdit ={this.props.dataEdit} changeEditStatus={this.props.changeEditStatus()}/>)
        }
        else return ;
    }
    isChange =(event) =>{
        this.setState({
            tempValue: event.target.value,
        })
        this.props.connect(this.state.tempValue);
    }
    showHideButton = () =>{
        if(this.props.status === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.showButton()}>Đóng lại</div>
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.showButton()}>Thêm mới</div>
        }
    }
   
    render() {
        return (
            <div className="container">
                {this.showEditUser()}
                <div className="input-group mb-2 col-6 mt-5 p-0">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa ..."  onChange={(event)=>this.isChange(event)}/>
                    <div className="input-group-append">
                        <button className="input-group-text btn btn-success" onClick={()=>this.props.connect(this.state.tempValue)} >Tìm</button>
                    </div>
                </div>
                {
                    this.showHideButton()
                }
                <hr />
            </div>
        );
    }
}

export default Search;