/* eslint-disable no-console */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors, fonts } from '../../styles';
import { Button } from '../../components';
import socket from './socket';



const ItemDevice = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity key="item.id" style={styles.itemTwoContainer} disabled>
      <View style={styles.itemTwoContent}>
        <Image
          style={styles.itemTwoImage}
          resizeMode="cover"
          source={{
            uri:
              'https://baocongnghe.online/wp-content/uploads/2020/11/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg',
          }}
        />
        <View style={styles.itemTwoOverlay} />
        <Text style={styles.itemTwoTitle}>Ten may: He thong 1</Text>
        <Text style={styles.itemTwoSubTitle}>May hoat dong bao nhieu phut</Text>
        <Text style={styles.itemTwoPrice}>May Hoat dong</Text>
        <View style={styles.containerBtn}>
          <Button
            style={[styles.btn]}
            caption="Theo dõi"
            bgColor="green"
            onPress={() => navigation.navigate('DetailItem')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    alignItems: 'flex-end',
  },
  btn: {
    maxWidth: 200,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.6,
  },
});

export default ItemDevice;
