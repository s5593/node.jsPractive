import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
      name : '',
      id : '',
      path : ''
    };

  }



klikPost(e){
  e.preventDefault();
  console.log('post1')
  var url = '/api/images';
  console.log(this.inputname.value)
  axios.post(url, {
    email: this.inputname.value,
    path: this.inputpath.value,
    type: this.inputtype.value,
    result: this.inputresult.value,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.inputname.value = '';
  this.inputid.value = '';
  this.inputpath.value = '';
  this.inputtype.value = '';
  this.inputresult.value = '';
};

klikGet(e){
  e.preventDefault();
  var url = '/api/images';
  axios.get(url)
  .then((ambilData) => {
    console.log(ambilData.data);
    this.setState({
      dataku: ambilData.data,
    }) 
  })
};

render() {
  // const dataMongo = this.state.dataku.map((item, index)=>{
  //   var arrayku = ['Nama: ',item.nama,', Usia: ', item.usia, ' th.'].join(' ');
  //   return <p key={index}>{arrayku}</p>;
  // })
  return (
   <div className="container">
   <Zoom>
     <center style={{margin:'25px'}}>
        <Flip><h3>React ♥ Express ♥ MongoDB</h3></Flip>
     
     <form>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="email" 
    ref={ inid => this.inputid = inid }
    placeholder="회원 email"/>
  </div>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="path" 
    ref={ inpath => this.inputpath = inpath }
    placeholder="회원 이미지 경로"/>
  </div>
  
  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="type" 
    ref={ inname => this.inputname = inname }
    placeholder="타입"/>
  </div>
  
  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="result" 
    ref={ inname => this.inputname = inname }
    placeholder="결과"/>
  </div>
  
  <button className="btn btn-primary" style={{width:'100px'}}
  onClick={this.klikPost.bind(this)}>POST</button>
  
  <button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  onClick={this.klikGet.bind(this)}>GET</button>

</form>

     <div>
       {/* { dataMongo } */}
      {this.state.dataku.name}
      {this.state.dataku.id}
      {this.state.dataku.path}
     </div>
     </center>
     </Zoom>
   </div>
  );
 }
 }
 
export default App;