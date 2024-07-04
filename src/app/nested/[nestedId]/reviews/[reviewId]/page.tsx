export default function reviewNest ( {params} : {
    params : {  nestedId : string
                reviewId : string};
} ){
    return (
        <h1>
            this is review no: {params.nestedId} for nest no: {params.reviewId}
        </h1>
    )
}