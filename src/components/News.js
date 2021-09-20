import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
  renderNews = () => {
    const { data } = this.props
    let newsTemplate = null

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }
  render() {
    const { data } = this.props

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={'news__count'}>
            Всего новостей: {data.length}
          </strong>
        ) : null}
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
}

export { News }

/* import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' 
import { Article } from './Article'

class News extends React.Component {

    state = { // создали состояние
      filteredNews: this.props.data,
    }

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews = [...props.data] // было nextProps - переименовали
      
        nextFilteredNews.forEach((item, index) => {
          if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
            item.bigText = 'СПАМ'
          }
        })
      
        return { // возвращаем новое состояние
          filteredNews: nextFilteredNews,
        }
    }

    
    renderNews = () => {
      const { filteredNews } = this.state // используем состояние
      let newsTemplate = null
  
      if (filteredNews.length) { // везде data заменена на filteredNews
        newsTemplate = filteredNews.map(function(item) {
          return <Article key={item.id} data={item} />
        })
      } else {
        newsTemplate = <p>К сожалению новостей нет</p>
      }
  
      return newsTemplate
    }
    render() {
      const { filteredNews } = this.state // аналогично, используем состояние
  
      return (
        <div className="news">
          {this.renderNews()}
          {filteredNews.length ? (
            <strong className={'news__count'}>
              Всего новостей: {filteredNews.length}
            </strong>
          ) : null}
        </div>
      )
    }
  }
  
  News.propTypes = {
    data: PropTypes.array.isRequired
  };

  export { News } // именованный экспорт */