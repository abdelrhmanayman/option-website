import React from 'react'
import { Card, Row, Col, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'

const { Text, Paragraph } = Typography

const PrivacyPolicy = () => {
    return (
        <Card>
            <Row align="middle" justify="center" type="flex">
                <Col>
                    <Text style={{ fontSize: "3.61rem", fontFamily: "Georgia,serif", color: "black" }}> Privacy Policy</Text>
                </Col>
            </Row>
            <Row align="middle" justify="center" type="flex">
                <Col span={15}>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        This Privacy Policy governs the manner in which CleverEconomy.com collects, uses, maintains and discloses information collected from users (each, a “User”) of the CleverEconomy.com website (“Site”). This privacy policy applies to the Site and all products and services offered by CleverEconomy.com.
                    </Paragraph>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        We allow third-party companies to serve ads and/or collect certain anonymous information when you visit our web site. These companies may use non-personally identifiable information (e.g., click stream information, browser type, time and date, subject of advertisements clicked or scrolled over) during your visits to this and other Web sites in order to provide advertisements about goods and services likely to be of greater interest to you. These companies typically use a cookie or third party web beacon to collect this information. To learn more about this behavioral advertising practice or to opt-out of this type of advertising, you can visit networkadvertising.org.
          </Paragraph>
                    <Paragraph style={{ fontFamily: "Georgia", lineHeight: "36px", fontSize: "22px" }}>
                        At CleverEconomy.com, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by CleverEconomy.com and how it is used. Log Files Like many other Web sites, CleverEconomy.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. Cookies and Web Beacons CleverEconomy.com does not use cookies. DoubleClick DART Cookie .:: Google, as a third party vendor, uses cookies to serve ads on CleverEconomy.com. .:: Google’s use of the DART cookie enables it to serve ads to users based on their visit to CleverEconomy.com and other sites on the Internet. .:: Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL – http://www.google.com/privacy_ads.html Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include …. These third-party ad servers or ad networks use technology to the advertisements and links that appear on CleverEconomy.com send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see. CleverEconomy.com has no access to or control over these cookies that are used by third-party advertisers. You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. CleverEconomy.com’s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers’ respective websites.
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
                    <Link to="/contact-us/">Contact Us</Link>
                </Col>
                <Col span={2}>
                    <Link to="/" >Home</Link>
                </Col>
            </Row>
        </Card>
    )
}

export default PrivacyPolicy