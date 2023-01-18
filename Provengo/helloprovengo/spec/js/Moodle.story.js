/* @provengo summon selenium */

/**
 * This story opens a new browser window, goes to google.com, and searches for a pizza.
 */
story('Teacher removes student from extra-time group', function () {
  let s = new SeleniumSession().start()
  s.LogIn({username: "teacher", password: "TeacherAdmin123"})
  s.TeacherNavigatesToEnrolledUsersPage()
  s.TeacherRemovesStudentFromExtraTimeGroup()
  s.CheckStudentIsNoLongerInExtraTimeGroup()
})

/**
 * This story opens a new browser window, goes to google.com, and searches for a pizza using the "I Feel Lucky" feature.
 */
story('Student moves to the next page in a quiz', function () {
  // the "with" statement makes it redundant to write "s." before each call to a defined event (like the story above)
  with (new SeleniumSession().start()) {
    LogIn({username: "student", password: "StudentUser123"})
    StudentIsAttemptingAQuiz()
    CheckQuizHavingMoreThanOnePage()
    StudentMovingToTheNextPage()
    AssertQuizContinuesFromTheNextPage()
  }
})

// story('Check if quiz is on the next page before remove student', function () {
//   // the "with" statement makes it redundant to write "s." before each call to a defined event (like the story above)
//   let s = new SeleniumSession().start('https://google.com')
//   interrupt(Any('TeacherRemovesStudentFromExtraTimeGroup'), function () {
//     s.AssertQuizContinuesFromTheNextPage()
//   })
// })

// story('Check if quiz is on the next page after student moved', function () {
//   // the "with" statement makes it redundant to write "s." before each call to a defined event (like the story above)
//   interrupt(Any('EndOfAction').and(Any({eventName: "StudentMovingToTheNextPage"})), function () {
//     let s = new SeleniumSession().start()
//     s.AssertQuizContinuesFromTheNextPage()
//   })
// })

// story('Check if quiz is on the next page before and after remove student', function () {
//   // the "with" statement makes it redundant to write "s." before each call to a defined event (like the story above)
//   let s = new SeleniumSession().start()
//   on(Any('TeacherRemovesStudentFromExtraTimeGroup'), function () {
//     s.AssertQuizContinuesFromTheNextPage()
//   })
//   interrupt(Any('TeacherRemovesStudentFromExtraTimeGroup'), function () {
//     s.AssertQuizContinuesFromTheNextPage()
//   })
// })

