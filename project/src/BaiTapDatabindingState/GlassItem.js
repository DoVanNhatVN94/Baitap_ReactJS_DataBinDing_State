import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
      let {dataGlass} = this.props;
    return (
      <img src={dataGlass.url} className='img-fluid'/>
    )
  }
}
