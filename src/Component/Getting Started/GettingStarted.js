import React from 'react';

import './GettingStarted.css';
function GettingStarted() {
    return (
        <main>
            <div>
            <h3>
                What is React?
            </h3>   
            <p>
                     React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.<br></br>
        
                     React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.<br></br>
        
                     React JS is also called simply to React or React.js.
             </p>
        </div>
        <div>
            <h3>
            Why React?
            </h3>
            <p>
            Now, the main question arises in front of us is why one should use React. There are so many open-source platforms for making the front-end web application development easier, like Angular. Let us take a quick look on the benefits of React over other competitive technologies or frameworks. With the front-end world-changing on a daily basis, it’s hard to devote time to learning a new framework – especially when that framework could ultimately become a dead end. So, if you're looking for the next best thing but you're feeling a little bit lost in the framework jungle, I suggest checking out React.<br></br><br></br>
 
 1. Simplicity<br></br><br></br>
  
 ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use.<br></br><br></br>
  
 2. Easy to learn<br></br><br></br>
  
 Anyone with a basic previous knowledge in programming can easily understand React while Angular and Ember are referred to as ‘Domain-specific Language’, implying that it is difficult to learn them. To react, you just need basic knowledge of CSS and HTML.<br></br><br></br>
  
 3. Native Approach<br></br><br></br>
  
 React can be used to create mobile applications (React Native). And React is a diehard fan of reusability, meaning extensive code reusability is supported. So at the same time, we can make IOS, Android and Web applications.<br></br><br></br>
  
 4. Data Binding<br></br><br></br>
  
 React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps.<br></br><br></br>
  
5. Performance<br></br><br></br>
  
 React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically.<br></br><br></br>
  
 6. Testability<br></br><br></br>
  
 ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.<br></br><br></br>
            </p>
        </div>
        <div>
            
        </div>
        </main>
    );
}

export default GettingStarted;