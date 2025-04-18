# Complete Instructions for React & Tailwind Restaurant Menu Project

## Setup Steps
1. Clone repo: `git clone https://github.com/Zevius27/B-RestaurantManagementSystem.git`
2. Navigate to project: `cd B-RestaurantManagementSystem`
3. Install dependencies: `npm i`
4. Start development server: `npm run dev`

## Development Steps
1. Explore project structure (components, pages, state management)
2. Locate menu section files
3. Design menu components (items, categories, filters)
4. Implement static UI first using Tailwind classes
5. Add state management for menu data
6. Test functionality
7. Commit changes with descriptive messages

## Tailwind CSS Guide
1. Utility-first approach - compose designs with pre-built classes
2. Common classes:
   - Layout: `flex`, `grid`, `container`
   - Spacing: `p-4`, `m-2`, `gap-3`
   - Colors: `bg-blue-500`, `text-gray-800`
   - Typography: `text-xl`, `font-bold`
   - Responsive: `md:flex`, `lg:grid-cols-3`
   - Hover states: `hover:bg-blue-600`
3. Mobile-first responsive design (default is mobile, add breakpoints for larger screens)
4. Use VS Code extension "Tailwind CSS IntelliSense"

## Common Errors to Avoid
1. JSX syntax errors (use `className` not `class`)
2. Direct state mutations instead of setter functions
3. Missing dependencies in useEffect
4. Incorrect Tailwind class combinations
5. Responsive design issues (forgetting mobile-first approach)
6. Import/export path mistakes

## Cursor AI Setup
- Windows/Mac: Download from https://cursor.sh
- Use Cmd+K (Mac) or Ctrl+K (Windows) for AI features

## Menu Section Prompt for AI Help
```
Help me create a responsive restaurant menu section with:
1. Menu item cards with images, descriptions, prices
2. Category filtering
3. Search functionality
4. "Add to cart" button for each item

Show component structure and code examples using Tailwind CSS.
```