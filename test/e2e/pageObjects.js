var pageObject = function() {
    this.testElement = element(By.css('.test'));   
};

module.exports = new pageObject();