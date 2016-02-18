import {flatter, scold as curse} from './Misc/8-export.es6';
import {words} from './Misc/8-export.es6';
// import * from 'Misc/8-export';
// import * as 8-export from 'Misc/8-export';
// import * as _ from 'lodash';
import {upperCase, forEach} from 'lodash';

let [scoldWords, flatterWords] = words;

forEach(words, (attr) => {console.log(`words has ${attr}`)});

flatter(flatterWords[0]);
curse(upperCase(scoldWords[1]));