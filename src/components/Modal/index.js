import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoryActions } from "~/store/ducks/repository";

import { styles } from "./styles";

class ModalNative extends Component {
  setmodalOpen(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { repos, changeStateModal } = this.props;
    const { modalOpen, coords } = repos;
    console.tron.log(modalOpen, coords);
    return (
      <Modal animationType="fade" transparent={false} visible={modalOpen}>
        <KeyboardAvoidingView
          style={styles.modalContainer}
          behavior="padding"
          enabled
        >
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Adicionar repositório</Text>
            <TextInput
              style={styles.boxInput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="transparent"
              onChangeText={text => {}}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={changeStateModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={this._onAdd}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
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
)(ModalNative);
