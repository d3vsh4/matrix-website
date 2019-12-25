import React, { Component } from "react";
import { Row, Col } from "antd";
import { Layout, Content, Button } from "antd";
import { Typography } from "antd";
import "./Homepage.less";
const { Title } = Typography;
import { Card } from "antd";
const { Meta } = Card;

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Title className="text-center text-bold">Nav Bar</Title>
        <div className="login-div">
          <div className="l-img" />
          <div className="l-div" />
        </div>
        <div className="seperator" />
        <div className="feature-div">
          <div className="text-center text-bold heading">
            FEATURES OF TEST SERIES
          </div>
          <div className="feature-grid">
            <Row gutter={18}>
              <Col span={6}>
                <Card className="feature-card" bordered={true}>
                  <div>
                    <img src="https://i.ibb.co/D1s5bh9/4.png" />
                    <h3>
                      <b>Learn from best</b>
                    </h3>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card className="feature-card" bordered={true}>
                  <div>
                    <img src="https://i.ibb.co/D1s5bh9/4.png" />
                    <h3>
                      <b>Anywhere, Anytime</b>
                    </h3>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card className="feature-card" bordered={true}>
                  <div>
                    <img src="https://i.ibb.co/D1s5bh9/4.png" />
                    <h3>
                      <b>Unlimited Access</b>
                    </h3>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card className="feature-card" bordered={true}>
                  <div>
                    <img src="https://i.ibb.co/D1s5bh9/4.png" />
                    <h3>
                      <b>Acedmic Planner</b>
                    </h3>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="feature-table">
            <div style={{ background: "#ECECEC", padding: "30px" }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Card className="f-cell" bordered={false}>
                    <div>
                    <img src="https://drive.google.com/open?id=13teuCnhulnmwAHkeu-8t_N0ZyGRh4pVY" />
                    <h3>
                      <b>Quetion-Solving</b>
                    </h3>
                  </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
