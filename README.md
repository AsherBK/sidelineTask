# Lighthouse and API Testing

In this task, I separated the JavaScript missions into two functions and made them more generic by passing the 'url' as an argument. This allows the Lighthouse script to generate and track different websites and monitor them.

For the API part, I used `pytest` as a test library and structured the mission in a modular way.

## Running

### Running the JavaScript Script

1. Install all dependencies:
   ```sh
   npm install lighthouse playwright fs chrome-launcher
   ```
2. Run the script:
   ```sh
   node lighthouse-and-resources-check.js
   ```

### Running the Python Tests

1. Install all dependencies:
   ```sh
   pip install pytest requests
   ```
2. Run the tests:
   ```sh
   pytest test_get_post_task.py
   ```

Notes:\
In the API part all the tests passed so there is no output to share
