'use strict'
import React from 'react';

import { Paper, GridList, GridTile, IconButton, StarBorder } from 'material-ui';

module.exports = React.createClass({
  displayName: 'HelloReact',

  render: function(){
    return (
      <GridList
      cols={3}
      cellHeight={340}
      style={{overflowY: 'auto'}}>
        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

        <GridTile>
          <Paper zDepth={1} style={{width: 300, height: 300, 'margin-left': 20}}>
            <p>zDepth=1</p>
          </Paper>
        </GridTile>

      </GridList>
    );
  }
})
