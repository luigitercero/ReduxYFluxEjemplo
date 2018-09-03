import React,{Component} from 'react';
import {Text,View,TabBarIOS} from 'react-native';
import SuperHeroesList from './superHeroesList';
export default class TabBarList extends Component {
    render() {
        return (
            <TabBarIOS 
                barTintColor = 'white'
                tintColor = "black"
                unselectedTintColor = 'grey'
            >
                <TabBarIOS.Item
                 title = "Tab 1"
                 onPress={() => this.setState({selected:'TAB_1'})}
                 selected = {this.setState.selected === 'TAB_1'}
                >
                    <SuperHeroesList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 title = "Tab 2"
                >
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 title = "Tab 3"
                >
                </TabBarIOS.Item>
                
            </TabBarIOS>
        )
    }

}