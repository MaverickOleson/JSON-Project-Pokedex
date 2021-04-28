var charmander = JSON.parse(`{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 85
  }`);
var charmeleon = JSON.parse(`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 190
}`);

var charizard = JSON.parse(`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying"
      }
    }
  ],
  "weight": 905
}`);
//Parsed pokemon JSON objects created as variables, named after each of the different pokemon

var images = {
    Charmander: 'https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/900px-004Charmander.png',
    Charmeleon: 'https://cdn2.bulbagarden.net/upload/4/4a/005Charmeleon.png',
    Charizard: 'https://cdn2.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/900px-006Charizard.png'
}
//an object created for each pokemon's link

function createPage(pokemon, name){
    //createPage function for each different pokemon, accepting the pokemon object and the name of the pokemon as its parameters
    
    var main = document.getElementsByTagName('main')[0];
    //variable for main tag

    function elem(Element){
        return document.createElement(Element);
    }
    //function for creating different elements

    var img = elem('IMG');
    img.src = images[name];
    main.appendChild(img);
    //pokemon image created and added to main

    var {abilities: [{name: ability1Text}]} = pokemon;
    var {abilities: [,{name: ability2Text}]} = pokemon;
    var {base_experience} = pokemon;
    var {id} = pokemon;
    var {is_default} = pokemon;
    var {order} = pokemon;
    var {weight} = pokemon;
    //different first level object items created as variables
    
    function attribute(attributeID ,titleName, text, location){
        //function for creating an attribute node, accepting parameters of attributeID, titleName, text, and location

        var attribute = elem('DIV');
        attribute.id = attributeID;
        //div for attribute created, with attributeID made as the id

        var title = elem('H3');
        title.className = 'title';
        title.innerHTML = titleName;
        attribute.appendChild(title);
        //h3 element created with a class of title, given titleName as its text, and appended to the attribute element
    
        var attributeDiv = elem('DIV');
        attributeDiv.className = 'attribute';
        //div that contains the attributes inside it, named attributeDiv, created and given 'attribute' as its class
    
        var attributeText = elem('P');
        attributeText.innerHTML = text;
        //attribute text created as p element, with a text of text
    
        attributeDiv.appendChild(attributeText);
        //attributeText appended to attributeDiv
        attribute.appendChild(attributeDiv);
        //attributeDiv appended to attribute
        location.appendChild(attribute);
        //attribute appended to location
    }

    var attribute1 = elem('DIV');
    attribute1.id = 'abilities';

    var title = elem('H3');
    title.className = 'title';
    title.innerHTML = 'Abilities';
    attribute1.appendChild(title);

    var attributeDiv = elem('DIV');
    attributeDiv.className = 'attribute';

    var attributeText1 = elem('P');
    attributeText1.innerHTML = ability1Text;

    var attributeText2 = elem('P');
    attributeText2.innerHTML = ability2Text

    attributeDiv.appendChild(attributeText1);
    attributeDiv.appendChild(attributeText2);
    attribute1.appendChild(attributeDiv);
    main.appendChild(attribute1);
    //essentially the attribute function, but with two attribute texts.

    attribute('baseExp' ,'Base Experience', base_experience, main);

    attribute('id' ,'ID', id, main);

    attribute('default' ,'Default?', is_default, main);

    attribute('name', 'Name', '' + name, main)

    attribute('order' ,'Order', order, main);
    //the attribute function is activated five times, with varying ids, titles, and texts used, but all having the location of the main tag

    var stats = elem('DIV');
    stats.id = 'stats';
    main.appendChild(stats);
    //stats div created and appended to main

    var title = elem('H2');
    title.innerHTML = 'Stats';
    stats.appendChild(title);
    //title for stats, with the text 'Stats' created and appended to stats

    var {stats: [{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    stats.appendChild(elem('HR'))

    var {stats: [,{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    stats.appendChild(elem('HR'))

    var {stats: [,,{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    stats.appendChild(elem('HR'))

    var {stats: [,,,{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    stats.appendChild(elem('HR'))
    
    var {stats: [,,,,{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    stats.appendChild(elem('HR'))

    var {stats: [,,,,,{base_stat, effort, stat}]} = pokemon;
    stat = stat.name;
    attribute('statName' ,'Stat Name', stat, stats);
    attribute('baseStat' ,'Base Stat', base_stat, stats);
    attribute('effort' , 'Effort', effort, stats);
    //multiple instances of different items of the Stats array being put into the attribute function, with varying, ids, titles, reoccuringly used texts, and the same location of the stats div

    var types = elem('DIV');
    types.id = 'types';
    main.appendChild(types);

    var title = elem('H2');
    title.innerHTML = 'Types';
    types.appendChild(title);

    var {types: [{slot, type}]} = pokemon;
    type = type.name;
    attribute('type' ,'Type', type, types);
    attribute('slot' ,'Slot', slot, types);
    types.appendChild(elem('HR'))

    var {types: [{slot, type}]} = pokemon;
    type = type.name;
    attribute('type' ,'Type', type, types);
    attribute('slot' ,'Slot', slot, types);
    //almost identical to what I did with stats, except using items from the types array that are appended to a types div

    attribute('weight', 'Weight', weight, main);
    //a final attribute function used for the weight item
}

if(document.body.id == 'charmander') createPage(charmander, 'Charmander');
if(document.body.id == 'charmeleon') createPage(charmeleon, 'Charmeleon');
if(document.body.id == 'charizard') createPage(charizard, 'Charizard');
//if statements that are used to check for what id the web page uses to call the createPage function with the proper pokemon object and name