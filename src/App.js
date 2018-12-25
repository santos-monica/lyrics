import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyric from './components/tracks/Lyrics'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyric} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
