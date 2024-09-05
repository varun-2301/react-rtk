/* gets displayed when there is no record in listing page */
export const displayRecordNotFound = (message = 'No Records Found') => {
    return (
        <div className="alert alert-info m-t-20 text-center">
            <i className="fa fa-info-circle"></i> {message}
        </div>
    )
}