var employee = {
    id : 1,
    greet : function(){
        setTimeout(function(){
            console.log(this.id);
        }, 1000);
    }
    // NOTE: function() create its own context so it has its own this
}

employee.greet()


var employee = {
    id : 1,
    greet : function(){
        let self = this
        setTimeout(function(){
            console.log(self.id);
        }, 1000);
    }
    // NOTE : we can pass context by assigning a variable
}

employee.greet()

var employee = {
    id : 1,
    greet : function() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
    // NOTE : arrow function doesn't create its own context.
}

employee.greet()
