import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../../components/layout';

import { getAPIData } from '../../redux/home/actions';
import { selectApiData } from '../../redux/home/selectors';

// styling
import { AppContainer, AppHeader, RedContainer } from './styles';

const getMyIp = (apiData) => (
  (apiData && apiData.origin) && apiData.origin.split(', ')[1]
);

export class Home extends Component {
  componentWillMount() {
    this.props.actions.getAPIData();
  }

  render() {
    return (
      <Layout>
        <AppContainer>
          <AppHeader>
            <h2>Welcome to React</h2>
          </AppHeader>
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RedContainer className="app-intro">
            Your IP is: {getMyIp(this.props.apiData)}
          </RedContainer>
        </AppContainer>
      </Layout>
    );
  }
}

Home.defaultProps = {
  apiData: {},
};

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
