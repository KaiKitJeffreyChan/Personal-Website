import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import image from "../pictures/monke.jpeg";

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'Covid Inventory Tracker',
         <img src={image} height="250px" width="350px"/>),
      this.renderItem(2, 'LibGDX Game', <Text>Content 2</Text>),
      this.renderItem(3, 'Website', <Text>Content 3</Text>)
    ];
  }

  renderItem(key, title, content) {
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
    );
  }
}