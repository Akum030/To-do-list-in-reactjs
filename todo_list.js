#REACT CODE

import React, { Component } from 'react'
import './check.css'
 class ProjectClass extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: "",
              list : []
         }
    } 
       // adding list when add item button is clicked
     addlist=() => {    
      
        const newitem={
            id: 1+ Math.random(),
            value : this.state.name
        }

        // this.state.list=[...this.state.list] 
        this.state.list.push(newitem)
  
       this.setState({
           list : this.state.list,
           name:""
       })

     }

     setname =(e)=>{
         this.setState({
             name : e.target.value
         })
     }

     // deleting a item whose id is matched given by the delete function in below code of jsx
     delete(idd){
    

         const updatedlist = this.state.list.filter(item => item.id !==idd)

         this.setState({
             list: [...updatedlist]
         })
     }

    render() {
        return (
         // creating jsx part and included css class file
        <div  className="grid-container"  >
           <div className="list">
     <input  type ="text"
      placeholder ="type item here"
      value={this.state.name}
      onChange={this.setname}/>
    <button onClick={this.addlist}>Add item</button>
    </div>
     <div   >
        
         {this.state.list.map(item => {
         return (<li className ="list" key={item.id}><li>{item.value} </li>
         <button onClick ={() => this.delete(item.id)}> x</button>
         </li>)
     })}
     


    
    </div>
            </div>
        )
    }
}

export default ProjectClass

#CSS CODE



.back {
    float: middle;
}
.list {
    display: flex    ;
}
.grid-container {
        
        display: flexbox;
        float: middle;
        background-color: lightgrey;
        width: 1000px;
        
        border: 15px solid green;
        padding: 50px;
        margin: 20px;
      
  }
