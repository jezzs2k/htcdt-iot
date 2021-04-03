import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';

const items = [
  { color: 'red', total: 10 },
  { color: 'green', total: 14 },
  { color: 'blue', total: 17 },
];

const RenderItem = ({ color, total }) => (
  <View style={styles.containerItem}>
    <View style={[styles.designItem, { backgroundColor: color }]} />
    <View>
      <Text size={20} white>
        So luong san pham:{' '}
        <Text size={24} white>
          {total}
        </Text>
      </Text>
    </View>
  </View>
);

export default function DetailItem() {
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
            Hien thi thong bao
          </Text>
          <View
            style={{
              minHeight: 100,
              maxHeight: 200,
              borderColor: 'red',
              borderWidth: 4,
              paddingHorizontal: 8,
              maxWidth: '90%',
              minWidth: '90%',
            }}
          >
            <ScrollView
              snapToEnd
              invertStickyHeaders
              scrollsToTop
              scrollEnabled
            >
              <Text size={18} white>
                Ten sdsd: Update thong tin
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin mau do
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin mau do
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin mau do
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin mau do
              </Text>
              <Text size={18} white>
                Ten sdsd: Update thong tin mau do
              </Text>
              <Text size={18} white>
                Ten sdsd: upda tedadas,d update cai quan que j
              </Text>
              <Text size={18} white>
                Ten sdsd: upda tedadas,d update cai quan que j
              </Text>
              <Text size={18} white>
                Ten sdsd: upda tedadas,d update cai quan que j
              </Text>
              <Text size={18} white>
                Ten sdsd: upda tedadas,d update cai quan que j
              </Text>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 16, justifyContent: 'space-between'}}>
            <Button style={{minWidth: 100, marginHorizontal: 8}} />
            <Button style={{minWidth: 100, marginHorizontal: 8}}  />
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
});
