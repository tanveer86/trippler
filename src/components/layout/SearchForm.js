import React from 'react';
import styles from '../style.module.css'

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    inputChange = (userInput) => {
        this.setState({query: userInput.target.value})
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        localStorage.setItem("searchQuery",JSON.stringify(this.state.query));
        this.props.props.props.history.push('/search/results')
        // console.log(this.props.props.props)
    }

    render(){
        
        return(
            <React.Fragment>
                <form onSubmit={this.inputSubmit}>
                    <input className={styles.searchInput} type="text" placeholder="Search brand eg: kingfisher" required name="query" value={this.state.query} onChange={this.inputChange} />
                    <button type="submit" className={styles.searchButton}>SEARCH NOW</button>
                </form>
            </React.Fragment>
        )
    }
}

export default SearchForm;