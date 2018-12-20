100DaysOfCodeChallenge - Day 48

1) Started on the book FullStack React as I haven't been able to progress with FCC projects. I want to revisit topics and come back to the FCC projects at a later stage

2) Building Voting app from Fullstack React by Anthony accomazzo similar to reddit. 

Chapter 1 Notes:

	* Dependancies are stored in package.json which can be installed with 'npm install' - installed packages can be found in the folder node_modules/

	* index.html is the starting point of the app where rest of app's assest are load. This can be found in public/.

	* public/js is where apps javascript will be built.

	* React Components are the building blocks of what make up a React Application. They allow for the seperation of UI into individual components which can be reused. They can also accept 'props' from other React Components - functions or attributes. 

	* When the state or 'input' of a component changes the component is simply re-render.

	* React components are an ES6 classes which extend the React.Component

	* JSX (JavaScript eXtension syntax) - allows for markup language to be written inside our components. When it the code compiles this will turn our code into vanilla Javascript.

	* While js representation can also be used JSX improves the overall readibility to resemble tradition DOM's HTML tree structure. 

		- JS version
		'React.createElement( 'div' , {className : 'ui items' }, 'Hello, friend! I am a basic React component.' )'

		-JSX version
		'< div className = 'ui items' > Hello, friend ! I am a basic React component. < /div>'

	* Console initially throws an error as it does not know what JSX is. Browsers may not always fully support ES6. 'BABEL' a transpiler allows us to mitigate this problem by translating our code from ES6 to vanilla ES5 JavaScript. To instruct browser to use babel we have to add a script to the head of or template 'index.html'. Next we will have to set the script we want to translate by changing the type attribute to 'text/babel'.

	* Data can be past from parent components to child components through 'props'. When the parent renders child component the prop can be passed by including the syntax 'propName=propValue'.

	* A child component cannot modify props as it belongs to the parent. Data changes come from the top of the app and are propogated downwards. 

	* When defining a custom method inside a component React does not bind 'this' to the component for us, unlike the render() method which automatically has this readily available. To manually bind this to the component we have to define constructor() and use 'this.[function] = this.[function].bind(this)'. React will then invoke the constructor method when the component is initialized.

	* While props are 'immutable' state is owned by the component. When state changes the component will update and re-render.

	* state can be change via using the this.setState({key: value}) function.

	* state objects should be treated as immutable as the.setState is asynchrounous meaning it does not always update right away.