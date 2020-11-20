import React, { Component } from 'react';

import './SearchForm.scss';

export default class SearchForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: '',
      };
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
   }
   onUpdateSearch(e) {
      const term = e.target.value;
      this.setState({ term: term });
      this.props.onUpdateSearch(term);
   }

   render() {
      return (
         <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по задачам"
            onChange={this.onUpdateSearch}
         />
      );
   }
}
