import { StyleSheet } from 'react-native';

export const Colors = {
  'PRIMARY': 'teal',
  'SECONDARY': 'aqua',
  'BACKGROUND' : '#F5FCFF',
  'FONT_GREY' : '#333333',
  'ICON_PRIMARY' : "#FFF",
}

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.BACKGROUND,
    },
    container_bottomNav:{
      flex: 0.10,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: Colors.PRIMARY,
    },
      container_bottomNavButtons: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
      },
    containerReverse: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: Colors.FONT_GREY,
      marginBottom: 5,
    },
  });