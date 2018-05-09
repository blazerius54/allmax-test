import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilter} from '../actions';

const Header = (props) => {
    return (
      <div>
        <button onClick={()=>props.changeFilter('low')}>low</button>
        <button onClick={()=>props.changeFilter('medium')}>medium</button>
        <button onClick={()=>props.changeFilter('high')}>high</button>
        <button onClick={()=>props.changeFilter('all')}>show all</button>
      </div>
    )
}

// function mapStateToProps (state) {
//     return {
//         tasks: state
//     } 
// }

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);
// export default Header;