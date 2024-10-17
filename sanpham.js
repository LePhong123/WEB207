window.SanphamController = function($scope,$http){
    $scope.LisSanPham =[];
    $http.get("http://localhost:3000/sanpham").then(
        function(response){
            $scope.LisSanPham= response.data;
        },
        function(rerros){
            console.log(rerros);
        }
    );
    $scope.add = function () {
        return $http.post("http://localhost:3000/sanpham", {
              id:$scope.id,
              tensanpham:$scope.tensanpham,
              anh:$scope.anh,
             
          })
          .then(
            function (response) {
              console.log(response);
              if (response.status === 201) {
                alert("Thêm thành công");
              }
            },
            function (errors) {
              console.log(errors);
            }
          );
      };
};