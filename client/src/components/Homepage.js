import TypeWriterEffect from "react-typewriter-effect";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class HomePage extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <nav className="fixed top-0 w-full flex items-center justify-between flex-wrap bg-white p-6">
          <div className="flex items-center flex-shrink-0 text-gray-800">
            <img src={logo} className="h-10 w-10 mr-2" alt="Logo" />
            <span className="font-semibold text-xl tracking-tight text-red hover:text-bg-red-500">
              To Do App
            </span>
          </div>
          <Link
  to="/login"
  className="bg-transparent text-red-700 font-semibold py-2 px-4 border border-red-500 rounded transition duration-500 ease-in-out transform hover:bg-red-600 hover:text-orange hover:scale-105"
>
  login/signup
</Link>

        </nav>
        <div className="text-left">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "red",
              fontWeight: 700,
              fontSize: "3.5em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Hey there,",
              "Welcome to moringa pair...",
              "and stay on top of your goals.",
              "Stay organized and productive",
              "Staying organized has never been easier.",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;

