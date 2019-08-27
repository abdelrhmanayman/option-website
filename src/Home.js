import React, { Component } from 'react';
import { Card, Row, Col, Divider, Typography, Button, Input } from 'antd'
import { Link } from "react-router-dom";

const { Text, Paragraph } = Typography
const womanImage = require('./assets/woman.webp')
const manImage = require('./assets/man.webp')
const mapImage = require('./assets/map.webp')

class App extends Component {
    render() {
        return (
            <Card>
                <Row align="middle" justify="center" type="flex">
                    <Col>
                        <Text strong style={{ fontSize: 20, fontFamily: "Georgia,serif" }}>
                            <Link style={{ color: "grey" }} to="/survey">Take a Quick Survey, CLICK HERE!!!</Link>
                        </Text>
                    </Col>
                </Row>
                <Divider type="horizontal" />
                <Row align="middle" justify="center" type="flex">
                    <Col>
                        <Text style={{ fontSize: "3.61rem", fontFamily: "Georgia,serif", color: "black" }}>
                            US Program Can Cut $260/Month Off
            </Text>
                    </Col>
                </Row>
                <Row align="middle" justify="center" type="flex">
                    <Col >
                        <Text style={{ fontSize: "3.61rem", fontFamily: "Georgia,serif", marginLeft: 70, color: "black" }}>
                            Your House Payment
            </Text>
                    </Col>
                </Row>
                <br />
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col push={5} span={10}>
                        <Row>
                            <Col span={2} pull={1}>
                                <img src={manImage} alt="manImage" style={{ width: "auto", maxHeight: "25px", borderRadius: "130px" }} />
                            </Col>
                            <Col span={22} pull={2}>
                                Terry Jefferson | Tuesday, August 27, 2019
                </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row align="middle" justify="center" type="flex">
                    <Col>
                        <img alt="manImage" src={womanImage} />
                    </Col>
                </Row>
                <br />
                <Row align="middle" justify="center" type="flex">
                    <Col span={15}>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                            The latest mortgage stimulus program rolled out by The Federal Home Loan Mortgage Corporation (FHLMC), better known as Freddie Mac, offers massive savings to millions of homeowners.
              <mark>Typical homeowners are expected to see savings of $260 per month ($3,120 per year) off their house payment!</mark>
                        </Paragraph>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                            There have been many mortgage programs since the 2008 financial downturn, but this new program which is called the <u style={{ color: "red" }}>Enhanced Relief Refinance (FMERR) initiative</u>, offers some impressive benefits that will likely benefit most homeowners. Many are calling it one of the best refinance programs of this decade. The Fed wants banks to cut your mortgage rate and Fredie Mac has introduced this program to do just that. Typical homeowners in your area have already saved thousands in mortgage payments.
          </Paragraph>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                            <u style={{ color: "red" }}> When homeowners visit this website to see if they are elgible </u> , they are surprised to learn about this simple house payment reduction program that can lower their mortgage rate and can drastically reduce their payment. <mark>If you want to lower your mortgage payments, pay off your mortgage faster or get some extra needed cash out, this program will allow you to do just that! </mark>
                        </Paragraph>
                    </Col>
                </Row>
                <Row align="middle" justify="start" type="flex" style={{ borderTop: "1px solid rgba(181,181,181,.5)", borderBottom: "1px solid rgba(181,181,181,.5)" }}>
                    <Col span={8} push={4} style={{ marginTop: 40, marginBottom: 40 }}>
                        <Text style={{ fontSize: "20px", fontWeight: "700", display: "block" }}  >
                            Enter your Zip Code & see if you can reduce your house payment!
              </Text>
                    </Col>
                    <Col span={16} push={4} style={{}}>
                        <Row>
                            <Col span={3}>
                                <Input style={{ width: 130, height: 60, borderRadius: 0 }} placeholder="Enter Zip Code" size="large" />
                            </Col>
                            <Col span={3} push={1}>
                                <Button size="large" type="primary" style={{ color: "white", height: 60, width: 130, borderRadius: 0 }}> Continue</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col push={4}>
                        <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                            Best Refinance Program Of This Decade
            </Text>
                    </Col>
                </Row>
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col span={15} push={4}>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px", color: 'black' }}>
                            Sadly, some people think this program is "too good to be true" or only available to people in need of assistance. This is absolutly not true, <a href="google.com">Enhanced Relief Refinance</ a> is designed for ALL homeowners and to date has reduced mortgage payments for millions of Americans. Moreover, homeowners with good credit see even greater savings!
            </Paragraph>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px", color: 'black' }}>
                            If you want to lower your mortgage payments or eliminate years off your mortgage, it’s crucial that you act now. You may even take some cash out of your home to help you with paying off debts, bills, home renovations, your child’s education, or that much needed vacation.
              </Paragraph>
                    </Col>
                </Row>
                <br />
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col push={4}>
                        <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                            Take Advantage Of These Benefits
            </Text>
                    </Col>
                </Row>
                <Row align="middle" justify="start" type="flex">
                    <Col push={4} span={14}>
                        <ul>
                            <li style={{ fontSize: "22px", fontFamily: "Georgia" }}>Save an average of $260 on your monthly payment. Example: If your payment is $1,750/Month, your new payment will likely be $1490/Month.)</li>
                            <li style={{ fontSize: "22px", fontFamily: "Georgia" }}>Eliminate years off your mortgage and save monthly</li>
                            <li style={{ fontSize: "22px", fontFamily: "Georgia" }}>Take cash out for home improvements, paying off debts, or for college tuition.</li>
                        </ul>
                    </Col>
                </Row>
                <br />
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col push={4}>
                        <Text style={{ fontSize: "32px", color: "black", fontFamily: "Georgia,serif" }}>
                            How Do I Find Out If I'm Eligible?
            </Text>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={15} push={4}>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px", color: 'black' }}>
                            Click on your state below to get started, which takes less than 2 minutes. You will then have an opportunity to compare the best savings offers available to you.
            </Paragraph>
                    </Col>
                </Row>
                <br />
                <Row align="middle" justify="center" type="flex">
                    <Col>
                        <img alt="mapImage" src={mapImage} />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row align="middle" justify="start" type="flex">
                    <Col push={4}>
                        <Text style={{ fontSize: "38px", color: "black", fontFamily: "Georgia,serif" }}>
                            Act Now & Start Saving Money Immediately
            </Text>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={15} push={4}>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px", color: 'black' }}>
                            <u style={{ color: "red" }}>Click here to see if you qualify for the Enhanced Relief Refinance (FMERR) initiative.</u> In just a few minutes, you could get matched with reputable Enhanced Relief lenders and see which lender will give you the most monthly savings.
            </Paragraph>
                        <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px", color: 'black' }}>
                            <u style={{ color: "red" }}>This website</u> is one of the country's largest and most respected mortgage comparison services. They are currently connecting smart homeowners like yourself with competitive mortgage rates. Service is fast, easy, and 100% free with no obligation. It takes less just a few minutes- you have nothing to lose! You will be very surprised to see how much you'll save.
            </Paragraph>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row align="middle" justify="center" type="flex">
                    <Col>
                        <Button type="primary" style={{ width: "550px", height: "100px", borderRadius: 0, boxShadow: "0 5px 10px 0 rgba(10,200,179,.4) !important" }}><Text style={{ fontSize: "27px", color: "white" }}>CLICK TO SEE IF YOU QUALIFY »</Text></Button>
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
                        <Link to="/contact-us/" > Contact us</Link>
                    </Col>
                    <Col span={2}>
                        <Link to="/privacy" > Privacy Policy</Link>
                    </Col>
                </Row>
            </Card>
        )
    }
}


export default App;
