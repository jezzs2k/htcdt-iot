/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';
import {socket} from './itemDevice';
import {LoadingModal} from '../loadingModal';

let scrollRef;

const RenderItem = ({ color, total }) => (
  <View style={styles.containerItem}>
    <View style={[styles.designItem, { backgroundColor: color }]} />
    <View>
      <Text size={20} white>
        Số lượng sản phẩm:{' '}
        <Text size={24} style={styles.totalNumStyle} white>
          {total}
        </Text>
      </Text>
    </View>
  </View>
);

function DetailItem({setStatusModal}) {
  const navigation = useNavigation();

  const [listItem, setListItem] = useState([]);
  const [items, setItems] = useState([
    { color: '#e74c3c', total: 0 , type: 'red'},
    { color: '#2ed573', total: 0 , type: 'green'},
    { color: '#1e90ff', total: 0 , type: 'blue'},
  ]);

  const handleStop = () => {
    setStatusModal(true);
    socket.emit('stop-device', {
      isStop: true,
    });

    setTimeout(() => {
      navigation.goBack();
      socket.disconnect();
      setStatusModal(false);
    }, 2000)
  };

  const updateItem = (_listItem, val) => _listItem.map((item) => {
      if (item.type === val.type) {
        return val;
      };

      return item;
    })

  useEffect(() => {
    socket.on('colors-to-app', (val) => {
      setListItem((data) => ([...data, val]));
      setItems((data) => updateItem(data, val))
    })
  }, [])

  useEffect(() => {
    if(scrollRef){
      scrollRef.scrollToEnd({animated: true})
    };
  }, [listItem]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Chi tiết sản phẩm',
      headerTitleStyle: {
        alignItems: 'center',
        color: '#fff',
        justifyContent: 'center',
        width: '100%',
      },
    })
  }, [])
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View>
          {items.map(item => (
            <RenderItem
              key={item.color}
              color={item.color}
              total={item.total}
            />
          ))}
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginVertical: 16,
          }}
        >
          <Text size={18} white style={{ marginVertical: 8 }}>
            Theo dõi chi tiết
          </Text>
          <View
            style={{
              minHeight: 40,
              maxHeight: (Dimensions.get('window').height*25)/100,
              borderColor: '#ecf0f1',
              borderWidth: 2,
              paddingHorizontal: 8,
              maxWidth: '90%',
              minWidth: '90%',
              borderRadius: 10,
            }}
          >
            <ScrollView ref={(ref) => {
              scrollRef = ref
            }}
            >
              {listItem.map((item, i) => {
                switch (item.type) {
                  case 'red':
                    return  (
                      <Text key={`${i}`} size={18} white>
                        - Thêm 1 sản phẩm vào phía bắc
                      </Text>
)
                   case 'green':
                    return  (
                      <Text key={`${i}`} size={18} white>
                        - Thêm 1 sản phẩm vào phía trung
                      </Text>
)
                
                  default:
                    return  (
                      <Text key={`${i}`} size={18} white>
                        - Thêm 1 sản phẩm vào phía nam
                      </Text>
)
                }
              })}
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 16, justifyContent: 'space-between'}}>
            <Button style={{minWidth: 100, marginHorizontal: 8}} caption="Stop" bgColor="#ff4757" onPress={handleStop} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
    color: '#fff',
    borderColor: '#fff',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  designItem: {
    borderRadius: 100,
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#eee',
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 8,
  },
  totalNumStyle: {
    fontWeight: '700'
  },
});

export default LoadingModal()(DetailItem)