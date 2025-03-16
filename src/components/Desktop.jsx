import germanyImage from '../assets/images/germany.jpeg';
import usaImage from '../assets/images/usa.png';
import brazilImage from '../assets/images/brazil.jpeg';
import icelandImage from '../assets/images/iceland.jpeg';
import afghanImage from '../assets/images/afghan.jpeg';
import alandImage from '../assets/images/aland.jpeg';
import albaniaImage from '../assets/images/albania.png';
import algeriaImage from '../assets/images/algeria.png';


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
                    <img src={usaImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>United States of American</h4>    
                    <br/>
                    <p>Population: <span>323,947,000</span></p>
                    <p>Region: <span>Americas</span></p>
                    <p>Capital: <span>Washington, DC.</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={brazilImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Brazil</h4>    
                    <br/>
                    <p>Population: <span>206,135,893</span></p>
                    <p>Region: <span>Americas</span></p>
                    <p>Capital: <span>Brasilia</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={icelandImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Iceland</h4>    
                    <br/>
                    <p>Population: <span>334,300</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Reykjavik</span></p>
                </div>
            </section>

            <section className="card-1">
                <div className="card-image">
                    <img src={afghanImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Afghanistan</h4>    
                    <br/>
                    <p>Population: <span>27,657,145</span></p>
                    <p>Region: <span>Asia</span></p>
                    <p>Capital: <span>Kabul</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={alandImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Aland Islands</h4>    
                    <br/>
                    <p>Population: <span>28,875</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Mariehamn</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={albaniaImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Albania</h4>    
                    <br/>
                    <p>Population: <span>2,886,026</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Tirana</span></p>
                </div>
            </section>
            <section className="card-1">
                <div className="card-image">
                    <img src={algeriaImage} alt="" />
                </div>
                <div className="card-text">
                    <h4>Algeria</h4>    
                    <br/>
                    <p>Population: <span>40,400,000</span></p>
                    <p>Region: <span>Africa</span></p>
                    <p>Capital: <span>Algiers</span></p>
                </div>
            </section>
        </div>
        </>
    )
}