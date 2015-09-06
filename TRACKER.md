## STORIES
1. add swig to our drop down menu's of languages
1. back-end for the challenge portion of questions

1. create functions for the progress tracker
1. connect progress tracker to the user's statistic's in mongo


## CURRENT
1. user should be able to select their name in the opening screen


## ICEBOX
1. add authentication for the user
1. add level of difficulty for the challenges based on past challenges
1. Refactor into angular
1. Add TDD to our utilities
1. Add a charting library to the progress section
1. Use firebase instead of mongo
1. refactor html with bootstrap themes

## DONE
1. add random word generator



## PLAY page
#### Start and End area
1. After clicking start, select starting language. This starting language should then generate a random word based on that language (store the random word). (then append the value of that selected language above the word start).
1. After selecting ending language, a translated "value (or answer)"" will be generated based on the current random word. (might need to add a time delay in order to grab value of random word to then find the translated answer)

####Play area
1. Once the "submit guess" button is clicked the value of the guessInput value will be compared with the ending language "value (or answer)". If "guessInput" and "answer" match, "correct =+ 1", or if they dont match, "wrong =- 1".
1. Every time the "submit guess" button is clicked "word count =+ 1" and all information is saved to database. Also, modal appears every time to reveal the guessInput value and the answer and if it was right or wrong. This info can be appended to the modal easily once values are captured in above steps.
1. Once the modal appears and the player see's their score- there is a "next word" button. When this button is clicked then another random word should appear.

####Challenges/ Rounds
1. For now challenges(or rounds) can be based off every 10 words, so "challenges/rounds =+ 1" for every 10 words. If 7 are answered correctly within those 10 words "pass =+1" otherwise "fail =-1"

####Progress Bar
1. The value of the user name needs to append here.
1. The current stats of the user will also appear here
1. The progress bar can be based on accuracy of words passed or failed (this is a stretch goal)

