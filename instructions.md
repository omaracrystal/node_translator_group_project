# Node Translate

Let's create a web app for helping people learn a new language.

## Part 1 - setup

1. Create a new project structure using the Galvanize Node/Express generator.
1. Sign up for the [Microsoft Translator API](http://www.microsoft.com/en-us/translator/getstarted.aspx).
1. Test out an API call in your browser.
1. Install the [dotenv](https://www.npmjs.com/package/dotenv) package and define the API keys as environment variables within your project.

## Part 2 - main functionality

The app consists of three main sections - *Practice*, *Challenge*, and *Progress*.

### Practice

1. The translate section consists of a form with the following fields:
  - Language to translate from
  - Language to translate to
  - Word to translate
1. Upon submission, the word is sent to the server-side via jQuery/AJAX. Once received, the word is translated, via the Microsoft Translator API, and a response is sent back via JSON to the client-side.
1. The user is then shown either the translated word or an error message indicating that the translation could not be found.

### Challenge

1. The challenge section first asks the user which language s/he would like to be challenged on.
1. Once selected, the user is then taken through a twenty-question quiz, one question at a time.
1. If the user gets five questions incorrect, the challenge ends and the end user must start the challenge over, from the beginning.
1. During the challenge, the user is given a word and a input box to type in the answer. Keep in mind that you will need to store a random list of words - you could use a [random word generator](http://listofrandomwords.com/) to hard code a list of words or make it dynamic by obtaining the words from either a [random word API](http://randomword.setgetgo.com/) or the [random-words](https://www.npmjs.com/package/random-words) package.
1. For each word challenge, the user submits his/her answer, which is then sent to the server-side via jQuery/AJAX for grading with the Microsoft Translator API.
1. Send the appropriate response back to the client-side and either display a success message, if correct, or an error message along with the correct answer, if incorrect. *If the user's answer is off by just a single character, count it as correct, but still display the correct answer*.
1. Then display the next word to translate.

### Progress

1. Results from the challenges are saved.
1. Let the user view his/her overall results on the progress section:
  - Total number of challenges taken
  - Number of challenges passed
  - Number of challenges failed
  - Total number of words translated
  - Total number of words correctly translated
  - Total number of words incorrectly translated

## Part 3 - bonus

1. Add user authentication (registration, login), via [Passport](http://passportjs.org/), in order to handle multiple users. Check out this [blog post](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VeUoM1NViko) for more info. Add a new section to the progress page to compare the user's overall accuracy to all other users.
1. Add multiple challenge types:
  - Random - default challenge type
  - Hardest - twenty words that the user has gotten wrong the most
  - Least Practiced - twenty words that the user has practiced the least
  - Most Recent - twenty words that the end user was most recently challenged on
1. Utilize Angular instead of jQuery
1. Take a Test Driven Development approach
1. Add a charting library (like NVD3, charts.js) to the progress section
1. Use Firebase instead of MongoDB

## Requirements

1. The application must be a SPA (single page application) that includes RESTful endpoints. Make sure you have two models - *user* and *translation*. Think about what each of these should contain. Check with an instructor after you define them to ensure that you're on the right track.
1. Utilize the Feature Branch Workflow for collaboration.
1. Once the models are defined, start from the end user perspective, creating basic wireframes.
