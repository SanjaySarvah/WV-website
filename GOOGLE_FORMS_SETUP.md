# Google Forms Integration Setup Guide

## Overview
This website now has a "Let's Talk" button that navigates to a contact form. You have two options for the form:

1. **Custom Form** (Currently implemented) - A React form with validation
2. **Google Forms Integration** - Embed a Google Form directly

## Option 1: Using the Custom Form (Recommended for Development)

The custom form is already implemented and includes:
- Name field (required)
- Email field (required)
- Phone field (required)
- Description field (required)
- Company field (optional)
- Form validation
- Responsive design

To handle form submissions, you'll need to:
1. Set up a backend API endpoint
2. Configure the form to submit to your backend
3. Set up email notifications or database storage

## Option 2: Google Forms Integration

### Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add the following questions:
   - **Full Name** (Short answer, required)
   - **Email Address** (Short answer, required)
   - **Phone Number** (Short answer, required)
   - **Project Description** (Paragraph, required)
   - **Company** (Short answer, optional)

### Step 2: Get the Embed URL

1. Click the "Send" button in your Google Form
2. Go to the "Embed" tab
3. Copy the iframe code or URL
4. The URL should look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true`

### Step 3: Replace the Custom Form

In `src/pages/ContactUs.jsx`, replace the custom form section with:

```jsx
import GoogleFormEmbed from '../components/GoogleFormEmbed';

// Replace the contact-form div with:
<div className="contact-form mb-80">
  <GoogleFormEmbed 
    formUrl="YOUR_GOOGLE_FORM_URL_HERE"
    height="800"
  />
</div>
```

### Step 4: Test the Integration

1. Navigate to `/contact-us` on your website
2. Verify the Google Form loads correctly
3. Test form submission
4. Check that responses are received in your Google Forms dashboard

## Form Styling and Customization

### Google Forms Styling
Google Forms have limited styling options, but you can:
- Use custom themes in Google Forms
- Adjust the iframe height and width
- Add custom CSS to the container

### Custom Form Styling
The custom form uses Bootstrap classes and can be styled by:
- Modifying the CSS classes in the component
- Adding custom CSS in your stylesheets
- Using the existing theme classes (`thm-btn`, `form-control-lg`, etc.)

## Troubleshooting

### Common Issues

1. **Form not loading**: Check if the Google Form URL is correct and allows embedding
2. **Styling conflicts**: Ensure Bootstrap CSS is properly loaded
3. **Form submission errors**: Verify form validation and required fields
4. **Responsive issues**: Test on different screen sizes

### Testing Checklist

- [ ] Form loads on desktop
- [ ] Form loads on mobile
- [ ] Required field validation works
- [ ] Form submission is successful
- [ ] Email notifications are received (if configured)
- [ ] Form data is stored (if using backend)

## Security Considerations

1. **Google Forms**: Automatically handles spam protection and validation
2. **Custom Forms**: Implement CSRF protection, rate limiting, and input sanitization
3. **Data Privacy**: Ensure compliance with GDPR and other privacy regulations
4. **Email Security**: Use secure email transmission methods

## Next Steps

1. Choose your preferred form implementation
2. Set up Google Forms or backend integration
3. Test the complete user flow
4. Configure email notifications
5. Set up analytics tracking (optional)
6. Deploy and monitor

## Support

For technical support or questions about the implementation, refer to:
- React documentation
- Google Forms help center
- Bootstrap documentation
- Your development team

