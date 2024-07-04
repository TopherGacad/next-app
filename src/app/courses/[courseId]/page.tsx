export default function ListofCourses ( {params} : {
    params : {courseId : string};
} ){
    return (
        <h1>
            This is trial page {params.courseId}
        </h1>
    )
}