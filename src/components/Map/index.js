import React, { Component } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoryActions } from "~/store/ducks/repository";

import { styles } from "./styles";

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

  _openModal = e => {
    e.persist();
    const { changeStateModal } = this.props;
    changeStateModal(e.nativeEvent);
  };

  render() {
    const { region } = this.state;
    const { repos } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          loadingEnabled
          onLongPress={this._openModal}
        >
          {repos &&
            repos.map(repo => (
              <Marker
                key={repo.id}
                coordinate={repo.coordinate}
                title={repo.name}
                description={repo.bio}
              >
                <Image
                  style={styles.avatarMap}
                  alt="avatar"
                  source={{ uri: repo.avatar_url }}
                />
              </Marker>
            ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repository.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
