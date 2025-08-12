import React from 'react';

const GoogleFormEmbed = ({ formUrl, height = "800" }) => {
  // Example Google Form URL structure:
  // https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
  
  return (
    <div className="google-form-embed">
      <div className="alert alert-warning mb-3">
        <strong>Note:</strong> Replace the form URL below with your actual Google Form URL.
      </div>
      
      <iframe
        src={formUrl || "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
        className="border rounded"
      >
        Loading…
      </iframe>
      
      <div className="mt-3 text-muted small">
        <i className="bi bi-info-circle me-1"></i>
        If the form doesn't load, please check your Google Form URL and ensure it's set to allow embedding.
      </div>
    </div>
  );
};

export default GoogleFormEmbed;

