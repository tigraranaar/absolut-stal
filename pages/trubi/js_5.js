'use strict';

fetch('products_5.json')
    .then(function(response) {
        return response.json()
    }).then(function(json) {
    console.log('parsed json', json);
    createTree(json);

}).catch(function(ex) {
    console.log('parsing failed', ex);
});
