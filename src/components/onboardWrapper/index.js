import {View} from 'react-native';
import React from 'react';

import {Headline, Paragraph, withTheme, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

const Index = ({
  children,
  theme,
  title,
  text,
  btnText,
  arrow,
  center,
  changeRoute,
  navigation,
}) => {
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <View style={[styles.topBox, center && {alignItems: 'center'}]}>
        {arrow && (
          <Icon
            name="arrowleft"
            size={25}
            color="#000"
            onPress={() => navigation.goBack()}
          />
        )}
        <Headline style={[styles.titleText, {color: colors.title}]}>
          {title}
        </Headline>

        <Paragraph style={[styles.paraText, {color: colors.text}]}>
          {text}
        </Paragraph>

        <View style={styles.wrapperBox}>{children}</View>
      </View>

      {btnText && (
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => changeRoute()}
          style={styles.btn}>
          {btnText}
        </Button>
      )}
    </View>
  );
};

export default withTheme(Index);
