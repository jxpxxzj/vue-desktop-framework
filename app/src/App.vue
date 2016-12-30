<style>
/* Global Style Sheet */
* {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
<script>
// Import jQuery globally
import $ from 'jquery';
window.$ = window.jQuery = $;

// Show progress when using ajax
// Ref: https://www.w3ctrain.com/2015/07/18/jQuery-ajax-progress/
(function addXhrProgressEvent ($) {
    const originalXhr = $.ajaxSettings.xhr;
    $.ajaxSetup({
        xhr () {
            const req = originalXhr();
            const that = this;
            if (req) {
                if (typeof req.addEventListener === 'function') {
                    req.addEventListener('progress', (evt) => {
                        that.progress(evt);
                    }, false);
                }
            }
            return req;
        }
    });
})(window.jQuery);

// Prevent zooming by scroll
// Ref: https://github.com/electron/electron/issues/2500
window.addEventListener('mousewheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
});
</script>