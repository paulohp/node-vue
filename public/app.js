var apiUrl = 'http://localhost:3000/';

var vm = new Vue({

    el: '#demo',

    data: {
        animal: 'dogs'
    },

    created: function () {
        this.$watch('animal', function () {
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
                console.log(xhr.responseText);
                //self.commits = JSON.parse(xhr.responseText);
            };
            xhr.send();
        }
    }
});
