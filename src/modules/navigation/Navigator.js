import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { 
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconCalendar = require('../../../assets/images/drawer/calendar.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconPages = require('../../../assets/images/drawer/pages.png');
const iconComponents = require('../../../assets/images/drawer/components.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');

const drawerData = [
  {
    name: 'Trang chủ',
    icon: iconHome,
    screen: 'Home'
  },
  {
    name: 'Lịch làm việc',
    icon: iconCalendar,
    screen: 'Calendar',
  },
  {
    name: 'Theo dõi hệ thống',
    icon: iconGrids,
    screen: 'Grids',

  },
  {
    name: 'Thành viên trong nhóm',
    icon: iconPages,
    screen: 'Pages'
  },
  {
    name: 'Giới thiệu',
    icon: iconComponents,
    screen: 'Components',
  },
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{padding: 0}}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/drawer/user.png')}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={styles.userName}>Admin</Text>
          <Text style={{ color: '#4BC1FD' }}>Admin@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {drawerData.map((item, idx) => (
        <DrawerItem
          key={`drawer_item-${idx+1}`}
          label={() => (
            <View
              style={styles.menuLabelFlex}>
              <Image
                style={{ width: 20, height: 20}}
                source={item.icon}
              />
              <Text style={styles.menuTitle}>{item.name}</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate(item.screen)}
        />
      ))}
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image
              style={{ width: 20, height: 20}}
              source={iconSettings} 
            />
            <Text style={styles.menuTitle}>Cài đặt</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Components')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#3C38B1',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff'
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  userName: {
    color: '#fff',
    fontSize: 18
  },
  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
  },
});