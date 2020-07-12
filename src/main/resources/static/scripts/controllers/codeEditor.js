/**
 *
 * codeEditorCtrl
 *
 */

angular
    .module('eduarena')
    .controller('codeEditorCtrl', codeEditorCtrl)

function codeEditorCtrl($scope) {

    $scope.editorOptions = {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    };

}