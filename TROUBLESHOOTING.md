# Troubleshooting Blank Page Issue

## Quick Fixes to Try:

### 1. **Clear Browser Cache & Hard Refresh**
   - Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

### 2. **Restart Dev Server**
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   cd Sellsharp
   npm run dev
   ```

### 3. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Go to "Console" tab
   - Look for any red error messages
   - Share the error message if you see one

### 4. **Verify Dev Server is Running**
   - Check terminal for a message like: `Local: http://localhost:5173`
   - Make sure you're accessing the correct URL shown in terminal
   - The port might be different (5174, 5175, etc.)

### 5. **Check if React is Mounting**
   - Open browser DevTools (F12)
   - Go to "Elements" tab
   - Look for `<div id="root">` - it should have content inside
   - If it's empty, React isn't mounting

### 6. **Reinstall Dependencies**
   ```bash
   cd Sellsharp
   rm -rf node_modules
   npm install
   npm run dev
   ```

### 7. **Check Network Tab**
   - Open DevTools (F12) → "Network" tab
   - Refresh the page
   - Look for any failed requests (red entries)
   - Check if `main.tsx` and CSS files are loading

## Common Issues:

### Issue: "Cannot find module" errors
**Solution:** Run `npm install` again

### Issue: Port already in use
**Solution:** Vite will automatically use the next port, or kill the process:
```bash
# Windows PowerShell
Get-Process -Name node | Stop-Process
```

### Issue: White/blank page but no errors
**Solution:** 
1. Check if Tailwind CSS is loading (inspect element, check computed styles)
2. Try adding inline styles to verify React is working:
   - Temporarily modify `App.tsx` to add `style={{ backgroundColor: 'red' }}` to the main div
   - If you see red, React is working but CSS might not be loading

### Issue: Page loads but shows nothing
**Solution:** Check browser zoom level, try different browser, or check if ad blockers are interfering

## Still Not Working?

1. **Check the exact error in console** (F12 → Console tab)
2. **Verify you're in the Sellsharp folder** when running commands
3. **Make sure Node.js and npm are installed correctly:**
   ```bash
   node --version
   npm --version
   ```

4. **Try a different browser** (Chrome, Firefox, Edge)
