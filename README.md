# Simple Auth Demo with React

This project is a simple demonstration of implementing an authentication context provider and protected routes in a React application. It uses `react-router-dom` for routing and `Vite` as the build tool for a fast and efficient development experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the latest version of [Node.js](https://nodejs.org/) installed. This project was built using Node.js version 14.x or later.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://yourprojectrepository.com
```

2. Navigate into the project directory:

```bash
cd your-project-name
```

3. Install the necessary dependencies:

```bash
npm install
```

4. To start the development server, run:

```bash
npm run dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the app.

## Features

- **Auth Context Provider:** Centralizes the authentication logic and state, making it accessible throughout the application.
- **Protected Routes:** Ensures that certain routes are only accessible to authenticated users, redirecting unauthenticated users to a login page.

## Usage

After launching the app, you will be presented with a login screen. Upon successful authentication, you will be redirected to the protected route.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This command will generate a `dist` folder containing the compiled code ready for deployment.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
