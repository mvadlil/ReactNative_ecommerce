import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {RootContext} from '../../App'

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  

    }
  }
  render() { 
    const styles = StyleSheet.create({
      // card ===================
      cardBoxContainer: {
        alignItems: 'center',
      },
      cardBox: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        width: 375,
        height: 'auto'
      },
      cardImage: {
        width: 300,
        height: 400,
        marginTop: 10
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      cardPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
      },
      cardPriceValue: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
      },
      cardDescription: {
        padding: 30,
        fontSize: 15,
        fontWeight: 'bold',
      }
      // =========================
    });
    return (  
      <RootContext.Consumer>
        {
          value => {
            const index = value.state.detailIndex
            return(
              <View style={styles.cardBoxContainer}>
                <View style={styles.cardBox}>
                  <Image 
                    style={styles.cardImage}
                    source={value.state.homeScreen[index].image}
                  />
                  <Text style={styles.cardTitle}>{value.state.homeScreen[index].name}</Text>
                  <Text style={styles.cardPrice}>Price :</Text>
                  <Text style={styles.cardPriceValue}>Rp. {value.state.homeScreen[index].price}</Text>
                  <Text style={styles.cardDescription}>
                      {value.state.homeScreen[index].desc}
                  </Text>
                </View>
              </View>
            )
          }
        }
      </RootContext.Consumer>
    );
  }
}
 
export default DetailScreen;