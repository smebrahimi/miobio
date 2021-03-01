import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { Input } from '../components/TextInput'
import { Button } from '../components/Button'
import  baseStyles from '../styles/base'


const StyleGuideScreen= () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const onChange = (value) => {
    setValues(value);
  };

  const onPress = () => {
    console.log(`It's working.`);
  };

  return (
    <>
      <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={baseStyles.statusBar.backgroundColor} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
            <Text style={baseStyles.h1}>Typography</Text>
            <Text style={baseStyles.h1}>Freitag, 20. März</Text>
            <Text style={baseStyles.h2}>Nächste Lieferung</Text>
            <Text style={baseStyles.h3}>Pastinaken</Text>
            <Text style={baseStyles.p}>Wenn Du in die Ferien verreist, kannst Du
              dein Bio Mio Abo für diese Zeit unterbrechen.
              Du kannst deine Feriendaten im
              “Ferienstopps” Bereich dieser App
              hinzufügen.
            </Text>
            <Text style={baseStyles.strong}>4 Tage</Text>

            <View>
              <View style={baseStyles.ul.row}>
                <Text style={baseStyles.ul.bullet}>{'\u2022'}</Text>
                <Text style={baseStyles.ul.bulletText}>Freitag, 27. März</Text>
              </View>

              <View style={baseStyles.ul.row}>
                <Text style={baseStyles.ul.bullet}>{'\u2022'}</Text>
                <Text style={baseStyles.ul.bulletText}>Freitag, 27. März</Text>
              </View>

              <View style={baseStyles.ul.row}>
                <Text style={baseStyles.ul.bullet}>{'\u2022'}</Text>
                <Text style={baseStyles.ul.bulletText}>Freitag, 27. März</Text>
              </View>
            </View>

            <Input
              label="Email"
              name="email"
              placeholder="E-Mail"
              error={false}
              required
              onChange={onChange}
              value={values.email}
            ></Input>

            <Input
              name="password"
              placeholder="Password"
              error={true}
              required
              secureTextEntry
              onChange={onChange}
              error
              helperText="password is required"
              value={values.password}
            ></Input>

            <Button
              title="Ferienstopp hinzufügen"
              onPress={onPress}
            />
            <Button
              type="outlined"
              title="Ferienstopp hinzufügen"
              onPress={onPress}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 15
  }
});

export default StyleGuideScreen;
