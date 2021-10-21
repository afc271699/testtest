//const { title } = require("process");
//const { element } = require("protractor")

describe('View All Orders Page',() =>{
    it('should be able to view the View All Orders page hi amala',() =>{
        element(by.xpath('/html/body/form/table/tbody/tr/td[1]/ul/li[1]/a')).click();
        expect(title).toBe('List of All Orders');
        
}
);
}
);
