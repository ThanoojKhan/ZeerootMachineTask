# Zeeroot Project

Welcome to the Zeeroot project! This project is a simple web application that demonstrates fetching user data from an API, displaying it in a table format, implementing pagination, and handling API request errors gracefully. Additionally, it features a homepage with navigation and user interaction functionalities.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Description

This is a web application that showcases the implementation of various functionalities such as fetching data from an external API, displaying it in a visually appealing manner, handling errors gracefully, and providing user interaction options.

## Features

1. **Homepage:**
   - Designed a homepage with a navigation menu.
   - Navigation menu includes options for Home and Users pages.
   - Implemented an appealing UI with images, grid layout, and cards.

2. **Users Page:**
   - Displayed user data fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API in a table format.
   - Displayed columns: Name, Username, Email, Phone, and Website.
   - Allowed users to click on a user's row for additional details.

3. **Styling:**
   - Applied CSS for an appealing UI that is mobile-friendly.
   - Utilized Tailwind CSS and custom CSS styling to enhance the visual appearance of the application.

4. **Error Handling:**
   - Handled API request errors gracefully, ensuring a smooth user experience even in case of errors.

5. **User Interaction:**
   - Enabled users to click on a user's row to view additional details.

6. **Pagination:**
   - Implemented pagination to display 5 users per page, enhancing usability and navigation.

## Installation

To install and run the Zeeroot project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd zeeroot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to view the application.

## Usage

Once the application is running, you can navigate through the pages using the navigation menu. The homepage displays the main content, while the Users page lists user data in a table format. Clicking on a user's row will reveal additional details. Pagination controls allow you to navigate through multiple pages of user data.

## Technologies Used

- React.js
- React Router
- Axios
- React Intersection Observer
- Tailwind CSS
- CSS

## Contributing

Contributions to the Zeeroot project are welcome! If you have any suggestions, improvements, or feature requests, please feel free to open an issue or submit a pull request.
