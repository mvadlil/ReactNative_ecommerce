// import * as React from 'react';
import React, { Component, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen, CartScreen } from './screen';
import { S8, S9, S10, IPHONE8 } from './images'

const Stack = createStackNavigator();

export const RootContext = createContext()
const Provider = RootContext.Provider

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      totalCart: 1,
      detailIndex: 0,
      cartScreen: [
        {
          id: 1,
          name: "Samsung S8 Plus 4/64",
          price: 5000000,
          desc: "The phone is powered by Octa core 2.3 GHz, Quad core, M2 Mongoose + 1.7 GHz, Quad core, Cortex A53 processor. It runs on the Samsung Exynos 9 Octa 8895 Chipset.",
          image: S8,
          qty: 5
        }
      ],
      homeScreen: [
        {
          id: 1,
          name: "Samsung S8 Plus 4/64",
          price: 5000000,
          desc: "The phone is powered by Octa core 2.3 GHz, Quad core, M2 Mongoose + 1.7 GHz, Quad core, Cortex A53 processor. It runs on the Samsung Exynos 9 Octa 8895 Chipset.",
          image: S8
        },
        {
          id: 2,
          name: "Samsung S9 Plus 6/64",
          price: 6500000,
          desc: "It has a 6.2-inch Quad HD+ Super AMOLED display with an 18.5:9 aspect ratio. Touch response and colours are superb and it also supports HDR",
          image: S9
        },
        {
          id: 3,
          name: "Samsung S10 Plus 8/128",
          price: 8500000,
          desc: "The phone is powered by Octa core (2.73 GHz, Dual core, M4 Mongoose + 2.31 GHz, Dual core, Cortex A75 + 1.95 GHz, Quad core, Cortex A55) processor. It runs on the Samsung Exynos 9 Octa 9820 Chipset. It has 8 GB RAM and 128 GB internal storage.",
          image: S10
        },
        {
          id: 4,
          name: "Iphone 8 Plus 4/64",
          price: 7500000,
          desc: "The iPhone 8 Plus is a larger version of the iPhone 8, with a larger screen and battery, more RAM, and a secondary telephoto camera on the rear.",
          image: IPHONE8
        }
      ]
    }
  }

  setDetailIndex = (index) => {
    return this.setState({ detailIndex: index })
  }

  addQty = (index) => {
    let temp = [...this.state.cartScreen]
    temp[index].qty += 1
    return this.setState({ cartScreen: temp })
  }

  reduceQty = (index) => {
    let temp = [...this.state.cartScreen]
    if (temp[index].qty > 1) {
      temp[index].qty -= 1
      return this.setState({ cartScreen: temp })
    } else {
      return this.setState({ cartScreen: temp })
    }
  }

  deleteCart = (index) => {
    let temp = [...this.state.cartScreen]
    temp.splice(index, 1)
    return this.setState({ cartScreen: temp, totalCart: this.state.totalCart - 1 })
  }

  addToCart = (index) => {
    let cart = [...this.state.cartScreen]
    let pushItem = {...this.state.homeScreen[index], qty: 1}
    cart.push(pushItem)
    return this.setState({ cartScreen: cart, totalCart: this.state.totalCart + 1 })
  }

  render() { 
    return (  
      <NavigationContainer>
        <Provider value={
            {
              state: this.state,
              setDetailIndex: this.setDetailIndex,
              addQty: this.addQty,
              reduceQty: this.reduceQty,
              deleteCart: this.deleteCart,
              addToCart: this.addToCart
            }
        }>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
 
export default App;
