import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
import SearchBox from './components/SearchBox'
import makeExpanding from './components/expanding-animation';

injectTapEventPlugin();

const ExpandingSearchBox = makeExpanding(SearchBox);

class App extends Component {
  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <MuiThemeProvider>
        <div style={style}>
          <ExpandingSearchBox />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;