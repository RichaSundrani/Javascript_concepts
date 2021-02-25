import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    onclickRequest = () => {
        console.log(this.state.count);
        this.state.count = this.state.count + 1;
        this.setState({ count: this.state.count })
    }
    render() {
        return (
            <div>
                <label >Class Counter</label><p> {this.state.count}</p>
                <button onClick={this.onclickRequest}> Count</button>
            </div>
        );
    }
}

export default CounterClass; 