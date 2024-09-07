// cypress/integration/file-upload-download.spec.js
import 'cypress-file-upload/commands';
describe('File Upload and Download Test', () => {
    const filePath = 'cypress/fixture/example.txt'; 
    const fileContent = 'Hello, I am Sayani.'; // Update with your file content
    const downloadedFilePath = 'cypress/downloads'; 
  
    beforeEach(() => {
      // Visit the application page
      cy.visit(Cypress.env('BASE_URL')); 
    });
  
    it('Uploads a file and validates it is successfully processed', () => {
      // Upload the file
      cy.get('[data-test="file-input"]').attachFile(filePath);
  
      // Submit the form
      cy.get('[data-test="submit-button"]').click();
  
      // Verify the file is uploaded and processed
      cy.get('[data-test="success-message"]').should('contain', 'File uploaded successfully');
    });
  
    it('Downloads a file from the application and ensures it is saved correctly', () => {
      // Download the file
      cy.get('[data-test="download-button"]').click();
  
      // Wait for the file to be downloaded
      cy.wait(5000); // Adjust the wait time as needed
  
      // Verify the file is downloaded and saved correctly
      cy.readFile(downloadedFilePath).should('contain', fileContent);
    });
  
    it('Verifies the integrity of the uploaded/downloaded files by checking their contents', () => {
      // Read the contents of the uploaded file
      cy.readFile(filePath).then((uploadedFileContent) => {
        // Read the contents of the downloaded file
        cy.readFile(downloadedFilePath).then((downloadedFileContent) => {
          // Verify the contents of both files match
          expect(uploadedFileContent).to.equal(downloadedFileContent);
        });
      });
    });
  });
  
  