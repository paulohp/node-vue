var apiUrl = 'https://localhost:3000/api/';

var demo = new Vue({

    el: '#demo',

    data: {
        branch: 'master'
    },

    created: function () {
        this.$watch('branch', function () {
            this.fetchData();
        });
    },

    filters: {
        truncate: function (v) {
            var newline = v.indexOf('\n');
            return newline > -1 ? v.slice(0, newline) : v;
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ');
        }
    },

    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest(),
                self = this;
            xhr.open('GET', apiUrl + self.branch);
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText);
            };
            xhr.send();
        }
    }
});