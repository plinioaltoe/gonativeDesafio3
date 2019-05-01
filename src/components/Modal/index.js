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
  state = {
    repoName: ""
  };

  _onAdd = () => {
    const { addRepositoryRequest } = this.props;
    const { repoName } = this.state;
    addRepositoryRequest(repoName);
    this.setState({ repoName: "" });
  };

  _closeModal = () => {
    const { changeStateModal } = this.props;
    changeStateModal();
    this.setState({ repoName: "" });
  };

  render() {
    const { repos, changeStateModal } = this.props;
    const { modalOpen } = repos;
    const { repoName } = this.state;

    return (
      <Modal animationType="fade" transparent={true} visible={modalOpen}>
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
              placeholder="Digite o nome do usuário"
              underlineColorAndroid="transparent"
              value={repoName}
              onChangeText={repoName => {
                this.setState({ repoName });
              }}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={this._closeModal}
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
