import './searchForm.css';

function searchForm  ()  {

    return     (

        <form className="search-form" action="/search" method="get">
            <input className="search-input" type="search" id="search" name="search" placeholder="Search the collection"></input>
        </form>
    
        );
        
}



export default searchForm;