import assert from 'assert';
//const assert = require('assert');

describe('Client', function () { //define suite title by passing a string

    describe('Page Level', function () { //define sub-suite title by passing a string

        it('Get title', function () { //define test title by passing a string
            browser.url('/'); //open baseUrl + string passed in .url() function
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(5000); //just pause to visually see that something is happening on the page
            console.log(title);//
            assert.equal(title, 'Bug Tracker'); //compare {title} (actual) and "Bug Tracker" (expected)
        })

    });

});