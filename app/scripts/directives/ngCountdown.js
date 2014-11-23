(function() {

    /* Start ngBackstretch */

    'use strict';

    angular.module('ngCountdown', [])

    .directive('ngBackstretch', [

        function() {

            if (typeof $.fn.countdown !== 'function')
                throw new Error('ngCountdown | Please make sure the jquery countdown plugin is included before this directive is added.')

            return {
                restrict: 'A',
                link: function(scope, element, attr) {

                    //if (attr.ngCountdown === '' || typeof attr.ngCountdown === 'undefined')
                    //    throw new Error('ngCountdown | You have not declared count to.')

                    /*
                    Countdown initializer
                    */
                    var now = new Date();
                    var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
                    $(element).countdown(countTo, function(event) {
                        var $this = $(this);
                        switch(event.type) {
                            case "seconds":
                            case "minutes":
                            case "hours":
                            case "days":
                            case "weeks":
                            case "daysLeft":
                            $this.find('span.'+event.type).html(event.value);
                            break;
                            case "finished":
                            $this.hide();
                            break;
                        }
                    });

    }
}

}

]);

}).call(this);
