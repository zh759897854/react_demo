import React, {Component} from 'react';
require('./login.css');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {toggle: false}
  }

  handleClick(text) {
    let sortArray = [1,2,3,2,4,7,9,4,2,9,5,6,1,7];
    let tmpArray = [];
    tmpArray.push(sortArray[0]);
    for (let i = 1; i < sortArray.length; i++) {
      let condition = tmpArray.indexOf(sortArray[i]);
      if( condition < 0) {
        tmpArray.push(sortArray[i])
      }
    }

    for (let i = 0; i < tmpArray.length -1; i++) {
      for (let j = 0; j < tmpArray.length - i -1; j++) {
        if(tmpArray[j] > tmpArray[j+1]) {
          let tmp = tmpArray[j];
          tmpArray[j] = tmpArray[j+1];
          tmpArray[j+1] = tmp;
        }
      }
    }
    console.log(tmpArray)
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    let btnText = this.state.toggle?'登录':'注册';
    return (
      <div>
        <input type="text"/><br/>
        <button className='login' onClick={this.handleClick.bind(this, 'abc')}>{btnText}</button>
      </div>
    )
  }
}

export default Login
