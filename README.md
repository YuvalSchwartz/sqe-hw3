# Assignment 3: Software Quality Engineering
This is a repository for assignment 3 of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://moodle.org).

Moodle is a free and open-source learning management system (LMS) used to create and manage online learning environments. It is designed to help educators create and manage online course materials, and it includes features such as quizzes, assignments, and discussion forums. It is widely used by schools and universities around the world.

## Installation
1. Go to the following link: https://download.moodle.org/windows/
2. Download the zip file of the version of your choice (we recommend a stable version).
3. Execute "Start Moodle" file.
4. Now you can go to http://localhost/ to enter the moodle server.
5. Whenever you are done, remember to execute "Stop Moodle" file.

## What we tested
We tested the quiz module that allows adding different groups of participants with properties that overrides the original quiz's properties. For example - get extra time for the quiz.

 We chose to test the following user stories: 

*User story:* A teacher removes a student from extra-time group of a quiz.

*Preconditions:* 
1. There is a course with a teacher, a student, and a quiz.
2. The student is in an extra-time group of the quiz.

*Expected outcome:* The student is no longer in the extra time group, and he is no longer has an extra-time for the quiz.

*User story:* A students attempts a quiz and move to the next page.

*Preconditions:*  There is a course with a student and a quiz with 2 pages.


*Expected outcome:* The student moves to the next page successfully, and the quiz continues.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a BDD testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
Update all README.md files (except for d-e, see Section 1).

## Detected Bug
We detected the following bug:
   1. **General description:** 
      In case when those two user stories happen in parallel - the teacher is removing the student from the extra-time group while the student is attempting the quiz, the outcome can be unexpected. Here are the two possible outcomes:
         
         *a.* The teacher is removing the student from the group, and then the student is refreshing the page/ moves to the next page. If the original time of the quiz is up, the quiz will be closed automatically, even though the timer shows differently.
      
         *b.* If the last refresh of the student happens before the teacher removes him from the extra-time group, then the timer of the extra-time does not change automatically to the original time of the quiz, and the student gets the extra time (he doesn't deserve anymore) until he refresh.
   2. **Steps to reproduce:**

         *a.* The student is in the extra-time group and is attempting the quiz.

         *b.* At the same time, the teacher is removing this student from the extra-time group.

         *c.* The student is not refreshing the quiz in any way, and the timer remains the extra-time timer.

         *d.* Then, after the original time is up but the timer is still running, the student is refreshing the page and quiz attempt finished automatically.


   3. **Expected result:** The quiz ends according to the time that the timer is showing.
   4. **Actual result:** If the student has been removed from the extra-time group and hasn't refreshed the quiz, the timer will not be updated automatically until it will be refreshed manually, and the quiz can be closed unexpectedly when refreshing.
 
