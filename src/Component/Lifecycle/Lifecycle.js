import React, { Component } from 'react';
import LifecycleChild from './LifecycleChild';



class Lifecycle extends Component{
    constructor(){
        super()

        this.state= {
            Name:"",
            flag:false,
            test: function(){
                return(alert("You are here in Parent Class Constructor,this is the first method which is being called"),
                this.Name=prompt("enter your name"));
            }
            }
            this.state.test();
    }

    parentButtonHandler = ()=>{
        console.log("inside  Parent Class buttonHandler method ")
        this.setState({flag:true});
    }

    componentDidMount(){
        setTimeout(()=>{
            return(alert("Component has been rendered and this alert is from componentDidMount of parent class"))
        },2000)
    }

        // shouldComponentUpdate(){
        //     return false;
        // }

    render(){

        let parentDynamicContentHandler ;
        console.log("inside  Parent Class render method ")
      if(this.state.flag===true){
        console.log("inside  Parent Class if method ")
        parentDynamicContentHandler = <div>
                 <p> Hello {this.state.Name}, you are viewing this from  Parent Class because you clicked on the button and want to check "Handling Dynamic Content (The Javascript Way)".</p>
            </div>
        }

        return(
            <div>
                <LifecycleChild Name ={this.state.Name}/>
               <p> Hello {this.state.Name}, you are in  Parent Class Render Method, which is called after the  Constructor called.</p>
               <button type="button" onClick={this.parentButtonHandler}>Click Here </button> If you want to check how to Handle Dynamic Content (The Javascript Way)
                {parentDynamicContentHandler}

            </div>
        );
    }
}

export default Lifecycle;