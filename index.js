import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import { List, Avatar } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';



moment.locale('fr');


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
        <Menu.Item disabled>3rd menu item（disabled）</Menu.Item>

    </Menu>
);

class App extends React.Component {

    render() {

        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}

// const WrappedRegistrationForm = Form.create()(RegistrationForm);
ReactDOM.render(<App/>, document.getElementById('root'));


// ReactDOM.render(<WrappedRegistrationForm />, mountNode);

// ReactDOM.render(<App/>, document.getElementById('root'));
