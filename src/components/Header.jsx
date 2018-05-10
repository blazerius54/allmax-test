import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilter } from '../actions';

const Header = (props) => {
    return (
      <header >
        <h2>Todos:</h2>        
        <div className='header-btns'>
          <button onClick={()=>props.changeFilter('low')}>low</button>
          <button onClick={()=>props.changeFilter('medium')}>medium</button>
          <button onClick={()=>props.changeFilter('high')}>high</button>
          <button onClick={()=>props.changeFilter('all')}>show all</button>
        </div>
      </header>
    )
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);