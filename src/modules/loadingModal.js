/* eslint-disable react/no-access-state-in-setstate */
import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import TemplateModal from './modal';

// eslint-disable-next-line import/prefer-default-export
export function LoadingModal() {
  return (WrappedComponent) => {
    // eslint-disable-next-line no-shadow
    class LoadingModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          showModal: false,
        };
      }

      onOpenAndCloseModal = (newStatus) => {
        if (newStatus === true || newStatus === false) {
          this.setState({showModal: newStatus});
        } else {
          this.setState({showModal: !this.state.showModal});
        }
      };

      setStatusModal = (showModal) => {
        this.setState({showModal});
      };

      render() {
        const {showModal} = this.state;
        return (
          <View style={{flex: 1}}>
            <TemplateModal showModal={showModal}>
              <ActivityIndicator
                color='#fff'
                size={20}
              />
            </TemplateModal>
            <WrappedComponent
              {...this.props}
              stateShowModal={showModal}
              setStatusModal={this.setStatusModal}
              onOpenAndCloseModal={this.onOpenAndCloseModal}
            />
          </View>
        );
      }
    }
    return LoadingModal;
  };
}
