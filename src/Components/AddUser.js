import React, { Component } from 'react';
    
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:"",
        }
    }
    

    isChange = (event)=>{ 
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value,
        });
        var item ={};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;

    }
   
    showForm = () =>{
        if(this.props.showForm ===true){
            return(
                <div className="card mb-3 mt-2">
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input id="fName" className="form-control" name="name" type="text" placeholder="Tên user"  onChange={(event) => this.isChange(event)}/>
                            </div>
                            <div className="form-group">
                                <input id="fPhone" className="form-control" name="tel" type="text" placeholder="Điện thoại"  onChange={(event) => this.isChange(event)}/>
                            </div>
                            <div className="form-group">
                                <select id="sJob" className="form-control" name="permission" required onChange={(event) => this.isChange(event)}>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-ground">
                                <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.sendData(this.state.name,this.state.tel,this.state.permission)} value="Thêm mới"/>
                            </div>
                        </form>    
                    </div>
                </div> 
            );
        }
    };
    render() {
        return (
            <div className="col-3">
                {this.showForm()}
            </div>
        );
    }
}

export default AddUser;