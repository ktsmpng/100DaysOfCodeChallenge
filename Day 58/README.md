100DaysOfCodeChallenge - Day 58

1) Creating Django REST API for Todo App

Notes:
Source [learning from RESTAPIs with DJango by William S Vincent]

	* CORS (Cross Origin Resource Sharing) - there are potential security issues when a client tries to access APIs on a different hosted domain. CORS requires certain headers to be included to determine if this will be allowed. Since the todo api will be hosted on a different domain to our frontend website which will need to access this, these headers will be need to be added. For this project the book recommends django-cors-headers which will automatically do this for us.