import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import KeyHandler from '../components/KeyHandler';

const Home = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/about' render={() => (
            <About />
          )}>
          </Route>
          <Route path='/projects' render={() => (
            <Projects />
          )}>
          </Route>
          <Route path='/' render={() => {
            if (submitted === true) {
              return (
                <Redirect to="/about" />
              )
            } else {
              return (
                <Link className="enter" to='/about' style={{ textDecoration: 'none' }}>
                  <p >Press Enter to Start</p>
                  <KeyHandler handleKeyPressed={handleKeyPressed} />
                </Link>
              )
            }
          }}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home;