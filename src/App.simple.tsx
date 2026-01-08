// Simple test version - if this works, we know React is mounting
function SimpleApp() {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f0f9ff', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ color: '#0284c7', fontSize: '48px', marginBottom: '20px' }}>
        ✅ React is Working!
      </h1>
      <p style={{ fontSize: '20px', color: '#333' }}>
        If you see this message, React is mounting correctly.
      </p>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '20px' }}>
        Now let's check the full app...
      </p>
    </div>
  );
}

export default SimpleApp;
