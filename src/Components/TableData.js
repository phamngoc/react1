import React, { Component } from 'react';
import TableDataRow from '../TableDataRow';

class TableData extends Component {
    changeClass = () =>{
        if(this.props.col === true){
            return "col-9";
        }else{
            return "col-12";
        }
    }
    mappingDataUser = () => this.props.dataTable.map((value, key)=>(
        <TableDataRow deleteUser= {(id) => {this.props.deleteUser(id)}} btnEdit={(user) => {this.props.edit(value)}} id={value.id} userID={key} key={key} name={value.name} tel={value.tel} permission={value.permission} />
    ))
    
    render() {
        return (
            <div className={"content " + this.changeClass()}>
                <table className="table table-striped table-light">
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Tên</td>
                            <td>Điện thoại</td>
                            <td>Quyền</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;