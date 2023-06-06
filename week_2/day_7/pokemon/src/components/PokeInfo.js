import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokeInfo(props) {
    if (!props.pokemon) {
        return ;
    }


    return (
    <div className="card mx-5 mt-3 p-4 bg-light">
        <h3> {props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)} </h3>

        <div>
        {props.pokemon.imageURL && <img src={props.pokemon.imageURL} alt="Pokemon" />}
        </div>

        <div className="m-3"> 
            {getTypes(props.pokemon)}
        </div>

        {/* get base stats (hp, attack, defense, spatk, spdef, spd ) */}
        <h6 className = "mt-1"> Base stats: </h6>


    <div className = "px-5 mx-5" style={{ overflow: 'auto' }}>
        <div  style={{ float: 'left', width: '50%' }}>
            <p> <strong> HP: </strong> {props.pokemon.baseStats[0]}</p> 
            <p> <strong> Atk: </strong> {props.pokemon.baseStats[1]}</p> 
            <p> <strong> Def: </strong> {props.pokemon.baseStats[2]}</p> 
        </div>
         <div  style={{ float: 'left', width: '50%' }}>
            <p> <strong> SpAtk: </strong> {props.pokemon.baseStats[3]}</p> 
            <p> <strong> SpDef: </strong> {props.pokemon.baseStats[4]}</p> 
            <p> <strong> Speed: </strong> {props.pokemon.baseStats[5]}</p> 
        </div>
    </div>        

        <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ background: 'none', border: 'none', textDecoration: 'none', color: 'black'}}
            >
              Moves that {props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)} can learn (click here to collapse):
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="row">
              <div className="col">
                {props.pokemon.moves.slice(0, Math.ceil(props.pokemon.moves.length / 2)).map((element, index) => (
                  <p key={index}>{element}</p>
                ))}
              </div>
              <div className="col">
                {props.pokemon.moves.slice(Math.ceil(props.pokemon.moves.length / 2)).map((element, index) => (
                  <p key={index}>{element}</p>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>




    </div>
        
  );

  function getTypes(pokemon) {

    const getColoredText = (text, color) => {
        const style = { color: color, fontWeight: 'bold' };
        return <span style={style}>{text}</span>;
      };

    if (pokemon.types.length === 1) {
        return (<span> <strong> Type: </strong>  {getColoredText(pokemon.types[0].toUpperCase(), getTypeAsColor(pokemon.types[0]))}</span>);
    }

    return (
    <div> 
        <span> <strong> Types: </strong> {getColoredText(pokemon.types[0].toUpperCase(), getTypeAsColor(pokemon.types[0]))}, {getColoredText(pokemon.types[1].toUpperCase(), getTypeAsColor(pokemon.types[1]))}</span>
    </div>   
        );
  }

  function getTypeAsColor(type) {
    if (type==='grass') return 'darkolivegreen';
    else if (type==='ground') return 'burlywood';
    else if (type=== 'fire') return 'darkorange';
    else if (type=== 'normal') return 'dimgray';
    else if (type=== 'water') return 'deepskyblue';
    else if (type=== 'fighting') return 'firebrick';
    else if (type=== 'psychic') return 'deeppink';
    else if (type=== 'poison') return 'darkviolet';
    else if (type=== 'ghost') return 'darkslateblue';
    else if (type=== 'dragon') return 'navy';
    else if (type=== 'dark') return 'black';
    else if (type=== 'fairy') return 'palevioletred';
    else if (type=== 'flying') return 'cornflowerblue';
    else if (type=== 'rock') return 'saddlebrown';
    else if (type=== 'electric') return 'gold';
    else if (type=== 'bug') return 'yellowgreen';
    else if (type=== 'ice') return 'turquoise';
    else if (type=== 'steel') return 'cadetblue';
  }
}
