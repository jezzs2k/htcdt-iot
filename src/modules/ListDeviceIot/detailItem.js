/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';

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

export default function DetailItem() {
  const [listItem, setListItem] = useState([]);

  const updateItem = (_listItem) => {
    const itemsDefault = [
      { color: '#e74c3c', total: 0 , type: 'red'},
      { color: '#2ed573', total: 0 , type: 'green'},
      { color: '#1e90ff', total: 0 , type: 'blue'},
    ];
  
    _listItem.forEach(item => {
      if (item.type === 'red') {
        itemsDefault[0].total += item.total;
      }
  
      if (item.type === 'green') {
        itemsDefault[1].total += item.total;
      }
  
      if (item.type === 'blue') {
        itemsDefault[2].total += item.total;
      }
    });
  
    return itemsDefault;
  }

  const timeOut = setTimeout(() => {
    if (Math.random() > 0.8) {
      setListItem((data) => ([...data, {color: '#e74c3c', total: 1, type: 'red'}]))
    }else if (Math.random() <= 0.8 && Math.random() > 0.4) {
      setListItem((data) => ([...data, {color: '#2ed573', total: 1, type: 'green'}]))
    }else{
      setListItem((data) => ([...data, {color: '#1e90ff', total: 1, type: 'blue'}]));
    }
  } , 1000);

  useEffect(() => {
    if(scrollRef){
      scrollRef.scrollToEnd({animated: true})
    };
  }, [listItem]);

  useEffect(() => () => () => {
      clearTimeout(timeOut);
    })
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View>
          {updateItem(listItem).map(item => (
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
              maxHeight: 200,
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
            <Button style={{minWidth: 100, marginHorizontal: 8}} caption="Start" />
            <Button style={{minWidth: 100, marginHorizontal: 8}} caption="Stop" bgColor="#ff4757" />
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
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: '#eee',
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  totalNumStyle: {
    fontWeight: '700'
  },
});
