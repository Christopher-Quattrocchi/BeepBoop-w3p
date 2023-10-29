# _Portfolio Project - End of Week Three_

#### _Practice Git operations, HTML, JS branching, loops, arrays Oct 27th 2023_

#### By _**Chris Quattrocchi**_

## Description

_End of week three recap. JavaScript practice with loops, arrays, and branching. Takes a number and a name, then counts down from that number to zero. Replaces numbers containing 3 with "Won't you be my Neighbor, name?", numbers containing 2 with "Boop!", numbers containing 1 with "Beep", and numbers containing 5 with "FIVE DETECTED", in that order. The alternate function does the same thing, but in the reverse order. Also, the alternate function ignores numbers containing 5._



## Setup/Installation Requirements

* _clone repository or use the download link_
* _extract zip file if required_
* _open index.html_


## Known Bugs

_Currently not known_

## Support and contact details

_chrisquattrocchi@gmail.com, phone number is 503-841-0072_

## Technologies Used

_HTML, CSS, Git and JS were used in the creation of this page_

## Link to gh-pages


[gh-pages link]([
](https://christopher-quattrocchi.github.io/BeepBoop-w3p/)
https://christopher-quattrocchi.github.io/BeepBoop-w3p/)

### License

Copyright (c) 2023-3077 **_{Chris Quattrocchi}_**

Instructions/testing

Description: Take a number as input, and returns a list of values from 0 to the input number. 
Substitutions should be made (in this order):

Numbers containing 3, all digits replaced by "Won't you be my neighbor?"
Numbers containing 2, all digits replaced by "Boop!"
Numbers containing 1, all digits should be replaced by "Beep!"

Add second input box to take a name, and add that to "Won't you be my neighbor, name?
Add second form to count down from input number
Maybe add some other modifications for numbers
Style it a bit


Solve with: Loop, array, branching. User should be able to enter another number after the first, and see the new results over and over.

Utilize TDD.

TESTS:

PASSED
Test: "It should return an array of numbers from 0 to input number"
Code: beepboop(5);
Expected Output: 0 1 2 3 4 5

PASSED
Test: "It should replace numbers that contain a 3 with "Won't you be my neighbor"
Code: beepboop(3);
Expected Output: 0 1 2 Won't you be my neighbor?

PASSED
Test: "It should replace numbers containing 2 with "Boop!"
Code: beepboop(2);
Expected Output: 0 1 Boop!

PASSED
Test: "It should replace numbers containing 1 with "Beep!"
Code: beepboop(3);
Expected Output: 0 Beep! Boop! Won't you be my neighbor!

PASSED
Test: "It should clear previous results on submit"
Code: --
Expected Output:--

PASSED
Test: "It should add name to 'Won't you be my neighbor?'"
Code: beepboop(5, name)
Expected Output: ..."Won't you be my neighbor, name?"...

PASSED
Test: "Same as the beepBoop, but backwards"
Code: boopbeep(5)
Expected Output: 5 4 Wont you..

getting back to testing:

TODO: Make beepboop and boopbeep work with one loop SUCCESS

Test: use pseudo classes to change the styling for the input based on whether the input is valid or not
Code: validationCheck(-1, name)
Expected Output: input turns red

Test: make a drop down where the user can decide whether they want to use a name or not. If no, disable the name validation check and output "Won't you be my neighbor?" without the name
Code: 
Expected Output