100DaysOfCodeChallenge - Day 51

1) Today I want to learn on how to make Django RESTApi and connect with React Front-end
   I will be working through the book RESTApi's with Django by William S.Vincent
2) First project will be to make a Library API 

Building Library API Notes:

	* pipenv - creates pip file which contains all dependancies for our environment
	* __init__.py - Pythons way of hangling directory as a package
	* wsgi.py - web server gateway interface serves web pages
	* admin.py - configuration file for the Django Admin app.
	* apps.py - configuration file for the app 
	* migrations/ - stores the migration files for the db changes for the app the directory it is in
	* views.py - request/ response logic is handled here.
	* url.py - routing 
	* Add new apps to the bottom of Installed_APPs as you want the admin and auth to load before our custom apps do.
	* When making migrations it is good practice to specifiy name in order to make debugging easy at a later stage.
	* Serializers takes data and translates that into a format of information that can be easily sent over the internet. JSON is the typical format that is displayed at an API endpoint. 
	* When hooking up REST_framework Serializer to our BookSerializer Class, we are inheriting from the ModelSerializer which will directly link our Book classes db to the BookSerializer. This will allow us to translate the data. By specifying fields we are tell the Serializer what is allowed to be read through the API from our database.