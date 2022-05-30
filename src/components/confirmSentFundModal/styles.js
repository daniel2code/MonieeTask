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

  bodyBox: {
    alignItems: 'center',
  },

  title: {
    fontSize: 17,
    marginTop: 25,
    fontWeight: "700"
  },

  text: {
    textAlign: 'center',
    marginTop: 10,
    width: "70%",
    fontSize: 14,
  },

  btn: {
    width: '100%',
    borderRadius: 16,
    height: 50,
    paddingTop: 4,
    elevation: 0,
    color: '#828282',
  },
});
