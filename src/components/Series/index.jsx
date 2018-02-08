import React, { Component } from 'react';
import './styles.less';
import Serie from '../Serie';
import { getSeries } from '../../api/';

let totalResults = 100;

const getOffset = () => {
  const offset = Math.floor(((Math.random() * totalResults) + 1) - 10);
  return offset;
};

const retrieveSeries = (cb) => {
  const offset = getOffset();

  return getSeries(offset)
    .then((data) => {
      totalResults = data.total;
      cb(data);
    })
    .catch((err) => {
      cb(err);
    });
};

class Series extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
    };
    this.updateSeriesList = this.updateSeriesList.bind(this);
    this.randomSeries = this.randomSeries.bind(this);
  }

  componentDidMount() {
    return retrieveSeries(this.updateSeriesList);
  }

  randomSeries() {
    this.setState({
      series: [],
    });
    return retrieveSeries(this.updateSeriesList);
  }

  updateSeriesList(response) {
    console.log('resp: ', response);
    if (response.total > 0) {
      this.setState({
        series: response.results.slice(),
      });
    }
  }

  render() {
    return (
      <div className='series'>
        <header>
          <h2>Series</h2>
        </header>
        <div className="container">
          <div className='series__list'>
          {
            this.state.series.length > 0 ? (
              this.state.series.map(item => (
                <Serie
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  stories={item.stories}
                  thumb={item.thumbnail}
                />
              ))
            ) : 'Carregando...'
          }
          </div>
          <div className="text-center">
            <button
              onClick={this.randomSeries}
              className='series__btn-reload'
            >
              <img src="img/reload.svg" alt=""/>
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default Series;
