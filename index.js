import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import { List, Avatar } from 'antd';


moment.locale('fr');


const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class UserList extends React.Component {

    render() {

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        );
    }
}

// const WrappedRegistrationForm = Form.create()(RegistrationForm);
ReactDOM.render(<UserList/>, document.getElementById('root'));


// ReactDOM.render(<WrappedRegistrationForm />, mountNode);

// ReactDOM.render(<App/>, document.getElementById('root'));
