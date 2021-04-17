import React, {Component} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';

class TemplateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal || false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.showModal !== state.showModal) {
      return {
        showModal: props.showModal,
      };
    }
    return null;
  }

  render() {
    return (
      <>
        <Modal
          animationType="none"
          transparent
          onRequestClose={() => this.props?.onRequestClose?.()}
          supportedOrientations={['portrait', 'landscape']}
          visible={this.state.showModal}
        >
          <View
            style={[
              styles.notificationContainer,
              this.props.customWrapStyle || {},
            ]}
          >
            <TouchableOpacity
              activeOpacity={0}
              onPress={this.props.onPressHideModal}
              style={styles.fullscreenContainer}
            />
            <View style={[styles.notificationBox, this.props.style]}>
              {this.props.children}
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000a8',
  },
  fullscreenContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
  },
  notificationBox: {
    flexDirection: 'column',
  },
});

export default TemplateModal;
