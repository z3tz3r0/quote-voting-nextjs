# Quote Voting Application

A dynamic and interactive web application built with Next.js, designed to allow users to effortlessly share, discover, and engage with their favorite quotes through a voting system. This platform offers a seamless experience for both new users and contributors.

## Features

- **User Authentication**: Secure sign-in options available with test credentials (email: `test@example.com`, password: `password`) or use the Google account.
- **Quote Submission**: Easily add new quotes to the platform through a dedicated interface once logged in.
- **Voting System**: Express your opinion on quotes by upvoting or downvoting them. The system supports negative vote counts, which are visually indicated with red text. (Login is not required for voting).
- **Quote Listing**: Browse and view a comprehensive list of all submitted quotes.
- **Category Filtering**: Effortlessly filter quotes by various categories to find content that interests you.
- **Search Functionality**: Efficiently search for quotes by author or quote message using a debounced search bar for a smooth user experience.
- **Infinite Scroll**: Enjoy a continuous browsing experience with infinite scroll implemented for quote listings.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (A React framework for production)
- **Frontend Library**: [React](https://react.dev/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Persistence**: Browser `localStorage`

## Getting Started

Follow these steps to set up and run the Quote Voting Application locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- A package manager: [npm](https://www.npmjs.com/) (comes with Node.js), [Yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/quote_voting.git
    cd quote_voting
    ```
2.  **Install dependencies**:
    Choose your preferred package manager and run the corresponding command:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

To start the development server and view the application:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000). The application will automatically reload as you make edits to the source files.

## How to Use the Application

1.  **Login/Sign Up**: Access the login page (e.g., `/auth/signIn`) to authenticate. You can use the provided testing credentials (email: `test@example.com` | password: `password`) or log in with your Google account.
2.  **Add Quotes**: After successfully logging in, you can submit new quotes using the designated "Add Quote" interface.
3.  **Vote on Quotes**: Browse through the list of quotes and use the upvote/downvote buttons to express your opinion. Please note that **login is not required** to cast votes.
4.  **Filter by Category**: Select a category from the filter options to view quotes relevant to your interests.
5.  **Search Authors/Quotes**: Utilize the search bar to find specific authors or quotes by typing in your query.
