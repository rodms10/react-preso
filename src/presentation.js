// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import styled from 'react-emotion';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

// Require CSS
require('normalize.css');

const BottomText = styled(Text)`
  font-size: .7em;
  position: absolute;
  bottom: -5vh;
`;


const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        controls={false}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React for non-believers
          </Heading>
          <Image src={'assets/react-icon.png'} margin="0px auto" />
          <Text margin="0" textColor="tertiary" size={4} bold>
            Rodrigo Silveira - Front-end Engineer
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>A JavaScript library for building user interfaces</Quote>
            <Cite>reactjs.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Still hot
          </Heading>
          <Image height="70%" width="70%" src={'assets/js-fremeworks-trends.png'} margin="0px auto" />
          <BottomText>Source:
            <a href="https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=%2Fm%2F012l1vxv,%2Fm%2F0j45p7w,%2Fm%2F0h94450,%2Fg%2F11c0vmgx5d,%2Fm%2F0s8wr70">
              Google Trends
            </a>
          </BottomText>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Image height="70%" width="70%" src={'assets/really.gif'} margin="0px auto" />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
        >
          <Image height="70%" width="70%" src={'assets/cool.gif'} margin="0px auto" />
        </Slide>

        <Slide
          transition={['spin', 'fade']}
          bgImage={'assets/go-back-in-time-clock.jpg'}
        >
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Image height="70%" width="70%" src={'assets/stone-wheel.jpg'} margin="0px auto" />
          <Heading size={6} caps lineHeight={1} textColor="quartenary">
            8000 B.C
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <CodePane
            lang="html"
            style={{fontSize: 16}}
            source={
`<html>
  <body>
    <p>CareML HOCX</p>
    <div>
      React <strong>FTW</strong>
    </div>
  </body>
</html>`
            }
          />
          <Image src={'assets/DOM.png'} margin="40px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <CodePane
            lang="javascript"
            style={{fontSize: 20}}
            source={
`var message = document.getElementById("message");

function modifyText() {
  message.style.color = 'purple';
  message.firstChild.nodeValue = 'Hello from 2000';
}

message.addEventListener("click", modifyText, false);

window.onload = function() {
  setThingsUp();
}`
            }
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>


        <Slide transition={['fade']} bgColor="primary">
          <Image height="70%" width="70%" src={'assets/jquery-ajax.png'} margin="0px auto" />
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            2006
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <CodePane
            lang="javascript"
            style={{fontSize: 20}}
            source={
`var hiddenBox = $("#banner-message");
$("#button-container button").on("click", function(event) {
  hiddenBox.show();
});`
            }
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            lang="javascript"
            style={{fontSize: 20}}
            source={
`$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $("#weather-temp").html( "<strong>" + result + "</strong> degrees");
  }
});`
              }
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Image height="90%" width="90%" src={'assets/2006-yahoo.png'} margin="0px auto" />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
        >
          <Image height="90%" width="90%" src={'assets/google-docs-2010.jpg'} margin="0px auto" />
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="quartenary"
        >
          <Heading size={1} textColor="primary" caps>
            M V C
          </Heading>
          <Heading size={2} textColor="secondary">
            Model
          </Heading>
          <Heading size={4} textColor="secondary">
            View
          </Heading>
          <Heading size={6} textColor="secondary">
            Controller
          </Heading>
          <Heading size={6} textColor="secondary">&nbsp;</Heading>
          <Heading size={6} textColor="primary">
            2010
          </Heading>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Layout>
            <Fill>
              <Image src={'assets/angularjs-logo.png'} margin="0px 20px" />
              <Image src={'assets/knockout.png'} margin="0px 20px" />
            </Fill>
            <Fill>
              <Image src={'assets/ember-logo.png'} margin="0px 40px" />
              <Image src={'assets/backbone.png'} margin="20px 0 0 -140px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <Layout>
            <Fit>
              <CodePane
                lang="html"
                style={{fontSize: 16, width: '40vw'}}
                source={
`<div ng-controller="TodoListController as todoList">
  <span>{{todoList.remaining()}} of {{todoList.todos.length}} remaining</span>
  [ <a href="" ng-click="todoList.archive()">archive</a> ]
  <ul class="unstyled">
    <li ng-repeat="todo in todoList.todos">
      <label class="checkbox">
        <input type="checkbox" ng-model="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </label>
    </li>
  </ul>
  <form ng-submit="todoList.addTodo()">
    <input type="text" ng-model="todoList.todoText"  size="30"
           placeholder="add new todo here">
    <input class="btn-primary" type="submit" value="add">
  </form>
</div>`
                }
              />
            </Fit>
            <Image src={'assets/angular-todo.png'} width="40%" height="40%" margin="auto 20px" />
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <CodePane
            lang="javascript"
            style={{fontSize: 16}}
            source={
`angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
  });`
            }
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Image src={'assets/react-icon.png'} margin="0px auto" />
          <Heading textColor="tertiary" size={4} bold>
            2013
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <Heading textColor="tertiary" size={4} bold>
            The V in MVC
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Composable components
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary" margin="40px 10px">
              JS instead of templates
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} italic textColor="tertiary">
            𝒇(x) &rarr; y
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} italic textColor="tertiary">
            𝒇(state) &rarr; UI
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Demo
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <LiveProvider
            style={{fontSize: 16, width: '40vw'}}
            code={
`class CoverImg extends React.Component {
  constructor() {
    super()
    this.state = { cover: true }
  }

  onClick() {
    this.setState({cover: !this.state.cover})
  }

  render() {
    let imgStyle =
      this.state.cover ? {filter: "blur(50px)"} : {};

    return (
      <div>
        <img style={imgStyle} src={'assets/violating.gif'} />

        <button onClick={() => this.onClick()}>
          {this.state.cover ? 'Reveal' : 'Cover'}
        </button>
      </div>
    )
  }
}`
          }>
            <Layout>
              <Fit>
                <div onKeyDown={(e) => {e.stopPropagation()}}>
                  <LiveEditor />
                </div>
              </Fit>
              <LiveError style={{color: "red", margin: "20px", minWidth: '25em'}} />
              <LivePreview style={{margin: "auto 20px"}} />
            </Layout>
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={2}>Declarative</Heading>
        </Slide>

        <Slide
          transition={['fade']}
          bgImage={'assets/hate.jpg'}
        >
          <Heading size={1} textColor="red" margin="2em 0 0 0">HATE</Heading>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Image height="90%" width="90%" src={'assets/rethink-tweet.png'} margin="0px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            Rerender entire application when data changes
          </Heading>
          <Heading size={2} margin=".5em">
            <span role="img" aria-label="hate">🤬</span>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary" textColor="secondary">
          <Heading size={2}>JSX</Heading>
          <Layout>
            <Fit style={{margin: 'auto 20px'}}>
              <CodePane
                lang="jsx"
                style={{fontSize: 16, width: '25vw'}}
                source={
`function render() {
  return  (
    <div>
      <MyButton onClick={
        () => console.log('yolo')
      }>
        Reveal
      </MyButton>
    </div>
  );
}`
                }
              />
            </Fit>
            <Fit style={{margin: 'auto 20px'}}>
              <CodePane
                lang="javascript"
                style={{fontSize: 16, width: '25vw'}}
                source={
`function render() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      MyButton,
      { onClick:
        () => console.log('yolo')
      },
      'Reveal'
    )
  );
}`
                }
              />
            </Fit>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={2}>Virtual DOM</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="tertiary">Reconciliation</Heading>
          <Image src={'assets/reconciliation.png'} margin="0px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" >
          <Heading size={2} textColor="tertiary" margin=".5em">Beyond Web</Heading>
          <Appear>
            <Heading size={4} textColor="primary">React Native</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">AR/VR</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">Server-side</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">Canvas</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">Netflix TV</Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <Heading size={2} textColor="primary">Separation of concerns</Heading>
          <Heading size={2} margin=".5em">
            <span role="img" aria-label="hate">🤬</span>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Image src={'assets/separation-concerns.jpg'} margin="0px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="primary">How about the M&C</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary">Flux</Heading>
          <Image height="60%" width="60%" src={'assets/flux-logo.png'} margin="20px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <Heading size={4}>Unidirectional data flow</Heading>
          <Image height="60%" width="60%" src={'assets/flux-diagram.png'} margin="20px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="tertiary">Redux</Heading>
          <Image height="40%" width="40%" src={'assets/redux-logo.svg'} margin="20px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <LiveProvider
            noInline={true}
            scope={{Provider, createStore, connect}}
            code={
`class Counter extends React.Component {
  increment() {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement.bind(this)}>-</button>
          {' '}
          <span>{this.props.count}</span>
          {' '}
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

Counter = connect(mapStateToProps)(Counter);

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App/>);`
          }>
            <Layout>
              <Fit>
                <div onKeyDown={(e) => {e.stopPropagation()}}>
                  <LiveEditor
                    style={{fontSize: 16, width: '50vw', height: '60vh', overflow: 'scroll'}}
                  />
                </div>
              </Fit>
              <LiveError style={{color: "red", margin: "20px", minWidth: '25em'}} />
              <LivePreview style={{margin: "auto 20px"}} />
            </Layout>
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="secondary">We're hiring</Heading>
          <Image height="50%" width="50%" src={'assets/jorge.jpg'} margin="0px auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="quartenary">
          <Heading size={2} textColor="secondary">Thank You!</Heading>
        </Slide>

      </Deck>
    );
  }
}
