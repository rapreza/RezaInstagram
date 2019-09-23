/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://instagram.com' }}
      />
    );
  }
}

export default MyWeb