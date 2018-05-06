import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import "./index.css"
import {Rate } from 'antd';
moment.locale('fr');


class App extends React.Component {
    state = {
        value: 3,
    }
    handleChange = (value) => {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
        return (
            <span>
        <Rate onChange={this.handleChange} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
        );
    }

}


ReactDOM.render(<App/>, document.getElementById('root'));
