# Just-Eat-Takeaway Assignment


## Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### Prerequisites

Before you begin, ensure that Node.js and npm are installed on your machine. You can download and install them from [https://nodejs.org/en/](https://nodejs.org/en/).
- Node.js (v12 or later)
- npm (normally comes with Node.js installation)

To verify successful installation, run the following commands in your terminal:

```bash
node -v
```

```bash
npm -v
````

### Installation

1. Clone the repository to your local machine:
```bash 
git clone https://github.com/ViravRakholiya/just-eat-takeaway-assignment.git
```

2. Navigate into the project directory.


3. Install project dependencies:
```bash
npm install
```

### Usage

#### Starting the Development Server
To launch the development server, use the following command:
```bash
npm run dev
```
Once the server is running, open the following link in your web browser: [http://localhost:5173](http://localhost:5173). If this link doesn't work, refer to the URL displayed in your terminal.

### Attention:

When running the web application for the first time, you may encounter a 403 error due to CORS policy restrictions. To resolve this issue, please visit [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/) in your browser and click the provided button to temporarily bypass the CORS policy.

### Assumptions
I encountered a CORS-related error while making a GET request to the API endpoint, resulting in the following message:

"Access to XMLHttpRequest at https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/M160RA' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

As I am unable to resolve this error directly, I used a temporary workaround by utilizing a third-party proxy server [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/). I hope this approach is acceptable.

### Improvements
There are several areas where the code could be improved:

- Enhance coding standards and practices.
- Implement options for displaying data in list view or grid view.
- Introduce test cases to ensure all components render correctly based on conditions.
