import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
          <Text size={20} white>
            HỆ THÔNG THÔNG TIN IOT
          </Text>
        </View>
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
            Kết nôi ra toàn cầu 
          </Text>
          <Text size={30} bold white style={styles.title}>
            Dự án sản phẩm 
          </Text>
          <Button
            style={[styles.demoButton, { flex: 1 }]}
            bordered
            caption="Bắt đầu vào hệ thống"
            onPress={() => navigation.navigate('Grids')}
          />
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            Dự án phục vụ thức tế  và là bài tập cuối kỳ cho môn <Text>
              Hệ thống cơ điện tử 
                                                                 </Text> 
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.description} />
            </View>
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() => console.log('Thanh vien trong nhom')
              }
            >
              <Text white size={14}>
                Các thành viên trong nhóm
              </Text>
            </TouchableOpacity>
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
});
