import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
            robotFriends: robots
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robotFriends.filter(robot => 
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <CardList robots={ filteredRobots } />
            </div>
        );
    }
}

export default App;