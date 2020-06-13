import React, {Component} from 'react';
// import {robots} from'./robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield :""
        }
    }

    //A lifecycle function to check if the component is mounted
    componentDidMount(){
        //if the component did mount we can do something here
        //this.setState({robots : robots}); -- so this updates everytime we refresh
        
        //fetching data through url
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    ;
    }

    //created to check the SearchBox if when an event happens
    //The below syntax for extra functions in react; arrow funcion
    onSearchChange = (event) =>{
        
        this.setState({searchfield : event.target.value});

    }

    render(){
        //Here we use searchfield state to get the event value from onSearchChange coming from SearchBox.js and filter the robots according to that event value
        const filterRobots = this.state.robots.filter(robots => 
            {
            return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading...</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className= "ma2 pa3 f1  ">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <CardList robots = {robots}/> */}
                    <Scroll>
                        <CardList robots = {filterRobots}/>
                    </Scroll>
                   
                </div>
            );
        } 
    }
}

export default App;