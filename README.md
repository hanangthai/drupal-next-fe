# Next.js Frontend Setup for Drupal

## Installation Steps

1. **Create a `.env.local` File**  
   You can copy the contents from `.env.example` as a starting point.

2. **Configure API Base URL**  
   Update the value of `NEXT_PUBLIC_API_BASEURL` to match the domain where your Drupal project is installed.

   For example, if your Drupal project is hosted at `http://drupal-next.com`, then set:
   ```env
   NEXT_PUBLIC_API_BASEURL="http://drupal-next.com/jsonapi"
3. **Install Dependencies and Run the Project**  
   Run the following commands in your terminal:
- `npm install`
- `npm run dev`

# Instructions for Updating the About Page

You can access the CMS and edit the **About** page that I’ve already set up. Rearrange the positions of the sections, and after reloading the Next.js app, you’ll see that the sections update accordingly in the app.

The Next.js app is configured to support multiple languages, so you can access the following routes:
- `/about-us` => defaults to English
- `/zh-hans/about-us` => for Simplified Chinese
