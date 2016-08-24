'use strict';

const base = 'http://localhost:8080';
const urlise = (text) => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
const setUrl = (app, page) => `${base}/${urlise(app)}${page ? '/' + urlise(page) : ''}`;

module.exports = function () {

    this.When(/^I start the "([^"]*)" app$/, function (app) {
        this.url(setUrl(app))
        .waitForElementVisible('body', 1000);
    });

    this.When(/^I (?:start on|go to) the "([^"]*)" page of the "([^"]*)" app$/, function (page, app) {
        this.url(setUrl(app, page))
        .waitForElementVisible('body', 1000);
    });

    this.Given(/^I (?:am|should be) on the "([^"]*)" page of the "([^"]*)" app$/, function (page, app) {
        this.assert.urlEquals(setUrl(app, page));
    });

    this.When(/^I click "([^"]*)"$/, function (value) {
        this.click(`input[value=${urlise(value)}]`);
    });

    this.When(/^I continue$/, function () {
        this.click(`input[type=submit]`);
    });

    this.Then(/^the "([^"]*)" should contain "([^"]*)"$/, function (field, value) {
        this.assert.containsText(`.${urlise(field)}`, value);
    });

};
