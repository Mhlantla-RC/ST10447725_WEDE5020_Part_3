# ST10447725_WEDE5020_Part_3 - The Odd Jobbers

## Overview of Website

This is the final submission for **The Odd Jobbers**, a multi-page, responsive website designed for a moving, delivery, and 'odd job' service company. The website is built on **HTML5** with multi-page navigation for organized content flow, allowing clients to easily browse services, learn about the company, and request a quote.

The project demonstrates advanced technical implementation:

### Technical Features (Part 3)

| Feature Category | Implementation Details |
| :--- | :--- |
| **Advanced Styling** | Uses **CSS Variables** for a clean, scalable design system. Extensive use of modern layout techniques like **Flexbox and CSS Grid**. Includes dedicated **media queries** for tablet and mobile responsiveness. |
| **JavaScript Functionality** | Implements robust client-side form validation, **`localStorage`** to persist service selection, and dynamic detection of **"Open" or "Closed" business hours** on the contact page. |
| **UX Feedback** | Utilizes a **confirmation modal** and notification system for successful form submissions. Images are loaded efficiently using the **`loading="lazy"`** attribute. |
| **Mapping Integration** | **Google Maps iframe embed** on the Contact page provides a transparent and accessible location marker for the service area. |

***

## Reference List

This list includes citations for all external assets, stock imagery, design resources, and third-party services used in the project.

| ID | Component Used | Source and URL |
| :--- | :--- | :--- |
| **P1** | Color Palette Design System | colorhunt.co. (n.d.). *Color Hunt - Color Palettes for Designers and Artists*. [online] Available at: https://colorhunt.co/ [Accessed 27 Aug. 2025]. |
| **P2** | Logo and Delivery Icons | Istockphoto.com. (2025). *Delivery vector line icons*. [online] Available at: https://www.istockphoto.com/vector/delivery-vector-line-icons-simple-set-of-outline-symbols-linear-graphic-design-gm1215584720-354108539 [Accessed 27 Aug. 2025]. |
| **P3** | Moving Service Icons | Line (2022). *Simple Set of Moving Service Related Vector Line Icons*. [online] iStock. Available at: https://www.istockphoto.com/vector/line-moving-service-icons-gm1389851933-447002254 [Accessed 27 Aug. 2025]. |
| **P4** | Stock Photo (Man & Van) | Pexels.com. (2021). *Man in blue t-shirt and black pants standing beside white van*. [online] Available at: https://www.pexels.com/photo/man-in-blue-t-shirt-and-black-pants-standing-beside-white-van-7464643/ [Accessed 27 Aug. 2025]. |
| **P5** | Stock Photo (Men with Boxes) | Pexels.com. (2024). *Men with boxes in kitchen*. [online] Available at: https://www.pexels.com/photo/men-with-boxes-in-kitchen-20706509/ [Accessed 27 Aug. 2025]. |
| **P6** | Programming Language Article (Contextual) | Softermii. (n.d.). *Most Popular Programming Languages and Frameworks for 2023*. [online] Available at: https://www.softermii.com/blog/top-programming-languages-and-frameworks-for-software-development/ [Accessed 27 Aug. 2025]. |
| **P7** | **Google Maps Embed** | Google Maps Platform. (n.d.). *Embedded location service*. Used for location display on `contact.html`. |
| **P8** | **Additional Stock Imagery** | Stock Assets. (n.d.). *Images for service cards and general page banners*. [Sources: Various free stock photo services (e.g., Pexels, Unsplash)]. |
| **P9** | **Required Assignment Imagery** | Student-Supplied. (2025). *Images provided for Part 3 submission* (`1000784468.heic`, etc.). |

***

## 2. Final Technical Checklist (Do Not Skip)

To ensure your advanced features work, you must correct the file paths and clean up your `enquiry.html` file.

1.  **File Renaming:**
    * Rename **`Style-LabVM1846501.css`** to **`Style.css`** and place it in a folder named **`CSS`**.
    * Rename **`Java-LabVM1846501.js`** to **`script.js`** and place it in a folder named **`js`**.

2.  **HTML Cleanup (`enquiry.html`):**
    * Delete the large, internal `<script>` block that handles form validation from the `enquiry.html` file. Keep only the link to your external script:
        ```html
        <script src="js/script.js"></script>
        ```

3.  **Image Conversion:**
    * The HEIC images (`1000784468.heic`, etc.) are not compatible with web browsers. You must convert these files to **.jpg** or **.png** and update their corresponding file paths in all your HTML files.
