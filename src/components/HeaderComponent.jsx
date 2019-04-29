import React,{Component} from 'react';
    class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="nav">
                    <ol>
                        <li>Home</li>
                        <li>Todos</li>           
                        </ol>
                    </nav>
               <nav>
                    <ol>
                        <li>Login</li>
                        <li>Logout</li>           
                        </ol>
                    </nav>


            </header>
            )
        }
    }

    export default HeaderComponent