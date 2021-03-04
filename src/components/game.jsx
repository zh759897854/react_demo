import React, { Component } from 'react';

class Square extends Component {
  render() {
    return(
      <button
        className={"square "+ this.props.className}
        onClick={()=> this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

class Borad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      next: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.next?'X':'O';
    this.setState({
      squares: squares,
      next: !this.state.next
    });
  }

  renderSquare(i) {
    if(winerCount.length === 3) {
      return <Square
        className={(winerCount.indexOf(i) > -1)?'highlight':''}
        value={this.state.squares[i]}
        onClick={()=> this.handleClick(i)}
      />
    }else {
      return <Square
        value={this.state.squares[i]}
        onClick={()=> this.handleClick(i)}
      />
    }
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.next ? 'X' : 'O');
    }

    let strArray = [];
    for(let i = 0; i < 9; i++) {
      strArray.push(this.renderSquare(i))
    }
    return (
      <div>
        <div>{status}</div>
        <div className='container'>{strArray}</div>
      </div>
    )
  }
}

let winerCount = [];
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winerCount = lines[i];
      return squares[a];
    }
  }
  return null;
}

export default Borad
