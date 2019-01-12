100DaysOfCodeChallenge - Day 66

1) TodoApp- Adding Weekly Todo 

Issues:

I tried to seperate the todo section into its own TTodoApp component and render number of TodoAppcomponents depending on if a week variable is set to true in the main App component. 
If true the it will render a week of TodoApp Components else it will only render Todays tasks.
Currently the app will render the list when set to true but I think there is another components state being changed at the same time thus rerendering the whole app again negating the switch. 

