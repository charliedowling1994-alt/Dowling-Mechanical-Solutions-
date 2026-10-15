# Dowling Mechanical Solutions Ltd website

Static HTML, CSS and JavaScript website for the Rotherham CNC machining business. Vercel publishes the repository root; no package installation or build step is required.

## Public pages

- `/`: CNC milling in Rotherham, serving Sheffield, South Yorkshire and the UK.
- `/cnc-milling/`: subcontract milling capabilities and quotation requirements.
- `/prototype-machining/`: one-off and development components.
- `/batch-machining/`: batch, repeat and overflow machining.
- `/sitemap.xml` and `/robots.txt`: page discovery information.

Each page has its own title, description and canonical URL. The home page contains LocalBusiness structured data with the displayed address, phone and email; service pages include Service and BreadcrumbList data. Internal links and sitemap entries use trailing slashes, matching the Vercel configuration.

## Enquiries

The contact form prepares a `mailto:` draft addressed to `dowling.mechanicalsolutions@hotmail.com`. The visitor must attach drawings and press Send in their own email app. It preserves the entered details and provides a direct email address and prepared draft link. No message is sent or stored by this static website. The form also has a native email action for visitors without JavaScript.

## Local use

Run `node server.cjs` and open `http://127.0.0.1:8000`. The server serves directory index pages and the sitemap with the appropriate content type. Deployment remains the existing Vercel project.

## SEO work outside the repository

- Verify the domain in Google Search Console and submit `https://www.dowlingmechanicalsolutions.co.uk/sitemap.xml`.
- Inspect the home and service URLs in Search Console after publication to check Google's crawl and indexing status.
- Maintain an accurate Google Business Profile with the same business name, address, phone number, website and actual opening hours.
- Add real workshop and component photographs, and seek honest customer reviews.
- Use Search Console's queries, impressions and clicks to assess visibility over time; record genuine enquiries as the business outcome.
- Confirm advertised processes, tolerances, material grades, lead times and quality statements remain accurate as the workshop changes. Do not add unverified certifications, customer names or review ratings.

Search rankings are determined by Google and are not guaranteed by these changes.
