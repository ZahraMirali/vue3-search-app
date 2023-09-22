## Project Overview

This project is designed to showcase a frontend application that allows users to perform searches and filter data from different categories, such as people, companies, products, and locations. It provides a simple user interface for searching and viewing results within these categories.

## Project Scaffolding

This project was scaffolded using `create-vue` to set up a Vite-powered Vue project. Vue CLI is in Maintenance Mode. The following command was used to initiate the project:

```bash
npm create vue@latest
```

## Dependencies

Before you begin, make sure you have the following dependencies installed:

- **Node.js**: Ensure you have Node.js installed. You can check your Node.js version using `node -v`. The project requires Node.js version 18.16.1 or higher.

- **NPM**: This project uses NPM as the package manager. You can check your NPM version using `npm -v`. The project requires NPM version 10.1.0 or higher.

## Getting Started

Follow these steps to set up and run the project locally:

Navigate to the project directory:

```bash
cd vue3-search-app
```

Install project dependencies using npm:

```bash
npm install
```

## Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will build and launch the development server. You can access the application in your browser at http://localhost:5173.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will generate a production-ready build in the dist directory.

## Running Tests

Jest is used for testing purposes. Run the tests with:

```bash
npm run test
```

## Sample JSON Data

This project includes sample JSON data for different categories, which can be used for testing and development purposes.

### Categories Data

- File: `categories.json`
- Description: Defines the four categories used for organizing content in the project: People, Companies, Products, and Locations. Each category includes a label, value, and description.

### People Data

- File: `people.json`
- Description: Contains information about individuals, including their first name, last name, bio, gender, job title, and a unique slug identifier.
- Total Records: 100

### Companies Data

- File: `companies.json`
- Description: Provides details about companies, including their name, catchphrase, buzz phrase, and a unique slug identifier.
- Total Records: 100

### Products Data

- File: `products.json`
- Description: Includes data related to products, such as name, description, material, price, and a unique slug identifier.
- Total Records: 100

### Locations Data

- File: `locations.json`
- Description: Contains location information, including county, city, street, zip code, building number, and a unique slug identifier.
- Total Records: 100

### Mocked API

The project includes a mocked API for testing and development purposes. This API mimics the behavior of a real backend by simulating data retrieval and search operations. It provides sample data for the mentioned categories and demonstrates how data can be filtered based on user queries.

### Key Features

- **Category-Based Filtering:** Users can select a specific category (e.g., people, companies) and perform searches within that category.

- **Search Functionality:** The application allows users to enter search keywords, which are used to filter and retrieve relevant results.

- **Dynamic Rendering:** The project utilizes Vue.js to dynamically render search results using appropriate card components based on the selected category.

- **Loading and Error Handling:** Loading spinners and error alerts are displayed to enhance the user experience during search operations.

### Routing

The project also employs Vue Router for route-based navigation. Users can navigate through different categories and search results by changing the URL parameters.

## Home Page Usage

On the home page, you'll see a list of all categories, each accompanied by an icon and a brief description. If you click on any of these category cards, you'll be directed to the respective search category's results page. This intuitive navigation system simplifies the process of exploring and searching within different categories.

# Testing Search App

To test the functionality of Search App, follow these steps:

1. **Change Selected Category in Header**:

   - In the application header, use the category selection dropdown to change the selected category (e.g., from "People" to "Companies").
   - Observe that the displayed content and URL reflect the selected category.

2. **Perform a Keyword Search**:

   - In the header, use the search input field to enter keywords related to the selected category (e.g., enter a company name for the "Companies" category).
   - Press the "Enter" key or click on the search icon.
   - Observe that the displayed content updates to show search results based on your keywords, and the URL includes the search query.

3. **Change Category in URL**:

   - While on the search results page, look at the URL in your browser's address bar.
   - Manually change the category in the URL by modifying the category path segment (e.g., from `/companies` to `/products`).
   - Press "Enter" or navigate to the modified URL.
   - Observe that the content updates to show results for the newly selected category, and the category in the header dropdown changes accordingly.

4. **Change Keywords in URL**:

   - While on the search results page, again look at the URL in your browser's address bar.
   - Manually change the keywords in the URL by modifying the query parameter (e.g., from `/?keywords=apple` to `/?keywords=tech`).
   - Press "Enter" or navigate to the modified URL.
   - Observe that the content updates to show results based on the modified keywords, and the search input field in the header updates to reflect the new keywords.

5. **Test Error Handling**:
   - Change the category in the URL to a category that doesn't exist (e.g., from `/people` to `/invalidcategory`).
   - Press "Enter" or navigate to the modified URL.
   - Observe that an error message is displayed, such as "Category {{ selectedCategory }} not found," indicating that the selected category is not valid.

By following these steps, you can thoroughly test the functionality of Search App, including category selection, keyword searching, URL updates, and error handling. This testing process ensures that the app behaves as expected in various scenarios.

### Viewing Results for the "All" Category

When you select the "All" category from the category dropdown in the header, you will see results from all available categories. Here's how it works:

- For each category (people, companies, products, locations), the app displays a maximum of 3 items in each card.
- If the total number of items in any of these categories exceeds 3, you will see a "See all {{ type }} results" link at the bottom of that category's results.
- Clicking on the "See all {{ type }} results" link will take you to a dedicated page showing all results for that category.

This feature allows you to quickly browse a preview of items from all categories and easily access the full list of results for any specific category if needed.
