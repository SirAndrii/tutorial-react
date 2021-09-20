import React from 'react'; // подключение библиотеки React

import './App.css'; // подключение файла стилей
import { Add } from './components/Add'
import { News } from './components/News'
import newsData from './data/newsData'




class App extends React.Component {
  state = {
    news: newsData
  };
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };
  render() {
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        <News data={this.state.news} />
      </React.Fragment>
    );
  }
}

// скопировано все кроме ReactDOM.render

export default App;