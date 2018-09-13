import {connect} from 'react-redux';
import  View from './component/View';

const mapStateToProps = (state) => ({state});

export default  connect(mapStateToProps)(View);