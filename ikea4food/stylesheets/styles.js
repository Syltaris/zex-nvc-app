import { StyleSheet } from 'react-native';

export const Colors = {
  'PRIMARY': 'teal',
  'SECONDARY': '#3D9970',
  'BACKGROUND' : '#F5FCFF',
  'FONT_GREY' : '#333333',
  'ICON_PRIMARY' : "#FFF",
}

export default styles = StyleSheet.create({
  text_header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  text_shoppingCartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
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
    container_shoppingCart: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  containerReverse: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: Colors.BACKGROUND,
  },
  card_shoppingCart: {
    width: '90%',
    justifyContent: 'center',
  },
    card_shoppingCartItem: {
      width: '100%',
      margin: 0,
    },
  drawer_top: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.PRIMARY,
  },
  button_fullWidth: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center'
  }
});