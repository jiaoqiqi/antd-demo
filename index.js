import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/fr';
import {Table} from 'antd';
import reqwest from 'reqwest';

moment.locale('fr');

const columns = [{
    title: '排行榜',
    dataIndex: 'rankingList',
    sorter: true,
    // render: name => `${name.first} ${name.last}`,
    width: '10%',
}, {
    title: '用户名',
    dataIndex: 'userName',
    // filters: [
    //     {text: 'Male', value: 'male'},
    //     {text: 'Female', value: 'female'},
    // ],
    width: '15%',
}, {
    title: '描述',
    dataIndex: 'userInfo',
    width: '30%',
},{
    title: 'AC数',
    dataIndex: 'passNum',
    width: '10%',
},{
    title: '通过率',
    dataIndex: 'passRate',
    width: '15%',
}];



const data = [
    {
        rankingList : 1,
        userName : "q",
        userInfo : "snfjdsjfnvlksafiumasdkfdshfmsdkvnask",
        passNum : 345,
        passRate : 30
    },
    {
        rankingList : 2,
        userName : "w",
        userInfo : "snfjdsjfnvlksafiumasdkfdshfmsdkvnask",
        passNum : 300,
        passRate : 25
    },
    {
        rankingList : 3,
        userName : "e",
        userInfo : "snfjdsjfnvlksafiumasdkfdshfmsdkvnask",
        passNum : 298,
        passRate : 20
    },
    {
        rankingList : 4,
        userName : "r",
        userInfo : "snfjdsjfnvlksafiumasdkfdshfmsdkvnask",
        passNum : 257,
        passRate : 15
    },{
        rankingList : 5,
        userName : "a",
        userInfo : "snfjdsjfnvlksafiumasdkfdshfmsdkvnask",
        passNum : 173,
        passRate : 10
    },
];


class App extends React.Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    };
    // handleTableChange = (pagination, filters, sorter) => {
    //     const pager = {...this.state.pagination};
    //     pager.current = pagination.current;
    //     this.setState({
    //         pagination: pager,
    //     });
    //     this.fetch({
    //         results: pagination.pageSize,
    //         page: pagination.current,
    //         sortField: sorter.field,
    //         sortOrder: sorter.order,
    //         ...filters,
    //     });
    // };
    // fetch = (params = {}) => {
    //     console.log('params:', params);
    //     this.setState({loading: true});
    //     reqwest({
    //         url: 'https://randomuser.me/api',
    //         method: 'get',
    //         data: {
    //             results: 10,
    //             ...params,
    //         },
    //         type: 'json',
    //     }).then((data) => {
    //         const pagination = {...this.state.pagination};
    //         // Read total count from server
    //         // pagination.total = data.totalCount;
    //         pagination.total = 200;
    //         this.setState({
    //             loading: false,
    //             data: data.results,
    //             pagination,
    //         });
    //     });
    // }

    // componentDidMount() {
    //     this.fetch();
    // }

    render() {
        return (
            <Table columns={columns}
                   data={this.state.data}
                   // rowKey={record => record.registered}
                   // dataSource={this.state.data}
                   // pagination={this.state.pagination}
                   // loading={this.state.loading}
                   // onChange={this.handleTableChange}
            />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
