import React, {Component} from 'react';

require('./table.css');

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {dataList: []};
  }

  componentDidMount() {
    this.setState({
      dataList: [1, 2, 3, 4]
    })
  }

  render() {
    return (
      <div className='demo'>
        <div className='tips'>
          <ul>
            {
              [
                <li>更改state不建议直接用this.state赋值， 要用setState</li>,
                <li>假如setState更改状态用到props，也不建议直接用this.props，可以传参进去this.setState(state，props)</li>,
                <li>时间处理不能通过返回 false 的方式阻止默认行为。必须使用e.preventDefault</li>,
                <li>javascript</li>,

              ]
            }
          </ul>
        </div>
        <div className='page'>
          {this.state.dataList.map((x, index) => {
              return <span key={index}>{x}</span>
            }
          )}
        </div>
      </div>
    )
  }
}

export default Table
