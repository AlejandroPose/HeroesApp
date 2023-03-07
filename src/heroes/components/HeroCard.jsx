import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
    const heroImageUrl = `/img/${ id }.jpg`;

    const CharacterByHero = ({ characters, alter_ego }) => {
        return (alter_ego === characters) ? <></> : <p>{characters}</p>;
    };

    return (
        <div className="col d-flex align-items-stretch animate__animated animate__fadeInUp">
            <div className="card w-100">
                <div className="row h-100">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-8">
        	            <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            <CharacterByHero characters={characters} alter_ego={alter_ego} />
                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${ id }`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};