import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker,Row, Col,Card,Tag,Select,Icon,Checkbox} from 'antd';

function App() {

  return (
    <div>
      <h1>排班表</h1>
      <hr /><br />
        <Row>
            <Col span={8}>
                <Card title="第一步：选择日期范围" bordered={false} style={{ width: 300 }}>

                        <Tag color="#108ee9">开始日期</Tag><DatePicker />


                        <Tag color="#108ee9">结束日期</Tag><DatePicker />
                    <p><Icon type="caret-down" />下一步</p>
                </Card>
                <Card title="第二步：选择排班人员" bordered={false} style={{ width: 300 }}>

                        <Tag color="#108ee9">部门名称</Tag>
                        <Select showSearch style={{ width: 150 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>


                        <Tag color="#108ee9">工种名称</Tag>
                        <Select showSearch style={{ width: 150 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Tag color="#108ee9" style={{marginRight:30}}>工号</Tag>
                    <Select showSearch style={{ width: 150 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Tag color="#108ee9">员工姓名</Tag>
                    <Select showSearch style={{ width: 150 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <p> <Icon type="search" />高级查询<Icon type="caret-up" />上一步<Icon type="caret-down" />下一步</p>
                </Card>
                <Card title="第三步：设定工作班次" bordered={false} style={{ width: 300 }}>
                    <Checkbox >方法一:自动排班</Checkbox><br/>
                    <Checkbox >方法二:手动排班</Checkbox><br/>
                    <Tag color="#108ee9">开始日期</Tag><DatePicker /><br/>
                    <Tag color="#108ee9">结束日期</Tag><DatePicker /><br/>
                    <Tag color="#108ee9">班次个数</Tag>

                    <Col span={20}>
                        <Select showSearch style={{ width: 150 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 150 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 150 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 150 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                </Col>
                    <Col span={4}>
                        <Select showSearch style={{ width: 50 }} defaultValue="1">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 50 }} defaultValue="1" >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 50 }} defaultValue="1">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 50 }} defaultValue="1">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <Select showSearch style={{ width: 50 }} defaultValue="1">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                    <Checkbox >忽略其他节假日</Checkbox><br/>
                </Card>
            </Col>
            <Col span={16}>

            </Col>
        </Row>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
