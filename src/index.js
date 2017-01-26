import Headline from './module';

document.querySelector( '.app' ).innerHTML = `${Headline.html}`;


if ( module.hot ) {
    module.hot.accept();
}
