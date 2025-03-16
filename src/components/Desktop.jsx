import germanyImage from '../assets/images/germany.jpeg';

export function Desktop () {
    return (
        <>
        <div className="search-filter-layer">
            <div className="search-input">
                <i className="fa-solid fa-search search-icon"></i>
                <input type="text" placeholder="Search for a country..."/>
            </div>
            <div className="filter-region">
            <select>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            </div>
        </div>

        <div className="Card-Display">
            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Germany</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>United States of American</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Brazil</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={germanyImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>81770900</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </section>
        </div>
        </>
    )
}