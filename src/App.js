import React from 'react'; // подключение библиотеки React

import './App.css'; // подключение файла стилей
import { Add } from './components/Add'
import { News } from './components/News'
//import newsData from './data/newsData'


class App extends React.Component {
  state = {
    //news: newsData
    news: null,
    isLoading: false, // статус для манипуляций "прелоадером" 
  };

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews;
    if (Array.isArray(state.news)){

      nextFilteredNews = [...state.news] 
  
      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'СПАМ'
        }
      })
  
      return { // возвращаем новое состояние
        filteredNews: nextFilteredNews,
      }
    }
    return null;
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => response.json())
      .then((data)=> this.setState({ isLoading: false, news: data }));
  }

  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };
  render() {
    const { news, isLoading } = this.state;

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Loadding... </p>}
        {Array.isArray(news) && <News data={ news } />}
      </React.Fragment>
    );
  }
}

// скопировано все кроме ReactDOM.render
export default App;