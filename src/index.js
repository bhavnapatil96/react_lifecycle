import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './TodoItem.js'
import {Route,BrowserRouter,Link,Switch,NavLink,Prompt} from 'react-router-dom'

class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            todos:['Learnig Node','Learning Java']
        }

    }
    render(){
        const {todos}=this.state
        return(
            <section>
                <form onSubmit={(e)=>{

                        const {todos}=this.state;
                    //alert(this.refs.addTodo.value);
                      //  todos.push(this.refs.addTodo.value);
                        e.preventDefault();
                        this.setState({
                            todos:todos.concat(this.refs.addTodo.value)
                        })
                    this.refs.addTodo.value='';
                }}>
                    <input type="text" ref="addTodo"/>
                    <button type="submit">Add Todo</button>
                </form>

                <TodoItem todos={todos}/>
            </section>
        )
    }
}
 const App =()=>(
     <h1>Welcome To Route</h1>

 );

const About =(props)=>(
   <div>
     <h1>About Us</h1>

        <div className="list-group">
            <div className="list-group-item">
                <Link to="/about/city" >city</Link>{'       '}
                <Link to="/about/spot" >spot</Link>
            </div>
            {props.children}
        </div>
   </div>
);
const Detail =(props)=>(

    <div className="col-sm-8">

        <div className="list-group">
            <div >
                <NavLink className="list-group-item" activeClassName="active" to="/detail/city" >City</NavLink>{'       '}
                <NavLink  className="list-group-item" activeClassName="active" to="/detail/spot" >Spot</NavLink>
            </div>
            {/*{props.children}*/}

            <Route path="/detail/:contentName" component={ContentDetail}/>
        </div>
    </div>
);

const ContentDetail=(props)=>(
    <div>
        { props.match.params.contentName ?
            <div>
                <img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/1'} />
            </div>
            :null
        }
    </div>

)

const City =()=>(
    <h1>City</h1>

);
const Spots =()=>(
    <h1>Spots</h1>

);
const Contact =()=>(
    <h1>Contact Us</h1>

);
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            isChanged:false
        }
    }
    render(){

        return (
            <div>
                <Prompt when={this.state.isChanged} message='Are you sure to leave this page ?'/>
                <input type="text" onChange={()=>{
                    this.setState({
                        isChanged:true
                    })
                }}/>
            </div>
        )

    }
}
const Link1 =()=>(
    <div className="col-sm-4">
        <div className="list-group">

            <NavLink exact className="list-group-item" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/about">About Us</NavLink>
            <NavLink  className="list-group-item" activeClassName="active" to="/contact">Contact Us</NavLink>
            <NavLink  className="list-group-item" activeClassName="active" to="/detail">Detail</NavLink>
            <NavLink  className="list-group-item" activeClassName="active" to="/form">Form</NavLink>

        </div>

    </div>

);

//ReactDOM.render(<TodoList/>,document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter >
        <div className="row">
            <Link1/>
            <Route path="/about" component={About}/>
            <Route path="/about/city" component={City}/>
            <Route path="/about/spot" component={Spots}/>

            <Route exact path="/" component={App}/>
            <Route  path="/contact" component={Contact}/>
            <Route path="/home" component={App}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/form" component={Form}/>

        </div>



    </BrowserRouter>,document.getElementById('root'));