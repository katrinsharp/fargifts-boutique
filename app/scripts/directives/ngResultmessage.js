(function() {

    /* Start ngResultMessage */

    'use strict';

    angular.module('ngResultmessage', [])

    .directive('ngResultmessage', [

        function() {

            return {
                restrict: 'A',
                scope: {
                    result: '='
                },
                link: function(scope, element, attr) {
                    scope.kind = attr.ngResultmessage;
                    scope.$watch('result', function(result, currentResult, scope) {
                        if(scope.kind == result.kind) {
                            if(result.error != '') {
                                element.text(result.error);
                                element.addClass('error-msg');
                            } else if(result.success != ''){
                                element.text(result.success);
                                element.removeClass('error-msg');
                            }
                            if(result.error != '' || result.success != '') {
                                element.removeClass('not-visible');
                            }
                        }
                    });    
                }
            }

        }

    ]);

}).call(this);
