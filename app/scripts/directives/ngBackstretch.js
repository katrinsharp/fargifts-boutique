(function() {

    /* Start ngBackstretch */

    'use strict';

    angular.module('ngBackstretch', [])

    .directive('ngBackstretch', [

        function() {

            if (typeof $.fn.backstretch !== 'function')
                throw new Error('ngBackstretch | Please make sure the jquery backstretch plugin is included before this directive is added.')

            return {
                restrict: 'A',
                link: function(scope, element, attr) {

                    if (attr.ngBackstretch === '' || typeof attr.ngBackstretch === 'undefined')
                        throw new Error('ngBackstretch | You have not declared an image to be stretched.')

                    var backgrounds = attr.ngBackstretch.split(",");

                    if (element.context.toString().match(/HTMLBodyElement/gi))
                        return $.backstretch(backgrounds, {duration: 3000, fade: 750});

                    $(element).backstretch(backgrounds, {duration: 3000, fade: 750});

                }
            }

        }

    ]);

}).call(this);
