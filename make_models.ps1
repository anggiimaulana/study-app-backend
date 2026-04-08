$models = @(
    "School", "Major", "AcademicYear", "Classroom", "Subject", "Student", "Teacher",
    "Schedule", "Attendance", "Task", "TaskSubmission", "Exam", "ExamClassroom", "Question",
    "QuestionOption", "ExamAttempt", "ExamAnswer", "Grade", "Payment", "MyfessPost",
    "MyfessComment", "Counseling", "LibraryBook", "LibraryVisit", "LibraryBorrowing",
    "JobVacancy", "JobApplication", "PpdbRegistration", "Material", "Announcement", "Complaint"
)

foreach ($model in $models) {
    php artisan make:model $model -m --no-interaction
}
