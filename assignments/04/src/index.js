import React from 'react';
import ReactDOM from 'react-dom';

function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

class PokemonAPI extends React.Component {
  constructor(props){
    super(props);
    this.searchPokemon = this.searchPokemon.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
    this.state = {
      search: '',
      pokemon: ''
    };
  }

  searchPokemon(e){
    this.setState({search: e.target.value});
  }

  loadPokemon(){
    let url = 'http://pokeapi.co/api/v2/pokemon/charmander/';
    getAjaxPromise(url).then((data) => {
      this.setState({pokemon: JSON.parse(data)});
    });
  }

  render(){
    return(
      <div>
        <h1>Pokemon Database!</h1>

        <form>
          <input type="text" onChange={this.searchPokemon}/>
          <input type="submit" value="Search" onClick={this.loadPokemon}/>
        </form>

        <ul>
          {this.state.pokemon.name}
          {this.state.pokemon.height}
          {this.state.pokemon.weight}
        </ul>
      </div>
    );
  }
}

/*
 * http://pokeapi.co/api/v2/pokemon/charmander/
 * http://pokeapi.co/media/sprites/pokemon/shiny/200.png
 */

ReactDOM.render(
  <div className="example-style"><PokemonAPI/></div>,
  document.getElementById('root')
);
