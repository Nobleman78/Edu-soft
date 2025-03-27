

const getCourseFromLocalStorage = () => {
    // I will get the courseData as a String
    const courseData = localStorage.getItem('course');
    if (courseData) {
        return JSON.parse(courseData)
    }

    return [];


}

// Save to Local Storage

const saveToLocalStorage = (course) => {
    const stringifyData = JSON.stringify(course);
    localStorage.setItem('course', stringifyData);
}

// Add to course to Local Storage

const addToLocalStorage = (id) => {
    const course = getCourseFromLocalStorage();
    const isAlreadyEnrolled = course.some(courseId => courseId === id);
    if (!isAlreadyEnrolled) {
        course.push(id);
        saveToLocalStorage(course);
        return true
    }
    return false

}
export { addToLocalStorage, getCourseFromLocalStorage }