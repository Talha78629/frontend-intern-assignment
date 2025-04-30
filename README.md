This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started


## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fake-store.git
   cd fake-store
Install dependencies:

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 Testing
Running Tests
```bash
npm test
# or
yarn test

Test Coverage

```bash
npm run test:coverage
# or
yarn test:coverage


fake-store/
├── components/          # Reusable UI components
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   └── ...
├── context/             # React context providers
│   └── ProductsContext.tsx
├── lib/                 # Utility functions
│   └── api.ts           # API client
├── pages/               # Next.js pages
│   ├── products/        # Product detail pages
│   └── ...
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── public/              # Static assets

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More
 Data Fetching Strategy
Client-side Fetching with React Query:

Implemented in ProductsContext for state management

Benefits:

Automatic caching and deduplication

Background refetching for fresh data

Optimistic updates

Error handling built-in

Justification:

The Fake Store API is fast enough for client-side fetching

Provides better UX with instant navigation

Simplifies state management compared to Redux

Built-in loading/error states

🎨 Styling Method
Tailwind CSS:

Utility-first CSS framework

Benefits:

Rapid UI development

Responsive design out-of-the-box

No CSS naming conflicts

Small bundle size

✨ Bonus Features
Responsive Design:

Fully mobile-friendly layout

Adaptive product grid

Advanced Product Filtering:

Search by product name

Category filtering

Price sorting (high/low)

Performance Optimizations:

Image optimization with Next.js Image

Code splitting

Lazy loading

Accessibility:

Semantic HTML

ARIA labels

Keyboard navigation support

Type Safety:

Comprehensive TypeScript integration

Strict type checking

## Deploy on Vercel
Deployed On Vercel Link- https://frontend-intern-assignment-henna.vercel.app/
