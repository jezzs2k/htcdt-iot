/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import io from "socket.io-client";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '../../styles';
import { Button } from '../../components';
import {LoadingModal} from '../loadingModal';

export const socket = io('http://invoice-maker.tech:3000');

const ItemDevice = ({setStatusModal}) => {
  const navigation = useNavigation();
  const [isConnect, setConnect] = useState(false);

  const handleConnect = () => {
    setStatusModal(true);
    socket.disconnect();
    socket.connect();

    setTimeout(() => {
      if (socket.connected) {
        return;
      }
      setStatusModal(false);
      Alert.alert('Kết nối thất bại', 'Kiểm tra lại kết nối wifi của ESP8266 !')
    }, 4000);
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
      setStatusModal(false);
      setConnect(true);
    });

    socket.on("disconnect", () => {
      setConnect(false);
    });

    socket.on("connect-item", (val) => {
      console.log(val);
      setConnect(true);
    });

    return () => socket.disconnect();
  }, [])

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
        <Text style={styles.itemTwoTitle}>ESP8266</Text>
        {/* <Text style={styles.itemTwoSubTitle}>May hoat dong bao nhieu phut</Text> */}
        <Text style={[styles.itemTwoPrice, {color: isConnect ? '#2ed573' : '#fff'}]}>{isConnect ? 'Máy đang hoạt động' : 'Máy đang không hoạt động'}</Text>
        <TouchableOpacity disabled={isConnect} onPress={handleConnect} style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="cast-connected" size={30} color={isConnect ? '#2ed573' : '#fff'} />
          <Text style={[styles.itemTwoPrice, {fontSize: 16, marginHorizontal: 8}]}>{isConnect ? '' : 'Kết nối lại'}</Text>
        </TouchableOpacity>
        <View style={styles.containerBtn}>
          <Button
            disabled={!isConnect}
            style={[styles.btn]}
            caption="Theo dõi"
            bgColor="#2980b9"
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

export default LoadingModal()(ItemDevice);
