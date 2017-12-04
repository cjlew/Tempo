import React from 'react';
import { withRouter, Link }from 'react-router-dom';
import ReactDOM from 'react-dom';

class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {


  }

  render() {
    return(

    <li id='genre-index-list-item'>
      <Link onClick={this.handleClick} to={`/genres/${this.props.genre.id}`}>

        <div id='genre-index-item-img-cont'>
          <div id='genre-index-item-music-note'>
            <img className='genre-index-img' src={`${this.props.genre.image}`}></img>
          </div>
        </div>
      </Link>

      <br/>

      <Link to={`/genres/${this.props.genre.id}`}>
        <h3 id='genre-index-item-title'>{this.props.genre.title}</h3>
      </Link>

    </li>
  );
  }
}

export default withRouter(GenreIndexItem);
