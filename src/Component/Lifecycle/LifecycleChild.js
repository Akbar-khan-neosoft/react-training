import React, { Component } from 'react';


class LifecycleChild extends Component{
    constructor(props){
        super(props)

        this.state= {
            flag:false,
            }
        }

    childButtonHandler = ()=>{
        console.log("inside child Class buttonHandler method ")
        this.setState({flag:true});
    }

    componentDidMount(){
        setTimeout(()=>{
            return(alert("Component has been rendered and this alert is from  componentDidMount of  child class"))
        },2000)
    }

    render(){
        console.log(this.props.Name)
        console.log(this.props.Flag)
        let childDynamicContentHandler ;
        console.log("inside  child Class render method ")
      if(this.state.flag===true){
        console.log("inside  child Class if method ")
        childDynamicContentHandler = <div>
                 <p> Hello {this.props.Name} , you are viewing this from  child Class because you clicked on the button and want to check "Handling Dynamic Content (The Javascript Way)".</p>
            </div>
        }

        return(
            <div>
               <p> Hello {this.props.Name}, you are in  child Class Render Method, which is called after the Constructor called.</p>
               <button type="button" onClick={this.childButtonHandler}>Click Here </button> If you want to check how to Handle Dynamic Content (The Javascript Way)
                {childDynamicContentHandler}

            </div>
        );
    }
}

export default LifecycleChild;