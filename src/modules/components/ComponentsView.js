import React from 'react';
import { StyleSheet, View, Text , Image, FlatList} from 'react-native';

import { colors, fonts } from '../../styles';

const arr = [
  {name: 'Lê Quang Khánh', image: 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-1/p200x200/165048769_2751880658395087_1372795915185990756_n.jpg?_nc_cat=109&_nc_map=control&ccb=1-3&_nc_sid=7206a8&_nc_ohc=lQyv3YkirDQAX-mYXDx&_nc_ht=scontent.fhan5-7.fna&tp=6&oh=72307ea0d21763a2e4f4a06f79820613&oe=60B68C69'},
  {name: 'Nguyễn Việt Hãi', image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/49043052_605752949847136_3915417604373610496_n.jpg?_nc_cat=110&_nc_map=control&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=ln4OtkodQzoAX_oBtXG&_nc_ht=scontent.fhan5-2.fna&oh=687b78f8d2190003ae69141f2c1dbbc0&oe=609EFF23'},
  {name: 'Vũ Thanh Hiếu', image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/144799745_1132762833825563_7754700132321813243_n.jpg?_nc_cat=110&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Rt__KhwuxokAX9maM_Z&_nc_ht=scontent.fhan5-2.fna&oh=2a9d3575952c61bd3e98f823f0e53290&oe=60A152F6'},
  {name: 'Phạm trường', image: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/137534116_101557391914880_8870788066757828537_n.jpg?_nc_cat=104&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7ATjR6-7eDEAX9RTE8h&_nc_ht=scontent.fhan5-4.fna&oh=59165f4e8e1bdf91ef14ec09b763b281&oe=60A159F9'},
  {name: 'Nguyễn Hưởng', image: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/137534116_101557391914880_8870788066757828537_n.jpg?_nc_cat=104&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7ATjR6-7eDEAX9RTE8h&_nc_ht=scontent.fhan5-4.fna&oh=59165f4e8e1bdf91ef14ec09b763b281&oe=60A159F9'},
  {name: 'Nguyễn Hồng Khoa', image: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/49822849_896679704056969_7405358899248758784_n.jpg?_nc_cat=107&_nc_map=control&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=jLvEBJZG8PQAX_S-Hu3&_nc_ht=scontent.fhan5-6.fna&oh=25b77e8dec77e61bc34fcb1c595229be&oe=60A1138A'},
];

export default function ComponentsScreen(props) {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{
        alignItems:'center',
        justifyContent: 'center',
      }}
      keyExtractor={({name}) => name}
      data={arr}
      numColumns={2}
      renderItem={({item}) =>  (
        <View style={{
          marginHorizontal: 8, 
          marginVertical: 2,
          alignItems: 'center',
          paddingVertical: 8
        }}
        >
          <Image source={{uri: item.image}} height={120} width={120} style={{flex: 1, width: 180, height: 190}} />
          <Text style={{
            fontWeight: '700',
            fontSize: 16,
          }}
          >{item.name}
          </Text>
        </View>
)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bluish,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  componentsSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 24,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
