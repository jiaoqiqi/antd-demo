import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import {Table, Avatar, Layout, List, Progress} from 'antd';
import reqwest from 'reqwest';

moment.locale('fr');

const columns = [{
    title: '排行',
    dataIndex: 'rankingList',
    sorter: true,
    width: '10%',
    // render: (text, record) => (<span>{record.rankingList}</span>)
    render: (text, record) => (record.rankingList <=3 ?
        <span> <img src="90-皇冠%20.png" />&nbsp;{record.rankingList}</span> :
        <span> &nbsp;&nbsp; &nbsp;&nbsp;{record.rankingList}</span>),
}, {
    title: '用户名',
    dataIndex: 'userName',
    width: '20%',
    render: (text, record) => <div style={{height: 50}}>
        <Avatar src={record.userPic}/>
        &nbsp;&nbsp;
        <span> {record.userName}  </span>

    </div>
},
    {
        title: '用户描述',
        dataIndex: 'userInfo',
        width: '40%',
        render: (text, record) => (<span>{record.userInfo}</span>)
    },
    {
        title: 'AC数',
        dataIndex: 'passNum',
        width: '10%',
        render: (text, record) => <div>{record.passNum}</div>
    }, {
        title: '通过率',
        dataIndex: 'passRate',
        width: '15%',
        render: (text, record) => <Progress percent={record.passRate} size="small"/>
    }];


const data = [
    {
        rankingList: 1,
        userPic:"cat.jpg",
        userName: "qwe",
        userInfo: "Ant Design1",
        passNum: 345,
        passRate: 30

    },
    {
        rankingList: 2,
        userPic:"cat.jpg",
        userName: "wer",
        userInfo: "Ant Design2",
        passNum: 300,
        passRate: 25
    },
    {
        rankingList: 3,
        userPic:"cat.jpg",
        userName: "ert",
        userInfo: "Ant Design3",
        passNum: 298,
        passRate: 20
    },
    {
        rankingList: 4,
        userPic:"cat.jpg",
        userName: "rty",
        userInfo: "Ant Design4",
        passNum: 257,
        passRate: 15
    }, {
        rankingList: 5,
        userPic:"cat.jpg",
        userName: "asd",
        userInfo: "Ant Design5",
        passNum: 173,
        passRate: 10
    },
];


class App extends React.Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    };
    handleTableChange = (pagination, filters, sorter) => {
        const pager = {...this.state.pagination};
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    };
    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({loading: true});
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = {...this.state.pagination};
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Table columns={columns}
                   dataSource={data}
            />


        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
