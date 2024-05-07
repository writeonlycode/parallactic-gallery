![](https://github.com/writeonlycode/parallactic-gallery/blob/main/screenshots/parallactic-gallery-thumbnail.png?raw=true)

Elit facilis debitis reiciendis consequuntur et. Repellat ullam quae molestias
minima accusantium cupiditate Voluptates error voluptates officiis nihil
eligendi ipsum, expedita. Odit sunt nulla itaque exercitationem quia voluptatum
doloribus nemo

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.JS
- NPM
- Supabase CLI

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/writeonlycode/parallactic-gallery .git
```

2. Navigate into the project directory:

```
cd parallactic-gallery
```

3. Install dependencies:

```
npm install
```

4. Start Supabase services:

```
supabase start
```

5. Create a `.env.local` at the root of the project and configure the
   environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=<API URL>
NEXT_PUBLIC_SUPABASE_KEY=<anon key>
```

6. Finally, to run the development server and view the project locally, use the
   following command:

```
npm run dev
```

This will start a development server at `http://localhost:3000`. Open this URL
in your web browser to view the website.

### Deployment

To deploy Parallactic Gallery, you can use any hosting provider that supports
Next.JS, and you also need a Supabase project. To link Parallactic Gallery to
your remote Supabase project, you just have to configure the environment
variables with the values of your remote Supabase instance.


## Built With

- [Next.JS](https://nextjs.org/) - The React framework used for building the website.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs quickly.
- [Framer Motion](https://www.framer.com/motion/) - A library for creating animations in React applications.
- [Supabase]() - Supabase is an open source Firebase alternative that provides
a Postgres database, Authentication, instant APIs, Edge Functions, Realtime
subscriptions, Storage, and Vector embeddings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

