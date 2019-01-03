100DaysOfCodeChallenge - Day 59

1) Building frontend React and connected to Django API

Notes:
	* Making HTTP requests from React App using axios
	* Using ComponentDidMount and a custom Get todo function to make the request when the application is first started

Issues with Git:
	I had initially checkout a different branch for a push version for github. When I updated the master branch I needed to update the secondary branch as well. When I checked it out and made a commit I wasn't sure if it was the correct thing to do so I terminated the process in the command prompt. This meant that though my app couldnt load now because it was behind and I couldn't check back into the master branch as I had an orphaned index.lock file.

	Read More: [https://docs.microsoft.com/en-us/azure/devops/repos/git/git-index-lock?view=vsts]

	To resolve this issue I subsquently had to remove the .git/index.lock file which resolved the issue
	 - 'rm -f .git/index.lock' 