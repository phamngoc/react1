import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if(this.props.permission ===1){
            return "Admin";
        }else if(this.props.permission ===2){
            return "Moderator";
        }else{
            return "Normal";
        }

    };
    render() {
        
        return (
            <tr>
                <td>{this.props.userID+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn-warning btn" onClick={()=>this.props.btnEdit()}>
                            <i className="fa fa-edit" /> Sửa</div>
                        <div className="btn-danger btn"  onClick={(id)=>this.props.deleteUser(this.props.id)}>
                            <i className="fa fa-close" /> Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;