import React, { Component } from "react";
import MapView from "react-native-maps";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoryActions } from "~/store/ducks/repository";

class Map extends Component {
  static propTypes = {
    changeStateModal: PropTypes.func.isRequired
  };

  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031
    }
  };

  render() {
    const { region } = this.state;
    const { changeStateModal } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          loadingEnabled
          onLongPress={e => changeStateModal(e.nativeEvent)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repository
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
