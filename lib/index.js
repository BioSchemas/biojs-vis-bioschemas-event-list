/*
 * biojs-vis-bioschemas-event-list
 * https://github.com/ficolo/biojs-vis-bioschemas-event-list
 *
 * Copyright (c) 2017 Federico
 * Licensed under the MIT license.
 */

/**
@class biojsvisbioschemaseventlist
 */


var  biojsvisbioschemaseventlist;
module.exports = biojsvisbioschemaseventlist = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsvisbioschemaseventlist.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisbioschemaseventlist.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisbioschemaseventlist.hello = function (name) {

  return 'hello ' + name;
};

