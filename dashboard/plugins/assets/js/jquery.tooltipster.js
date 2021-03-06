/**
* Theme: Hyrax UX Admin Template
* Author: SRGIT
* Tooltips
*/

(function ($) {
    "use strict";
    $('#tooltip-hover').tooltipster();
    $('#tooltip-events').tooltipster({
        trigger: 'click'
    });
    $('#tooltip-html').tooltipster({
        content: $('<img src="http://via.placeholder.com/128x128" width="50" height="50" /><p style="text-align:left;"><strong>Neque porro quisquam est.</strong>qui dolorem ipsum quia dolor sit amet, consectetur.</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 300,
        maxWidth: 300,
        position: 'right'
    });

    $('#tooltip-touch').tooltipster({
        touchDevices: false
    });

    $('#tooltip-animation').tooltipster({
        animation: 'grow'
    });

    $('#tooltip-interaction').tooltipster({
        contentAsHTML: true,
        interactive: true
    });

    // Multiple tooltips
    $('#tooltip-multiple').tooltipster({
        animation: 'swing',
        content: 'North',
        multiple: true,
        position: 'top'
      });

      $('#tooltip-multiple').tooltipster({
        content: 'East',
        multiple: true,
        position: 'right'
      });

      $('#tooltip-multiple').tooltipster({
        animation: 'grow',
        content: 'South',
        delay: 200,
        multiple: true,
        position: 'bottom'
      });

      $('#tooltip-multiple').tooltipster({
        animation: 'fall',
        content: 'West',
        multiple: true,
        position: 'left'
      });

})(jQuery);