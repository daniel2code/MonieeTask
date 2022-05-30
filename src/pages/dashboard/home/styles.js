import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: "white",
  },

  topBox: {
    marginTop: 20,
  },

  iconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  valBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  valText: {
    fontSize: 40,
    fontWeight: '400',
  },

  balBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    width: 119,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn: {
    width: '47%',
    borderRadius: 16,
    height: 47,
    paddingTop: 4,
    elevation: 0,
    color: '#828282',
  },
});
