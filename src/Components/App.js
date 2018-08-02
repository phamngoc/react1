import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './../Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      dataEdit: {}
    }
  }
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser))
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp,
      })
    }
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = parseInt(info.permission, 20);

      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  deleteUser = (id) => {
    var templateData = this.state.data;
    templateData.forEach((value, key) => {
      templateData = templateData.filter(el => el.id !== id);
      this.setState({
        data: templateData,
      })
    })
    localStorage.setItem('userData', JSON.stringify(templateData));
  }
  changeEditStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    })
  }
  getDataEdit = (user) => {
    this.setState({
      dataEdit: user,
      editUserStatus: !this.state.editUserStatus,
    })

  }
  getNewUserData = (name, tel, permision) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permision = permision;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });

  }
  changeStatus = () => {
    this.setState({
      status: !this.state.status,
    })
  };
  render() {
    var result = [];
    this.state.data.forEach(item => {
      if (item.name.toLowerCase().indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });
    return (
      <div className="App">
        <Header></Header>
        <Search
          getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
          dataEdit={this.state.dataEdit}
          connect={(dl) => this.getTextSearch(dl)}
          showButton={() => this.changeStatus()}
          status={this.state.status}
          editUserStatus={this.state.editUserStatus}
          changeEditStatus={() => this.changeEditStatus}>
        </Search>
        <div className="container">
          <div className="row">
            <TableData deleteUser={(id) => this.deleteUser(id)} col={this.state.status} dataTable={result} edit={(user) => this.getDataEdit(user)} />
            <AddUser showForm={this.state.status} sendData={(name, tel, permision) => this.getNewUserData(name, tel, permision)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
