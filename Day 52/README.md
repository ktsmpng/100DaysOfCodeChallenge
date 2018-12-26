100DaysOfCodeChallenge - Day 52

1) Learning how to structure CSS/SASS

Notes: 
[Source: https://vanseodesign.com/css/sass-directory-structures/ ]

	* Good practice to modularize css code as project grows larger.

	* Importing a directives can help seperate out code into fold structures for components that have commonalities between them

	An example structure

		modules/
			_color.scss
			_typography.scss
		partials/
			_base.scss
			_navigation.scss
		vendor/
			_ico-moon.scss
		main.scss 


	* Module - Code to include but not compile.
	  Vendor - Holds 3rd party code
	  Partials - Code that needs to compile

	* The 7 - 1 Pattern from Hugo Giraudel

		base/ (Boilerplate)
			_reset.scss
			_typography.scss
			_color.scss
		components/ (Micro layout files)
			_buttons.scss
			_navigation.scss
			_gallery.scss
		layout/ (Macro Layouts)
			_header.scss
			_grid.scss
			_sidebar.scss
		pages/ (Styles specific to page)
			_home.scss
			_about.scss
			_contact.scss
		themes/ (Specific Themes e.g Light and Dark Theme)
			_theme.scss
			_admin.scss
		helpers/ (or utils/) (Sass tools, config, variables and helpers)
			_variables.scss
			_functions.scss
			_mixins.scss
		vendors/ (3rd Party Code)
			_bootstrap.scss
			_jquery-ui.scss
		main.scss