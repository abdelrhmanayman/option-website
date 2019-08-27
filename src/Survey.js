import React, { Component } from 'react'
import { Steps, Button, message, Card, Row, Col, Typography, Radio, Input } from 'antd'
import './styles.css'

const { Step } = Steps
const { Text } = Typography
const surveyImage = require('./assets/logo.png')


class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            value: 1
        };
    }

    onChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    steps = [
        {
            title: 'First',
            content: (
                <div>
                    <Row>
                        <Col>
                            <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                                What is Your Gender?!
                    </Text>
                        </Col>
                    </Row>
                    <Radio.Group onChange={this.onChange} >
                        <Radio value="1" >
                            Male
                    </Radio>
                        <Radio value="2">
                            Female
                </Radio>
                    </Radio.Group>
                </div>
            ),
        },
        {
            title: 'Second',
            content: (
                <div>
                    <Row>
                        <Col>
                            <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                                Do you love Shawerma?!
                    </Text>
                        </Col>
                    </Row>
                    <Radio.Group onChange={this.onChange} >
                        <Radio value="3" >
                            Yes, A lot!!
                    </Radio>
                        <Radio value="4">
                            No, I love Egypt
                </Radio>
                    </Radio.Group>
                </div>
            ),
        },
        {
            title: 'Last',
            content: (
                <div>
                    <Row>
                        <Col>
                            <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                                Enter your phone number, Please!
                    </Text>
                        </Col>
                    </Row>
                    <br />
                    <Input placeholder="Enter your number here, Please!" style={{ maxWidth: "20%" }} />
                </div>
            )
        },
    ]

    render() {
        const { current } = this.state;
        const { steps } = this
        return (
            <Card>
                <Row type="flex" align="middle" justify="center">
                    <Col push={9}>
                        <img src={surveyImage} alt="surveyImage" width="20%" height="10%" />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
            </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Done, the fastest task i have ever done!')}>
                            Done
            </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
            </Button>
                    )}
                </div>
            </Card>
        );
    }
}

export default Survey

