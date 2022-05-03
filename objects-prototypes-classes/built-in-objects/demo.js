'use strict';


(function () {
    //demo-1
    function checkPasswordComplexity(password) {
        let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
        // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }

    display(checkPasswordComplexity('pass')); // -> false;
    display(checkPasswordComplexity('MyPassword1')); // -> true;

    //demo-2
    function findAlerts(logData) {
        let regex = /ERROR(.*?):(.*?);/g;

        let result = regex.exec(logData);
        while (result != null) {
            display(result[1]);
            display(result[2]);
            display('--------------------');
            result = regex.exec(logData);
        }
    }

    let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something flasky;'
    findAlerts(logData);


})();