// submitForm.js
exports.handler = async function (event, context) {
    try {
      // Process the initial form data or perform any additional actions here
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully!' }),
      };
    } catch (error) {
      console.error('Error processing form submission:', error);
  
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error!' }),
      };
    }
  };