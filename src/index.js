import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Provider} from 'react-redux';
import  store from './store';
import StartFormDesign from "./StartFormDesign";


ReactDOM.render(
   <Provider store={store}>
   <StartFormDesign/>
   </Provider>
, document.getElementById('root'));



// import React from 'react';
// import Client from "./Client";
// import ReactDOM from 'react-dom';
// import BrowserRouter from "react-router-dom/es/BrowserRouter";
//
// ReactDOM.render(
//     <BrowserRouter>
//         <Client/>
//     </BrowserRouter>
// , document.getElementById('root'));




// import React from 'react';
// import { Component } from 'react';
// import { Link,Switch,Route,BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
//
// const input=[
//     {id:1,name:"book", price: 100, count: 100},
//     {id:2,name:"food", price: 200, count: 5},
//     {id:3,name:"shoes", price: 200, count: 6},
// ]
//
//
// const No_find=()=>(
//     <div>
//         <h1> 404  No Found </h1>
//     </div>
// )
//
// const Home=()=>(
//
//     <div >
//         <h1>welcome home</h1>
//         <tr >
//             <td style={{border:`1px solid`,margin:20}}>Book</td>
//             <td style={{border:`1px solid`}}>
//                 <Link class={"mySlides w3-animate-fading"} to='/details/1' style={{margin:20} }>details</Link> </td>
//         </tr>
//         <tr >
//             <td style={{border:`1px solid`,margin:20}}>Food</td>
//             <td style={{border:`1px solid`}}>
//                 <Link to="/details/2" style={{margin:20}}>details</Link> </td>
//         </tr>
//     </div>
// );
// const details=({match})=> {
//     let product = input.find(x => x.id == match.params.id);
//     if(product===undefined){
//         product=input[0];  //处理异常
//     }
//     const { price, name, count } = product;
//     return (
//         <div class={" w3-animate-fading"}>
//             <p>Product Name: {name} </p>
//             <p>Product Count: {count} </p>
//             <p>Product Price {price} </p>
//         </div>
//     )
// }
//
// const App=()=>(
//     <div>
//         <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route path='/details/:id' component={details}/>
//             <Route  component={No_find}/>
//         </Switch>
//     </div>
// );
//
// ReactDOM.render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// ), document.getElementById('root'));
//
//
//
//
//
//
//
// // import React from 'react';
// // import { Component } from 'react';
// // import { Link,Switch,Route,BrowserRouter } from 'react-router-dom';
// // import ReactDOM from 'react-dom';
// //
// // const Home=()=><h1> Welcome Home</h1>;
// // const page1=()=><h1>This is page1 </h1>;
// // const ClassList=()=>(
// //     <ul>
// //         <li>p1</li>
// //         <li>p2</li>
// //         <li>p3</li>
// //     </ul>
// // );
// //
// //
// // const App=()=>(
// //     <div>
// //         <Link to="/">Home</Link>
// //         <Link to="/page1" style={{margin:20}}>page1</Link>
// //         <Link to="/classes">Classes_hahaha【这里是link显示在页面上的名字】</Link>
// //         <Switch>
// //             <Route exact path='/' component={Home}/>
// //             <Route path='/page1' component={page1}/>
// //             <Route path='/classes' component={ClassList}/>
// //         </Switch>
// //     </div>
// // );
// //
// // ReactDOM.render((
// //     <BrowserRouter>
// //         <App/>
// //     </BrowserRouter>
// // ), document.getElementById('root'));
//
//
//
//
//
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
// // import HelloWorld from "./HelloWorld";
// // import ArticleContanier from "./ArticleContanier";
// // import Children from "./Children";
// // import Father from "./Father";
// // import Counter from "./Counter";
// //
// // const input=[
// //     {title:"title1",text:"fuck"},
// //     {title:"title2",text:"fuck"},
// //     {title:"title3",text:"text3"},
// //     {title:"title4",text:"text4 fuck"},
// // ]
// //
// //
// // // ReactDOM.render(<ArticleContanier inputs={input}/>, document.getElementById('root'));
// // ReactDOM.render(<Counter/>, document.getElementById('root'));
// // // ReactDOM.render(
// // //     <Father>
// // //     <Children>
// // //         <div>hello</div>
// // //          </Children>
// // //     <Children>
// // //          <div>world</div>
// // //         </Children>
// // //     </Father> ,document.getElementById('root'));
// // registerServiceWorker();
