/* @provengo summon selenium */

/**
 * This story opens a new browser window,
 * logs in to the teacher account,
 * removing the student from the extra-time group.
 */
story('Teacher removes student from extra-time group', function () {
    with (new SeleniumSession().start("http://localhost/")) {
        logIn({username: "teacher", password: "TeacherAdmin123!"})
        teacherNavigatesToEnrolledUsersPage()
        teacherRemovesStudentFromExtraTimeGroup()
        checkStudentIsNoLongerInExtraTimeGroup()
    }
})

/**
 * This story opens a new browser window, 
 * logs in as a student
 * starting the quiz
 * moving to the next page in the quiz.
 */
story('Student moves to the next page in a quiz', function () {
    with (new SeleniumSession().start("http://localhost/")) {
        logIn({username: "student", password: "StudentUser123!"})
        studentAttemptsAQuiz()
        checkQuizHavingMoreThanOnePage()
        studentMovesToNextPage()
        assertQuizContinuesFromTheNextPage()
    }
})