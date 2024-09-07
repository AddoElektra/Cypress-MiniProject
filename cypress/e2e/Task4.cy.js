describe('test',()=>{
    it('upload', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('#file-upload')
        .selectFile('C:\\Users\\DELL\\Downloads\\MileStone3\\cypress\\fixtures\\upload.txt');
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })
    it('download',()=>{
        cy.visit('https://the-internet.herokuapp.com/download');
        cy.get('div.example>a[href="download/upload.txt"]').click()
        cy.readFile('C:\\Users\\DELL\\Downloads\\MileStone3\\cypress\\downloads\\upload.txt')
        .should('contain','Hi Im Sayani')
        cy.exec('C:\\Users\\DELL\\Downloads\\MileStone3\\cypress\\downloads\\upload.txt')
        .should('exist',0)
    })
})
