import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    // justifyContent: 'space-between',
    height: '100%',
  },

  bodyBox: {
    width: '100%',
  },

  search: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
  },

  avatarBox: {
    marginTop: 25,
    position: 'relative',
  },

  close: {
    position: 'absolute',
    left: 40,
    color: '#EB5757',
  },

  divider: {
    borderColor: '#E0E0E0',
    width: '100%',
    borderWidth: 0.3,
    marginBottom: 20,
    marginTop: 30,
  },

  box: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  btn: {
    width: '100%',
    borderRadius: 16,
    height: 50,
    paddingTop: 4,
    elevation: 0,
    color: '#828282',
    marginTop: 30,
    marginBottom: 30,
  },
});
