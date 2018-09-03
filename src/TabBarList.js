import React,{Component} from 'react';
import {Text,View,TabBarIOS} from 'react-native';
import SuperHeroesList from './superHeroesList';
import * as actions from './actions'
import {connect} from 'react-redux'

class TabBarList extends Component {
   
   
    render() {
       // console.log(this.props);
       console.log(this.state);
        return (
            <TabBarIOS 
                barTintColor = 'white'
                tintColor = "black"
                unselectedTintColor = 'grey'
            >
                <TabBarIOS.Item
                 title = "Tab 1"
                 onPress={() => this.props.selected_tab('TAB_1')}
                 selected = {this.props.tabsId === 'TAB_1'}
                >
                    <SuperHeroesList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 title = "Tab 2"
                onPress={() => this.props.selected_tab('TAB_2')}
                selected = {this.props.tabsId === 'TAB_2'}
                >
                <Text>tab 2</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 title = "Tab 3"
                onPress={() => this.props.selected_tab('TAB_3')}
                selected = {this.props.tabsId === 'TAB_3'}
                >
                 <Text>tab 3</Text>
                </TabBarIOS.Item>
                
            </TabBarIOS>
        )
    }
}
const mapStateToProps = state => {
    return {tabsId:state.tabId}
}
export default connect(mapStateToProps,actions)(TabBarList)