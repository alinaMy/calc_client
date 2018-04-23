import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        a: 0,
        b: 0,
        res: 0
      };
  }

    sum() {
        const body = JSON.stringify({
            a: this.state.a,
            b: this.state.b,
            res: this.state.a + this.state.b,
        });

        fetch(
            'https://calc-server-alina.herokuapp.com/calc/sum',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            },
        )
            .then(response => response.json())
            .then((json) => {
                this.setState({ result: json.result });
                console.log(json);
            });
    }

    sub() {
        const body = JSON.stringify({
            a: this.state.a,
            b: this.state.b,
        });

        fetch(
            'https://calc-server-alina.herokuapp.com/calc/sub',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            },
        )
            .then(response => response.json())
            .then((json) => {
                this.setState({ result: json.result });
                console.log(json);
            });
    }

    mult() {
        const body = JSON.stringify({
            a: this.state.a,
            b: this.state.b,
        });

        fetch(
            'https://calc-server-alina.herokuapp.com/calc/mult',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            },
        )
            .then(response => response.json())
            .then((json) => {
                this.setState({ result: json.result });
                console.log(json);
            });
    }
    div() {
        const body = JSON.stringify({
            a: this.state.a,
            b: this.state.b,
        });

        fetch(
            'https://calc-server-alina.herokuapp.com/calc/div',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            },
        )
            .then(response => response.json())
            .then((json) => {
                this.setState({ result: json.result });
                console.log(json);
            });
    }


  render() {
    return (
      <div className="con container">

            <input className = "input form-control" type="text" onChange={e => this.setState({a: +e.target.value})}/>
            <input className = "input form-control" type="text" onChange={e => this.setState({b: +e.target.value})}/>

            <button className="btn btn btn-primary" onClick={() => this.sub()}>Sub </button>
            <button className="btn btn btn-primary" onClick={() => this.sum()}>Sum </button>
            <button className="btn btn btn-primary" onClick={() => this.mult()}>Mult </button>
            <button className="btn btn btn-primary" onClick={() => this.div()}>Div </button>

      </div>
    );
  }
}

export default App;
