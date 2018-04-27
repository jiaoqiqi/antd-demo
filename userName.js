import React from 'react';
import ReactDOM from 'react-dom';
import 'moment/locale/fr';
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Ant Design ',
    },
    {
        title: 'Ant Design ',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

ReactDOM.render(
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
    , mountNode);
