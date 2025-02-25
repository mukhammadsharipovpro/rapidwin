import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import RapidWinHeader from '../components/RapidWinHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <RapidWinHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Formula 1', '05.10 15:00', 'British Grand Prix \n' + 'Race Day')}
        {renderBroadcast('MotoGP', '07.10 16:30', 'Italian Grand Prix \n' + 'Main Event')}
        {renderBroadcast('NASCAR', '09.10 19:00', 'Daytona 500 \n' + 'Final Race')}
        {renderBroadcast('Formula E', '11.10 18:00', 'Berlin E-Prix \n' + 'Race Day')}
        {renderBroadcast('IndyCar', '13.10 17:30', 'Indianapolis 500 \n' + 'Main Event')}
        {renderBroadcast('World Rally', '15.10 14:45', 'Rally Finland \n' + 'Day 2')}
        {renderBroadcast('DTM', '17.10 16:00', 'Nürburgring \n' + 'Race Day')}
        {renderBroadcast('Super GT', '19.10 15:00', 'Fuji Speedway \n' + 'Main Event')}
        {renderBroadcast('Extreme E', '21.10 14:30', 'Arctic X Prix \n' + 'Final Race')}
        {renderBroadcast('Isle of Man', '23.10 13:00', 'Senior TT Race')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 20,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.main,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
