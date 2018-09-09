import React,{Component} from 'react';
import {View, Text} from  'react-native';
import {connect} from 'react-redux';
import {fetchData} from './actions'
class SuperHeroesList extends Component {
    componentDidMount() {
      
        this.props.fetchData();
        
    }
   
    getTvShows(){
        const {dataTvMaze} = this.props
            return dataTvShow =dataTvMaze.data.movies.map((movie,key)=>{
                return <Text key ={key}>{movie.title}</Text>
            });   
    }

    nada(){

        return <Text >nada</Text> 
    }
    render() {
      
        return(
            <View>
                <Text> hola</Text>
                <Text> hola</Text>
                <Text> {this.props.dataTvMaze.isFetching+'gg'}</Text>
            
                {this.props.dataTvMaze.isFetching && <Text> loading</Text>}
                {
                    this.props.dataTvMaze.data.movies ?
                    this.getTvShows()
                    : null
                }
            </View>
        );
    }
     
}

const mapStateToProps = state => {
    return {dataTvMaze: state.dataReducer } 
}

const mapDispatchToProps= dispatch => {
    return {
        fetchData: () =>dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SuperHeroesList);