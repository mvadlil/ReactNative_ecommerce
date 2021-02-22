import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import {RootContext} from '../../App'
import { cart } from '../../images'

class HomeScreen extends Component {
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
        width: 300,
        height: 'auto'
      },
      cardImage: {
        width: 250,
        height: 300,
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
        marginBottom: 15
      },
      cardButtonContainer: {
        flexDirection: 'row',
        marginBottom: 20
      },
      cardButton : {
        marginLeft: 5,
      },
      // =========================
      container: {
        backgroundColor: 'white'
      },
      logoImages: {
        width: 150,
        height: 50
      },
      buttonCart: {
        width: 100,
        marginLeft: 300,
        top: -40,
        flexDirection: 'row'
      },
      cartIcon: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 5
      },
      cartImage: {
        width: 30,
        height: 30
      }
    });

    return (  
      <RootContext.Consumer>
        {
          value => {
            console.log(value)
            return(
              <SafeAreaView style={styles.container}>
                <ScrollView>
                  <View>
                    <Image 
                      source={require('../../images/shop.png')}
                      style={styles.logoImages}
                    />
                  </View>
                  <View style={styles.buttonCart}>
                    <Pressable
                      onPress={() => this.props.navigation.navigate('Cart')}
                    >
                      <Image 
                      source={cart}
                      style={styles.cartImage}
                    />
                    </Pressable>
                    {/* <Button
                      title="Cart"
                      onPress={() => this.props.navigation.navigate('Cart')}
                    /> */}
                    <Text style={styles.cartIcon}>{value.state.totalCart}</Text>
                  </View>
                
                  {/* card */}
                  {value.state.homeScreen.map((x,i) => (
                    <View style={styles.cardBoxContainer} key={x.id}>
                      <View style={styles.cardBox}>
                        <Image 
                          style={styles.cardImage}
                          source={x.image}
                        />
                        <Text style={styles.cardTitle}>{x.name}</Text>
                        <Text style={styles.cardPrice}>Price :</Text>
                        <Text style={styles.cardPriceValue}>Rp. {x.price}</Text>
                        <View style={styles.cardButtonContainer}>
                          <Button
                            style={styles.cardButton}
                            title="Details"
                            onPress={() => { this.props.navigation.navigate('Details'); value.setDetailIndex(i); }}
                          />
                          <Button
                            style={styles.cardButton}
                            title="Add To Cart"
                            onPress={() => value.addToCart(i)}
                          />
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


export default HomeScreen;