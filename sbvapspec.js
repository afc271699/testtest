//const { title } = require("process");
//const { element } = require("protractor")

describe('View All Products Page',() =>{
    it('should be able to view the View All Products page',() =>{
        element(by.xpath('/html/body/form/table/tbody/tr/td[1]/ul/li[3]/a')).click();
        expect(title).toBe('List of Products');
        
}
);
}
);
