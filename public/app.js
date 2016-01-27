var app = angular.module('Upload', []);

app.directive('upload', function(){
    return{
        templateUrl: 'public/upload.html',
        controller: ['$scope', function($scope){

            $scope.currentFile = "ergdf";

        }],
        link: function(scope, elem, attr){

            var xhr = new XMLHttpRequest(),
            fd = new FormData();


            elem.bind('change', function(e){
                var files = elem.find("input")[0].files;

                scope.currentFile = files[0].name;

                fd.append('upload', files[0]);

                xhr.upload.addEventListener('progress', function(e){
                    var progress = e.loaded,
                        totalAmount = e.total;

                    scope.progress = Math.floor(progress/totalAmount*1000)/10;
                    scope.$apply();
                });

                xhr.open('post', '/upload', true);

                xhr.send(fd);

                xhr.onreadystatechange = function(e)
                {
                    if(xhr.status === 200)
                        scope.done = true;
                };

                scope.$apply();

            });

        }
    };

});
