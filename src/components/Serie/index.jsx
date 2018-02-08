import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const IMAGE_VARIANT = {
  fantastic: 'portrait_fantastic',
  uncanny: 'portrait_uncanny',
  incredible: 'portrait_incredible',
};

class Serie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };
    this.toggleSerieDetail = this.toggleSerieDetail.bind(this);
  }

  toggleSerieDetail() {
    console.log('show!');
    this.setState({
      showDetail: !this.state.showDetail,
    });
  }

  render() {
    return (
      <div className='col-md-3 serie'>
        <div
          onClick={this.toggleSerieDetail}
        >
          <figure>
            <img
              src={`${this.props.thumb.path}/${IMAGE_VARIANT.uncanny}.${this.props.thumb.extension}`}
              alt={this.props.title}
            />
            <figcaption>{this.props.title}</figcaption>
          </figure>
        </div>
        <div
          className={
            this.state.showDetail ?
            'serie-detail serie-detail--show' :
            'serie-detail'
          }
        >
          <div className='serie-detail-close-container'>
            <button
              onClick={this.toggleSerieDetail}
            >
              Fechar
            </button>
          </div>
          <div className='serie-detail-thumb'>
            <figure>
              <img
                src={`${this.props.thumb.path}/${IMAGE_VARIANT.incredible}.${this.props.thumb.extension}`}
                alt={this.props.title}
              />
              <figcaption>{this.props.title}</figcaption>
            </figure>
          </div>
          <div className='serie-detail-content'>
            <h2>{this.props.title}</h2>
            <p className="description">{this.props.description}</p>
            <p>{this.props.stories.items.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

Serie.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,

  stories: PropTypes.shape({
    items: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

};

export default Serie;
