// The URL you want to scrape
const url = 'https://www.pmhansen.me';  // Replace with the website URL

// Function to fetch and scrape the data
export async function scrapeWebsite() {
    try {
        // Step 1: Fetch the HTML content of the page
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Step 2: Parse the response body as text (HTML content)
        const html = await response.text();

        // Step 3: Create a temporary DOM to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Step 4: Select all elements except the metadata (head, script, style, meta)
        const allElements = doc.body.querySelectorAll('*');  // Only select elements within the body

        // Step 5: Loop through each element and log the tag name and text content
        allElements.forEach((element) => {
            // Skip metadata and non-visible elements like <script>, <style>, <meta>, etc.
            if (['SCRIPT', 'STYLE', 'META', 'HEAD'].includes(element.tagName)) {
                return; // Skip these elements
            }

            // Log the tag name and the text content (visible content)
            console.log(`Tag: <${element.tagName.toLowerCase()}>, Content: ${element.textContent.trim()}`);
        });

    } catch (error) {
        console.error('Error scraping website:', error);
    }
}


