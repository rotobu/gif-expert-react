export const GifItem = ({ url, title, id }) => {
    //console.log({ url, title, id });

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}