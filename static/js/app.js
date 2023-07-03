"use strict";
$(function () {
    var viewportWidthIsValid = function () { return window.innerWidth >= 380 && window.innerWidth <= 450; };
    var resultResolutionCheck = $('#result-resolution-check');
    var updateResolutionCheck = function () {
        var isValid = viewportWidthIsValid();
        var text = isValid ? 'Resolução válida' : 'Resolução inválida';
        resultResolutionCheck.text("".concat(text, ": ").concat(window.innerWidth, "px"))
            .removeClass(isValid ? 'text-danger' : 'text-success')
            .addClass(isValid ? 'text-success' : 'text-danger');
    };
    window.addEventListener('load', updateResolutionCheck);
    window.addEventListener('resize', updateResolutionCheck);
});
