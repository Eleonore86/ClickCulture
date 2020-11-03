import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    changeSearch = (e) => {
        this.props.search(e.target.value)
    }
    render() { 
        return ( 
            <div className="Container">
                <div className="row">
                    <input className="col form-control" onChange={this.changeSearch} type="search" placeholder="Librairie" />
                </div>
            </div>
         );
    }
}
 
export default Search;