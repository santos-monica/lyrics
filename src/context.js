import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext()

export class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      track_list: [],
      heading: 'Top 10 tracks'
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=BR&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res => {
      console.log(res.data)
      const { track_list } = res.data.message.body
      this.setState({ track_list })
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer