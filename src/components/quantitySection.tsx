import './quantitySection.css';

function quantitySection  () {

    return  (

        <div className="quantity">

        <div className="form-check-inline">
            <button className="btn"><i className="fa fa-plus"></i></button>
        </div>

        <div className="form-check-inline">
            <input type="text" className="form-control"/>
        </div>

        <div className="form-check-inline">
            <button className="btn"><i className="fa fa-minus"></i></button>
        </div>

        </div>

);

}




export default quantitySection;