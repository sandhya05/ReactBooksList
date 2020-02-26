import React, { Component } from 'react'
import axios from 'axios';


export default class books extends Component {
    constructor(props){
        super(props);
        this.state={
            books:[
                // {"name":"Javascript","model":"nit-01","price":200,"rating":2,"image":"books1.jpg","status":"Available","Id":1},
                // {"name":"Angular","model":"nit-02","price":100,"rating":4,"image":"books2.jpg","status":"Available","Id":2},
                // {"name":"React","model":"nit-03","price":150,"rating":5,"image":"books3.jpg","status":"Available","Id":3},
                // {"name":"Vue","model":"nit-04","price":350,"rating":3,"image":"book4.png","status":"Not Available","Id":4},  
              ],
            search:''
        }
        this.updateSearch=this.updateSearch.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://demo2246246.mockable.io/books')
        .then(res => {
        const booksList = res.data;
        console.log("Response is ",booksList);
        this.setState({books:booksList})
        })
        .catch(function(error) {
          console.log(('Request failed', error));
        });
    }


    updateSearch=(event)=>{
        this.setState({search:event.target.value});
    }
    render() {
        const {books}=this.state;
        console.log("From state",this.state.books.books);
        console.log("Books here",books)

        let filteredBooks=null;
        if(books.books){
             filteredBooks = this.state.books.books.filter(
                (book)=>{
                    return book.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
                }
              );
        }
    
        return (
            <div>
                <div style={{margin:"30px 30px 30px 30px"}}>       
                    Search your favourite book : <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </div><br></br>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {filteredBooks &&
                            filteredBooks.map((book, index) => {
                                return (
                                    <>
                                    <tr>
                                        <td>{book.name}</td>
                                        <td>{book.price}</td>
                                        <td>{book.rating}</td>
                                        <td>{book.status}</td>
                                        <td><img src={require(`./images/${book.image}`)} alt="tile" width="100px" height="100px"></img></td>
                                    </tr>   
                                    </>
                                );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
