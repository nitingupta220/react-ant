import React, { Component, Fragment } from "react";
import { Menu, Icon, Row, Col, message } from "antd";
import "./index.css";
import image from "./background.jpeg";
import image1 from "./background.jpeg";
import Image from "./Screenshot from 2018-12-18 11-55-13.png";
import Image1 from "./Screenshot from 2018-12-18 11-55-13.png";
import isVowel from "./vowel";

const { SubMenu } = Menu;

class App extends Component {
  state = {
    current: "timeline",
    isHide: true,
    spanValue: 24,
    count: 0,
    pageText: "",
    imageList: [
      { id: 1, img: image },
      { id: 2, img: Image },
      { id: 3, img: image1 },
      { id: 4, img: Image1 }
    ]
  };

  componentDidMount() {
    const text = document.getElementById("root").textContent;
    isVowel(text);
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  listView = () => {
    this.setState({ spanValue: 24 });
  };
  gridView = () => {
    this.setState({ spanValue: 6 });
  };

  about = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({
      imageList: this.state.imageList.reverse()
    });
  };
  more = () => {
    this.setState({ count: 0 });
  };
  info = () => {
    message.info("Functionality not available");
  };

  render() {
    return (
      <Fragment>
        <Menu
          // onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                Timeline
                <Icon type="down" />
              </span>
            }>
            <Menu.ItemGroup>
              <Menu.Item key="list view" onClick={this.listView}>
                List View
              </Menu.Item>
              <Menu.Item key="grid view" onClick={this.gridView}>
                Grid View
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="about" onClick={this.about}>
            About
          </Menu.Item>
          <Menu.Item key="friends" onClick={this.info}>
            Friends 1,264
          </Menu.Item>
          <Menu.Item key="photos" onClick={this.info}>
            Photos
            <Icon type="down" />
          </Menu.Item>
          <Menu.Item key="archive" onClick={this.info}>
            <Icon type="lock" />
            Archive
          </Menu.Item>
          <Menu.Item key="more" onClick={this.more}>
            More
            <Icon type="down" />
          </Menu.Item>
        </Menu>
        Clicked About: {this.state.count}
        <div className="gutter-example">
          <Row>
            {this.state.imageList.map((image, index) => (
              <Col
                className="gutter-row"
                span={this.state.spanValue}
                key={index}>
                <div className="gutter-box">
                  <img src={image.img} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default App;
