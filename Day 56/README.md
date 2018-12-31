100DaysOfCodeChallenge - Day 56

1) Resolving conflicts within my branch to match latest branch Polyglotdevs app
2) Static Files load issue

Issues:

	- Initially I had made updates to my branch but the master was behind compared to remote.
	There was a new branch develop which had the latest updates
	I mistakenly pulled and merged --abort which merged conflicts with the latest develop banch unto my branch.
	I had to reset my local branch to match remote branch as a result and pull from develop and rebase instead which resolved the issue.

	- Static files would not load as staticfiles_dir was pointing to dist which is supposed to be auto generated in the new PR.
	  Once I changed the folder to styles it was able to load
