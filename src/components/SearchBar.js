import React from 'react';
//import ReactDOM from 'react-dom';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state ={
        searchTerm: '',
    }

    handlerChange = (event) =>{
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value })
    }

    handlerSubmit = (ev) => {
        const { searchTerm} = this.state;
        const { onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        ev.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding: '25px' }}>
                <form onSubmit={this.handlerSubmit}>
                    <TextField fullWidth label="Search here" onChange={this.handlerChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
