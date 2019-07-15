var Address = function() {
    this.zip = 0;
    this.country = "";
};

Address.prototype = new Address();

var People = function() {
    this.firstName = "";
    this.lastName = "";
    this.address = new Address();
};

People.prototype = new People();

module.exports = {
    People: People
}