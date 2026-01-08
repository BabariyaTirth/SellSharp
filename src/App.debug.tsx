// Debug version - uses inline styles to verify React is working
function DebugApp() {
  console.log('Debug App is rendering');
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f9ff',
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{
        color: '#0284c7',
        fontSize: '48px',
        marginBottom: '20px',
        fontWeight: 'bold'
      }}>
        ✅ React is Working!
      </h1>
      <p style={{ fontSize: '20px', color: '#333', marginBottom: '20px' }}>
        If you see this message, React is mounting correctly.
      </p>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2 style={{ color: '#0284c7', marginBottom: '10px' }}>Next Steps:</h2>
        <p style={{ color: '#666' }}>
          Now let's check if Tailwind CSS is loading. Check the browser console (F12) for any errors.
        </p>
      </div>
    </div>
  );
}

export default DebugApp;
