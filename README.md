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