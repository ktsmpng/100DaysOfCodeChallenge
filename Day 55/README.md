100DaysOfCodeChallenge - Day 55

1) Build a Todo List Django REST API and connect with React

User Requirements:
	
		* Be able to add/remove a todo to a list and update browser 

System Requirements
		
		* Backend - Django Rest API handle (CRUD) requests
			
			- Models: Todo will have a title and description
			- Serializer: Todo serialize model to JSON object - title and description
		
		* Frontend - display todo list and update state accordingly
			REACT Components
			-   Todo List (GET) - Displays initial todo in a list 
					- If list is updated, component needs to re-render
			- 	Todo Form (POST) - Input bar which will allow to type inut and submit button form user to add a new todo to the list
			- 	Check box beside each todo if user clicks as done then a line will cross it out This will update an attribute to true in the db
			- 	