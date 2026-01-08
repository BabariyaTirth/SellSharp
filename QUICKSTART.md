# Quick Start Guide

## If nothing is visible, follow these steps:

1. **Navigate to the Sellsharp folder:**
   ```bash
   cd Sellsharp
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The terminal will show a URL like `http://localhost:5173`
   - Open that URL in your browser
   - You should see the SellSharp landing page

## Troubleshooting

- **Blank page?** Check the browser console (F12) for errors
- **Styles not loading?** Make sure Tailwind CSS is properly configured
- **Port already in use?** Vite will automatically use the next available port

## Common Issues

1. **"Cannot find module" errors**: Run `npm install` again
2. **White/blank page**: Check browser console for React errors
3. **Styles missing**: Verify `tailwind.config.js` and `postcss.config.js` exist
