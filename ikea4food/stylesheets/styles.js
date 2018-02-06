import { StyleSheet } from 'react-native';

export const Colors = {
  'PRIMARY': 'teal',
  'SECONDARY': '#3D9970',
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
      container_drawerItems: {
        width: '100%',
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
      container_sliders: {
        flex: 0.7, 
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center'
      },
    containerReverse: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND,
    },
    drawer_top: {
      width: '100%',
      height: 150,
      backgroundColor: Colors.PRIMARY,
    },
    button_fullWidth: {
      width: '100%',
      backgroundColor: Colors.SECONDARY,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });