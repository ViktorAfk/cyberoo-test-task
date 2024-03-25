# cyberoo-test-task

To run the project 
 - First, you need to clone the repository from GitHub. You can find the clone URL on the repository page on GitHub;
 - You need to install dependencies run 'npm instal';
 - Once the dependencies are installed, you can start the Vite development server:
  'npm run dev'
- open this link (http://localhost:5173/cyberoo-test-task)


Includes:

 HOMEPAGE,

 List View (1st page):
 • Display a list of all cars.
 • Include key information like carId, manufacturer, model, and year.
 • Provide a button to navigate to the detailed view for each car.

 Detail View (2nd page):
 • Show all details of a selected car, including nested information (e.g., engine, owner, maintenance records).
 • Include an "Edit" button to open the edit form.
 • Allow users to navigate back to the list view.

 Edit Form:
 • Create a React component for editing existing car records.
 • Include controlled components for all relevant fields, considering nested structures.
 • Implement validation to ensure data integrity.
 • Provide a "Save" button to update the record.
 • Allow users to cancel and return to the detail view.

 Add Form:
 • Create a React component for adding new car records.
 • Include controlled components for all relevant fields, considering nested structures.
 • Implement validation to ensure data integrity.
 • Provide a "Save" button to add the new record.
 • Allow users to cancel and return to the list view.

 Delete Functionality:
 • Allow users to delete a car record from the detail view.
 • Implement a confirmation prompt before deletion.

Technical Considerations:
 • React for building the components and managing state.
 • React Router for navigation between list view, detail view.
 • Redux toolkit as a state manager.
 • React-hook-form for forms.
 • SCSS modules for styling, application is responsive.
 • Axios requests for fetching backend data.
 • For backend purposes I used firebase

- [DEMO LINK]( https://viktorafk.github.io/cyberoo-test-task/) 
