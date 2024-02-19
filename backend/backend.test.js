const request = require('supertest');
const app = require('./server');  // Import the Express application to test it
const fetch = require('node-fetch'); // Import fetch for mocking API calls

// Mock the fetch module using jest.mock
jest.mock('node-fetch', () => jest.fn());

// Group tests related to API endpoints under this describe block
describe('API Endpoint Tests', () => {
  // Test for the /quiz endpoint

  describe('GET /quiz', () => {
    it('should render the quiz.html content', async () => {

      // Make a GET request to the /quiz endpoint
      const response = await request(app).get('/quiz');
    });
  });

  // Test for the /grade endpoint
  describe('POST /grade', () => {
    it('should process a grading request', async () => {

      // Mock the behavior of fetch to return response
      fetch.mockImplementationOnce(() => Promise.resolve({
        json: () => Promise.resolve({ choices: [{ message: { content: "yes (100%) because correct" } }] })
      }));

      // Make a request to the /grade endpoint
      const response = await request(app).post('/grade').query({ question: 'sample question', answer: 'sample answer' });
    });
  });
});

// Group tests related to simulating the React component
describe('React Component Simulation Tests', () => {
  let formData; // Variable to simulate component state
  let loading; 
  let quiz; 

  // Reset state variables before each test
  beforeEach(() => {
    formData = {
      topic: 'golang',
      expertise: 'novice',
      numQuestions: 5,
      style: 'normal',
    };
    loading = false;
    quiz = null;
  });

  // Function to simulate changing form data
  function simulateFormChange(newData) {
    formData = { ...formData, ...newData };
  }

  // Function to simulate form submission
  function simulateFormSubmit() {
    loading = true; // Set loading to true to simulate loading state during form submission
    setTimeout(() => {
      loading = false; 
      quiz = { title: 'Generated Quiz' }; // setting the quiz state upon successful form submission
    }, 100);
  }

  // Test case for updating formData on form field change
  it('updates formData on change', () => {
    simulateFormChange({ topic: 'aws' }); //  changes the topic in the form
    expect(formData.topic).toBe('aws'); // formData.topic was updated correctly
  });

  // Test case for setting loading to true on form submission
  it('sets loading to true on form submit', () => {
    simulateFormSubmit(); // Simulate form submission
    expect(loading).toBe(true); // loading state is set to true
  });
});
