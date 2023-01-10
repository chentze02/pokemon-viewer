import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const {message } = this.props;

    if (message !== prevProps.message) {
      if (message.deletePoke) alert.success(message.deletePoke);
      // if (message.addLead) alert.success(message.addLead);
      // if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));