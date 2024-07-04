export default function firstNested ( {params} : {
    params : {nestedId : string};
} ){
    return(
        <h1>this is the nest {params.nestedId}</h1>
    )
}