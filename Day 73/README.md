100DaysOfCodeChallenge - Day 73

1) Reading next Chapter of Clean Code by Robert.C.Martin

Notes:
Chapter 4 - Comments

"The proper use of comments is to compensate for our failure to express ourself in code."

- Coders can't relistically maintain them. The older the code the less accurate the description. 
- In many cases it is better to seperate poor commented explanation as a function 

2) Reading Python Tricks by Dan Bader

Notes: 
- is operator compares identities whilst == operate compares equality
	a = [1,2,3]
	b = a

	a == b //True
	a in b //True

- add commas at the end of list
will prevent "String literal concatenation" make hard to debug.
	a = ["did", "merge" "word"]
	["did", "mergeword"]