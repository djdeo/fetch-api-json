var vm = new Vue({
    el: "#cus",
    data: {
        customers: []
    },
    created: function() {
        this.mapData()
    },
    methods: {
        mapData: function() {
            var xhr = new XMLHttpRequest(), 
                self = this
            xhr.open('GET', '/vanillajs-xhr/customers.json',true)
            xhr.onload = function() {
                self.customers = JSON.parse(xhr.responseText)
            }
            xhr.send()
        }
    }
})