import React,{Component} from 'react';





class LoginComponent extends Component{
constructor(props){
        super(props);
            this.state={
                        userName:'',
                        userPassword:'',
                        isUserLoggedIn:false,
                         hasLoginFailed:false
                    }
                        this.onchange=this.onchange.bind(this)
                        this.login=this.login.bind(this)
                    }
        login(){
            if(this.state.userName==='nayan' && this.state.userPassword==='pass'){
                console.log('successful')
                this.props.history.push('/welcome')
                        this.setState({isUserLoggedIn:true})
                        this.setState({hasLoginFailed:false})
            }else{
                console.log('failed')
                        this.setState({isUserLoggedIn:false}) 
                        this.setState({hasLoginFailed:true})
                     }
        // console.log("login button cliked,",this.state.userName,this.state.userPassword);
            //this.setState(this.state.userName);

        }
        
    onchange(event){

        console.log(event.target.value);

        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }
    render(){
        return (
            <div>
                {this.state.isUserLoggedIn && <div>Successfull login</div>}
                {this.state.hasLoginFailed && <div>Invalid Crendentials login</div>}
                
                User Name: <input type="text" name="userName" onChange={this.onchange} />
                password: <input type="password" name="userPassword" onChange={this.onchange}/>
                <button className="button" onClick={this.login}>Login</button>
                </div>
        )
    }
}



export default LoginComponent