//import { Routes, Route, Link } from 'react-router-dom';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
//
function Home() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2"
    >Welcome, home</h1>
    <hr className="my-2" />
    <div className="flex flex-wrap">
      <div className="p-2 m-0">
        <a href="/button" className="" >
          <button className="btn-outline-blue">Button</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/card" className="" ><button className="btn-outline-blue">Card</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/calendar" className="" ><button className="btn-outline-blue">Calendar</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/checkbox"><button className="btn-outline-blue">CheckBox</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/datepicker"><button className="btn-outline-blue">DatePicker</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/dialog"><button className="btn-outline-blue">Dialog</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/form"><button className="btn-outline-blue">Form</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/input"><button className="btn-outline-blue">input</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/progress">
            <button className="btn-outline-blue">Progress</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/radio">
            <button className="btn-outline-blue">Radio</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/select">
            <button className="btn-outline-blue">Select</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/sheet">
            <button className="btn-outline-blue">Sheet</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/switch">
            <button className="btn-outline-blue">Switch</button>
        </a>
      </div>        
      <div className="p-2">
        <a href="/table">
            <button className="btn-outline-blue">Table</button>
        </a>
      </div>
      <div className="p-2">
        <a href="/textarea">
            <button className="btn-outline-blue">TextArea</button>
        </a>
      </div>
      
    </div>
  </div>
  )
}

export default Home;