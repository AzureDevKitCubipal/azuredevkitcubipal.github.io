$(document).ready(function () {

    var app = new Vue({

        el: '#app',

        data: {
            devices: [],
            count: null

        },

        created: function () {
            this.fetchData()
        },

        watch: {
            currentBranch: 'fetchData'
        },

        methods: {
            fetchData: function () {
                var scope = this;
                $.ajax({
                    url: "https://cubipalbackend.azurewebsites.net/",
                    success: function (data) {
                        scope.notifications = _.uniqBy(data.value, function (v) {
                            return v;
                        });
                        scope.count = scope.notifications.length;
                    },
                    error: function () {
                        scope.count = "N/A";
                    },
                    method: 'GET'
                });
            }
        }
    });
});