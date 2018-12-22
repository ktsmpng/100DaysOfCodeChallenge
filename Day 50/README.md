100DaysOfCodeChallenge - Day 50

- Today I did some styling on the drumpad with general layout using bootstrap grid layouts.

Issues:
I want to change color of the drumpad when the key is pressed. My initial approach was to use jquery to change the element in the DOM but that did not work as it is not changing the state of the pad so it is not rerendered. 

Possible Solution: 
- In the drumpad have the color set in state. when it is active i.e. when the pad is triggered change state causeing the button to render and update visual.

Possible Solution 2:
- Because we are using bootstrap there is probably a variable that is change withing the HTML markup element when it is active. Again this may need some type of rerendering or activating it within the lifecycle of how React Works. 

Code - https://codepen.io/kitsumpang/pen/JwjOoo?editors=0010