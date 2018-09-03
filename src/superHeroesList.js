import React,{Component} from 'react';
import {View, Text} from  'react-native';
import {connect} from 'react-redux';

class SuperHeroesList extends Component {
    
   
    getSuperHeroes(){
        const {superheroes} = this.props
        return superheroesData = superheroes.map((heroes,key)=>{
            return <Text key ={key}>{heroes.superhero}</Text>
        })
    }
    render() {
        console.log(this.props);
        return(
            <View>
                {this.getSuperHeroes()}
            </View>
        );
    }
     
}

const mapStateToProps = state => {
    return {superheroes: state.superheroes } 
}
export default connect(mapStateToProps)(SuperHeroesList);