import React from 'react';
import Name from './Name';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      FirstName:'',
      LastName:'',
      initial:'',
      email:'',
      DOB:''

    }
  }
  onSearchChangeFirstName=(event)=>{
    var regex = /^[A-Za-z ]+$/
 
    //Validate TextBox value against the Regex.
    var isValid = regex.test(event.target.value);
    if (!isValid){
        alert('One or more illegal characters were found, the first being character ');
      }
    else{
      return this.setState({FirstName:event.target.value})
      }
  }

  onSearchChangeLastName=(event)=>{
      
      var regex = /^[A-Za-z ]+$/
 
      //Validate TextBox value against the Regex.
      var isValid = regex.test(event.target.value);
      if (!isValid){
          alert('One or more illegal characters were found, the first being character ');
        }
      else{
        return this.setState({LastName:event.target.value})
      }
        
  }
  onSearchChangeinitial=(event)=>{
      
        var regex = /^[A-Za-z ]+$/
   
        //Validate TextBox value against the Regex.
        var isValid = regex.test(event.target.value);
        if (!(event.target.value.length ===1) || !(isValid)){
            alert('One or more illegal characters were found, the first being character ');
          }
        else{
          return this.setState({initial:event.target.value})
        }
          
  }
  onSearchChangeemail=(event)=>{
    var testEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{4,}))$/;

    if (!testEmail.test((event.target.value))){
      this.setState({
          
        email: event.target.value
      })
    }
    else{
      alert("Enter valid mail Id")
    }
  }
  onMouseLeave=(event)=>{
    var testEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{4,}))$/;


    if (!testEmail.test((event.target.value))){
      this.setState({
          
        email: event.target.value
      })
    }
    else{
      alert("Enter valid mail Id")
    }

  }
      
        onSearchChangeDOB=(event)=>{
          
          this.setState({
            
            DOB: event.target.value
          })}
    

     onSumit=()=>{
      
      fetch('http://localhost:3000/',{
        method :'post',
        headers:{'content-type':'application/JSON'},
        body:JSON.stringify({
          FirstName:this.state.FirstName,
          LastName:this.state.LastName,
          initial:this.state.initial,
          email:this.state.email,
          DOB:this.state.DOB
        })
      })
      console.log( this.state.FirstName + this.state.LastName + this.state.initial) 
      console.log(this.state.email)
      console.log(this.state.DOB)  
      
    }
   
  
  render(){
    return (
      <form style={{minWidth: 25,fontsize: 20 }}>
        <Name searchChangeFirstName={this.onSearchChangeFirstName} 
        searchChangeLastName={this.onSearchChangeLastName}
        searchChangeinitial={this.onSearchChangeinitial}
        searchChangeemail={this.onSearchChangeemail}
        onMouseLeave={this.onMouseLeave}
        searchChangeDOB={this.onSearchChangeDOB}/>
        
        <div><pre className="flex"><p>FirstName:{this.state.FirstName}    </p>   <p>LastName:{this.state.LastName}    </p>   <p>initial:{this.state.initial}</p></pre></div>
        <p>FullName:{this.state.FirstName}{this.state.LastName}  {this.state.initial}</p>
        <p>Date of Birth:{this.state.DOB}</p>
        <button onClick={this.onSumit}  title="check all field was entered correctly" className="grow pointer pa3 dib bg-grey f5 ">summit</button>
      </form>
    );
  }
  
}

export default App;
