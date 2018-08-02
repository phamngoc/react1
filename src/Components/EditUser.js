import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.dataEdit.id,
            name:this.props.dataEdit.name,
            tel:this.props.dataEdit.tel,
            permission:this.props.dataEdit.permission,
        }
    }
    isChange = (event)=>{ 
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
        

    }
    saveBtn = () => {
        var item ={};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
        this.props.getUserEditInfo(item);
        this.props.changeEditStatus();
    }
    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3 mt-2">
                        <div className="card-header">Thay đổi thông tin User</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input id="fName" className="form-control" name="name" type="text" placeholder="Tên user"  defaultValue ={this.props.dataEdit.name}  onChange={(event) => this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <input id="fPhone" className="form-control" name="tel" type="text" placeholder="Điện thoại" defaultValue ={this.props.dataEdit.tel}   onChange={(event) => this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <select id="sJob" className="form-control" name="permission" required defaultValue ={this.props.dataEdit.permission}  onChange={(event) => this.isChange(event)}>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-ground">
                                    <input type="button" className="btn btn-block btn-primary" value="Lưu" onClick={() => this.saveBtn()}/>
                                </div>
                            </form>    
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default EditUser;