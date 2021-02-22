import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import {RootContext} from '../../App'

class CartScreen extends Component {
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
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        width: 375,
        height: 'auto',
      },
      containerImageAndDetails: {
        flexDirection: 'row'
      },
      containerImage: {
        padding: 10
      },
      cardImage: {
        width: 75,
        height: 100,
        marginTop: 10
      },
      containerDetails: {
        paddingTop: 18,
        paddingLeft: 10
      },
      containerPriceAndQty: {
        flexDirection: 'row'
      },
      cardQty: {
        paddingLeft: 30
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
        marginBottom: 15
      },
      cardButtonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 10
      },
      cardButton : {
        margin: 5,
      },
      cardTotalPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5,
        paddingTop: 5
      }
      // =========================
    });
    return (  
      <RootContext.Consumer>
        {
          value => {
            return(
              <SafeAreaView>
                <ScrollView>
                  {/* card */}
                  {value.state.cartScreen.map((x,i) => (
                    <View style={styles.cardBoxContainer} key={i}>
                        {/* View CardBox */}
                        <View style={styles.cardBox}>
                            {/* Container Image and Details */}
                            <View style={styles.containerImageAndDetails}>
                                {/* View Image */}
                                <View style={styles.containerImage}>
                                  <Image 
                                    style={styles.cardImage}
                                    source={x.image}
                                  />
                                </View>
                                {/* View Details */}
                                <View style={styles.containerDetails}>
                                  <Text style={styles.cardTitle}>{x.name}</Text>
                                  <View style={styles.containerPriceAndQty}>
                                    <View>
                                      <Text style={styles.cardPrice}>Price :</Text>
                                      <Text style={styles.cardPriceValue}>Rp. {x.price}</Text>
                                    </View>
                                    <View style={styles.cardQty}>
                                      <Text style={styles.cardPrice}>Qty :</Text>
                                      <Text style={styles.cardPriceValue}> {x.qty} </Text>
                                    </View>
                                  </View>
                                </View>
                            </View>
                            
                            {/* View Button */}
                            <View style={styles.cardButtonContainer}>
                              <Button
                                  style={styles.cardButton}
                                  title=" + "
                                  onPress={() => value.addQty(i)}
                              />
                              <Button
                                  style={styles.cardButton}
                                  title=" - "
                                  onPress={() => value.reduceQty(i)}
                              />
                              <Button
                                  style={styles.cardButton}
                                  title="Delete"
                                  onPress={() => value.deleteCart(i)}
                              />
                              <Text style={styles.cardTotalPrice}>Total Price : {x.qty * x.price}</Text>
                            </View>
                        </View>
                    </View>
                  ))}
                </ScrollView>
              </SafeAreaView>
            )
          }
        }
      </RootContext.Consumer>
    );
  }
}
 
export default CartScreen;