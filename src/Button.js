import React, { Component } from 'react';

import { Button, Radio, Icon } from 'antd';

class ReactButton extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'large'};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }
    componentWillUnmount(){
     console.log('componentWillUnmount2' )
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  buttonClick = (e) => {
      console.log('buttonClick' )
  this.props.history.goBack();

 }
  render() {
    let size=this.state.size
    return (
    <div>
    <Button onClick={this.buttonClick} type="primary">123Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
     <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
        <br /><br />
        <Button type="primary" size={size}>Primary</Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>Dashed</Button>
        <Button type="danger" size={size}>Danger</Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>

        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
          <Button type="primary" loading>
          Loading
        </Button>
         <Button type="dashed" block>Dashed</Button>
         <Button type="dashed">Dashed</Button>
            <Button shape="circle" icon="search" />
   <div className="icons-list">
    <Icon type="home" />
    <Icon type="setting" theme="filled" />
    <Icon type="smile" theme="outlined" />
    <Icon type="sync" spin />
    <Icon type="smile" rotate={180} />
    <Icon type="loading" />
  </div>

  </div>
    );
  }
}

export default ReactButton;




