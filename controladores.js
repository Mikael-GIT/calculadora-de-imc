app.controller('controladorImc', function($scope) {

    $scope.calcularImc = function() {
        $scope.flagImc = false;
        $scope.imc = ($scope.peso / ($scope.altura * $scope.altura)).toFixed(2);
        $scope.classificarImc();
    };

    $scope.classificarImc = function() {
        console.log("Chegou aqui");
        console.log($scope.flagNome);
        $scope.classificacao = "";
        if($scope.imc <= 18.5){
            $scope.classificacao = "abaixo do peso";
        } else if($scope.imc >= 18.6 && $scope.imc < 25){
            $scope.classificacao = "no peso Ideal";
        } else if($scope.imc >= 25 && $scope.imc < 30){
            $scope.classificacao = "levemente acima do peso";
        } else if($scope.imc >= 30 && $scope.imc < 35){
            $scope.classificacao = "com obesidade grau I";
        } else if ($scope.imc >= 35 && $scope.imc < 40) {
            $scope.classificacao = "com obesidade grau II";
        } else if ($scope.imc >= 40) {
            $scope.classificacao = "com obesidade grau III";
        } else {
            $scope.classificacao = "Não foi possível calcular sua classificação.";
        }
        $scope.flagImc = true;
    };


});