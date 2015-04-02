angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // for moods
    $scope.moods = [{
        text: "Happy",
        icon: "ion-happy"
    }, {
        text: "Sad"
    }, {
        text: "Excited"
    }, {
        text: "Nervous"
    }, {
        text: "Confident"
    }, {
        text: "Restless"
    }, {
        text: "Irritable"
    }, {
        text: "Lightheaded"
    }, {
        text: "Content"
    }, {
        text: "Easygoing"
    }, {
        text: "Neutral"
    }];

    $scope.contact1 = [{
            label: "First Name"
        }, {
            label: "Last Name"
        }, {
            label: "Phone number"
        }, {
            label: "Email"
        }, {
            info: "Nancy"
        }, {
            info: "Minyanou"
        }, {
            info: "1800-666-8888"
        }, {
            info: "nancy@gmail.com"
        }
    ];
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

