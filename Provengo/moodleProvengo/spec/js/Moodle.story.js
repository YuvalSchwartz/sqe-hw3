/* @provengo summon selenium */

/**
 * This story opens a new browser window, goes to google.com, and searches for a pizza.
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
 * This story opens a new browser window, goes to google.com, and searches for a pizza using the "I Feel Lucky" feature.
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