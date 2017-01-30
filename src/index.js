require('./style/style.css');

import Headline from './module';

import { add } from './math.js'

// document.querySelector( '.app' ).innerHTML = `${Headline.html}`;
document.querySelector( '.app' ).innerHTML = `${add( 3, 10 )}`;


if ( module.hot ) {
    module.hot.accept();
}
