window.XemayController = function ($scope, $http) {
    $scope.Lstxemay = [];
  
    $http.get(" http://localhost:3000/xemays").then(
      function (response) {
        // if (response.statusText === "OK") {
          $scope.Lstxemay = response.data;
        //}
      },
      function (errors) {
        console.log(errors);
      }
    );
    $scope.onSubmit = function () {
      $http
        .post("http://localhost:3000/xemays", {
          id: $scope.id,
          name: $scope.name,
          price: $scope.price,
          color: $scope.color,
          type: $scope.type,
        })
        .then(function (response) {
          if (response.status === 201) {
            alert("Them thanh cong");
          }
        });
    };
    $scope.delete = function (id) {
      $http.delete("http://localhost:3000/xemays/" + id).then(function (response) {
        if (response.status === 200) {
          alert("Xoa thanh cong");
        }
      });
    };
    $scope.SP = function (id) {
      $http.get("http://localhost:3000/xemays/" + id).then(function (response) {
        if (response.status === 200) {
          $scope.id = response.data.id;
          $scope.name = response.data.name;
          $scope.price = response.data.price;
          $scope.color = response.data.color;
          $scope.type = response.data.type;
        }
      });
    };
    $scope.Update = function () {
      $http.get(" http://localhost:3000/xemays/" + $scope.id).then(
        function (response) {
          if (response.status === 200) {
            $http
              .put(" http://localhost:3000/xemays/" + $scope.id, {
                name: $scope.name,
                price: $scope.price,
                color: $scope.color,
                type: $scope.type,
              })
              .then(function (response) {
                if (response.status === 200) {
                  alert("Sua thanh cong");
                }
              });
          }
        },
        function (error) {
          alert("khong tim thay");
        }
      );
    };

}