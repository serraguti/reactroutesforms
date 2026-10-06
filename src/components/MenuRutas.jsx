import { Component } from "react";
import './menu.css';
export default class MenuRutas extends Component{
    render(){
        return(<div>
            <ul id="menu">
                <li>
                    <a href="/">Home | </a>
                </li>
                <li>
                    <a href="/cine">Cine | </a>
                </li>
                <li>
                    <a href="/musica">Música | </a>
                </li>
                <li>
                    <a href="/formsimple">Form simple | </a>
                </li>
                <li>
                    <a href="/collatz">Collatz | </a>
                </li>
                <li>
                    <a href="/tabla">Tabla multiplicar | </a>
                </li>
               <li>
                    <a href="/tablav2">Tabla multiplicar v2 | </a>
                </li>
                <li>
                    <a href="/multiple">Selección múltiple | </a>
                </li>              
            </ul>
        </div>)
    }
}