import React, { Component } from 'react';
import {libraires, getLibraires, search } from '../Service/DataService';
import Libraires from './Libraires';
// import Search from './Search';

import {Spin, Input} from "antd"
const {Search} = Input
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : true,
            libraires1 : []
         }
    }

    componentDidMount() {
        getLibraires().then((result) => {
            this.setState({
                loading : false,
                libraires1 : result
                // .data.libraires
            })
        }).catch(err=> {
            this.setState ({
                loading : false
            })
        })
    }

    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state != nextState || this.props != nextProps
    }

    search = (text) => {
        this.setState({
            loading : true
        })
        search(text).then((result) => {
            this.setState({
                libraires1 : result,
                // .data.libraires,
                loading : false
            })
        }).catch(err=> {
            this.setState({
                loading : false
            })
        }) 
    }

    render() { 
        return ( 
            <div className="container">
                {/* <Search search={this.search}></Search> */}
                <Search onChange={(e) => {this.search(e.target.value)}} placeholder="Votre recherche" enterButton="Search" size="large" loading={this.state.loading} />
                {this.state.loading ? <div style={{textAlign: 'center'}}><Spin /></div> : <Libraires libraires={this.state.libraires1}></Libraires>}
                
            </div>
         );
    }
}
 
export default Home;