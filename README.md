
# Fake Store E-Commerce

A modern e-commerce frontend built with Next.js, TypeScript, and Tailwind CSS.



## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fake-store.git
   cd fake-store
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 📁 Project Structure

```
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
```

## 🔍 Data Fetching Strategy

**Client-side Fetching with React Query**:
- Implemented in `ProductsContext` for state management
- Benefits:
  - Automatic caching and deduplication
  - Background refetching for fresh data
  - Optimistic updates
  - Built-in error handling

**Justification**:
- The Fake Store API responds quickly enough for client-side fetching
- Provides better UX with instant navigation
- Simplifies state management compared to Redux
- Includes built-in loading/error states

## 🎨 Styling & Fonts

**Tailwind CSS**:
- Utility-first CSS framework
- Benefits:
  - Rapid UI development
  - Responsive design out-of-the-box
  - No CSS naming conflicts
  - Small bundle size

**Font Optimization**:
- Uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- Features [Geist](https://vercel.com/font) font family
- Automatic font optimization and loading

## ✨ Features

### Core Features
- Product listing with pagination
- Product detail pages
- Search functionality
- Category filtering
- Price sorting (high/low)

### Bonus Features
1. **Responsive Design**:
   - Mobile-first approach
   - Adaptive product grid

2. **Performance Optimizations**:
   - Next.js Image component
   - Code splitting
   - Lazy loading

3. **Accessibility**:
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation

4. **Type Safety**:
   - Comprehensive TypeScript integration
   - Strict type checking

## 🚀 Deployment

Deployed on Vercel:  
[https://frontend-intern-assignment-henna.vercel.app/](https://frontend-intern-assignment-henna.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/fake-store)


```

Key improvements:
1. Better organization with clear section headings
2. Consistent formatting throughout
3. Added deployment badge/button
4. Improved feature categorization
5. More professional presentation of technical details
6. Added proper links to documentation
7. Included license section
