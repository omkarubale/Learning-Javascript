const courses = [
    { id : 1, name : 'ECE'},
    { id : 2, name : 'EEE'},
]

console.log(courses.find(function(course) {
    return course.name == 'ECE';
}))