import React, { Component } from 'react';

import manager, { ComponentManager } from './manager';

type Props = {
  extraProps: Object;
  manager: ComponentManager,
  mainManager: typeof manager,
  Comp: any;
}

class Wrapper extends Component<Props> {
  stateManager: ComponentManager;

  constructor(props: Props) {
    super(props);

    this.state = { ...props.extraProps };
    this.stateManager = props.manager;
  }

  componentDidMount() {
    this.stateManager.events.on('state-change', this.setState, this);
  }

  render() {
    const { Comp, manager, mainManager } = this.props;

    return (
      <Comp manager={manager} mainManager={mainManager} {...this.state} /> 
    )
  }
}

export default Wrapper;