import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'space-between',
    height: '100%',
  },

  topBox: {
    marginTop: 20,
  },

  btn: {
    width: '100%',
    borderRadius: 16,
    height: 50,
    paddingTop: 4,
    elevation: 0,
    color: '#828282',
  },

  balBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    width: 179,
    height: 60,
    flexDirection: 'row',
    padding: 10,
    marginTop: 40,
  },

  balTextBox: {
    marginLeft: 15,
  },

  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
  },

  inputBox: {
    width: '100%',
    marginTop: 25,
  },
});
