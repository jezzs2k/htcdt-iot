import React from 'react';
import { View } from 'react-native';
import Smartconfig from 'react-native-smartconfig-2';

import ItemDevice from './itemDevice';

const ListIot = () => {
    Smartconfig.start({
        // type: 'esptouch', // or airkiss, now doesn't not effect
        // ssid: 'wifi-network-ssid-base64',
        // bssid: 'wifi-network-bssid-base64', // "" if not need to filter (don't use null)
        password: '!Onlinebizsoft123!',
        taskCount: 1,
      })
        .then(results => {
          // Array of device success do smartconfig
          console.log(results);
          /* [
              {
                'bssid': 'device-bssi1', //device bssid
                'ipv4': '192.168.1.11' //local ip address
              },
              {
                'bssid': 'device-bssi2', //device bssid
                'ipv4': '192.168.1.12' //local ip address
              },
              ...
            ] */
        })
        .catch((error) => {
            console.log("error", error)
        });

  return <ItemDevice />;
};

export default ListIot;
