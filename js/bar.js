var _bar = {
    init: function() {
        _bar.initResize();
    },
    initResize: function() {
        var SCROLL_INIT_HEIGHT = '200px';
        $("#resizer-bar-panel").parent().addClass('box-bottom-padding');
        // if (Cookies.get("data-box-height")) {
        //     SCROLL_INIT_HEIGHT = Cookies.get("scroll-bar-height");
        //     $("#resizer-bar-panel").prev().height(Cookies.get("data-box-height"));
        // }
        $("#resizer-bar-panel").bind('mousedown', (function() {
            var startHeight = $(this).prev().height();
            var startY = $(this).offset().top;
            _bar.startResize(startHeight, startY);
        }));
        _bar.initScroll(SCROLL_INIT_HEIGHT);
    },
    startResize: function(currentHeight, currentY) {
        $("*").bind('mousemove', (function(loc) {
            // On IE and Firefox, Y values will be float number while mouse moves. Make integer value to prevent tiny position gaps.
            var resizeHeight = Math.round(currentHeight + loc.pageY - currentY - 16);
            var MIN_HEIGHT = 110;
            $("#resizer-bar-panel").prev().height(resizeHeight);
            window.getSelection().removeAllRanges();
            if ($("#resizer-bar-panel").prev().height() < MIN_HEIGHT) {
                $("#resizer-bar-panel").prev().height(MIN_HEIGHT);
                $("#inner-content-div").height(MIN_HEIGHT);
                $("#inner-content-div").parent().height(MIN_HEIGHT);
            } else {
                _bar.initScroll(resizeHeight);
            }
        }));
        $("*").mouseup(function() {
            $("*").unbind('mousemove');
            // Cookies.set('data-box-height', $("#resizer-bar-panel").prev().height(), {
            //     expires: 7
            // });
            // Cookies.set('scroll-bar-height', $("#resizer-bar-panel").prev().height(), {
            //     expires: 7
            // });
        });
    },
    initScroll: function(resizeHeight) {
        $('#inner-content-div').slimScroll({
            height: resizeHeight
        });
    }
};
