/*
 * Copyright (c) 2015 Austin Teer
 * Licensed under the MIT license.
 */

(function ($) {
  $.anchorMenu = function (options) {
    options = $.extend({}, $.anchorMenu.options, options);
    
    var htmlMenu = document.createElement('ul');

    htmlMenu.setAttribute('class', options.menuClass);
    
    $('#' + options.parentId + ' .' + options.childrenClass).each(function(){
      var dataMenu = $(this).attr('id');
      var dataFull = $(this).attr('data-anchor-text');
      var htmlMenuItem = document.createElement('li');
      var htmlMenuLink = document.createElement('a');

      htmlMenuItem.setAttribute('class', options.menuItemClass);
      htmlMenuLink.setAttribute('href', '#' + dataMenu);
      htmlMenuLink.innerText = dataFull;
      htmlMenuItem.appendChild(htmlMenuLink);
      htmlMenu.appendChild(htmlMenuItem);
    });

    return $('h1:first-child').after(htmlMenu);
  };

  // Default options.
  $.anchorMenu.options = {
    parentId: 'anchorLinks',
    childrenClass: 'anchorItems',
    menuClass: 'anchor-menu',
    menuItemClass: 'anchor-menu__item'
  };

}(jQuery));
