import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilter } from '../actions';

const Header = (props) => {
  const buttons = () => {
    let buttons = [];
    let words = ['all', 'low', 'medium', 'high'];

    for (let i = 0; i < words.length; i++) {
      buttons.push(
        <button key={i} 
        onClick={() => props.changeFilter(words[i])} 
        className={props.filter === words[i] ? 'nice-btn' : null}
        >
          {words[i]}
        </button>
      )
    }
    return buttons
  }

  const btns = buttons();

  return (
    <header >
      <h2>Todos:</h2>
      <div className='header-btns'>
        {btns}
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);