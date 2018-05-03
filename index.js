import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import { Menu, Icon,Button,Cascader} from 'antd';
moment.locale('fr');

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}


class App extends React.Component {

    render() {
        return (
            <Cascader options={options} onChange={onChange} placeholder="Please select" />

        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
