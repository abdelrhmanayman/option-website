import React from 'react'
import { Card, Row, Col, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'

const { Text, Paragraph } = Typography

const Contact = () => {
    return (
        <Card>
            <Row align="middle" justify="center" type="flex">
                <Col>
                    <Text style={{ fontSize: "3.61rem", fontFamily: "Georgia,serif", color: "black" }}>How To Unsubscribe From Our Push Notifications</Text>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row align="middle" justify="center" type="flex">
                <Col span={15}>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        Push Notifications are Advertisements we send you from our Sponsors to your phone, tablet, or Desktop/Laptop. When you initially arrive to our site, we show you a prompt to see if you’d like to receive push notifications from us. If you provide your consent by clicking “Agree” on the prompt, then you start seeing our notifications.
                    </Paragraph>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        If you’d like to unsubscribe from receiving our push notifications, <a href="google.com">please click here to and you’ll be automatically unsubscribed</a>.
          </Paragraph>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        Please let us know how we are doing, write us a note to: <a href="/#">editorial@clevereconomy.com</a>
                    </Paragraph>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Divider type="horizontal" />
            <Row align="middle" justify="center" type="flex">
                <Col>
                    <Text>© 2019 Clevereconomy.com. All Rights Reserved.</Text>
                </Col>
            </Row>
            <br />
            <Row align="middle" justify="center" type="flex">
                <Col span={2}>
                    <Link to="/privacy" >Privacy Policy</Link>
                </Col>
                <Col span={2}>
                    <Link to="/" >Home</Link>
                </Col>
            </Row>
        </Card>
    )
}

export default Contact