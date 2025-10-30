/**
 * Table of Contents Generator for MyMadLab Theme
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('TOC: DOM loaded, starting TOC generation');
  
  // Add a small delay to ensure content is fully rendered
  setTimeout(function() {
    generateTableOfContents();
    setupTOCScrollSpy();
  }, 100);
});

function generateTableOfContents() {
  console.log('TOC: Starting generateTableOfContents');
  
  // Find all headers (H1, H2, H3) within the main content
  let contentArea = document.querySelector('main.page-content .wrapper');
  if (!contentArea) {
    contentArea = document.querySelector('main.page-content');
  }
  
  if (!contentArea) {
    console.log('TOC: Content area not found, trying body');
    // Fallback to entire document
    const headers = document.querySelectorAll('h1, h2, h3');
    if (headers.length > 0) {
      createTOC(headers);
    } else {
      console.log('TOC: No headers found anywhere');
      createEmptyTOC(); // For debugging
    }
    return;
  }
  
  const headers = contentArea.querySelectorAll('h1, h2, h3');
  console.log('TOC: Found', headers.length, 'headers');
  
  if (headers.length === 0) {
    console.log('TOC: No headers found, creating debug TOC');
    createEmptyTOC(); // For debugging
    return;
  }

  createTOC(headers);
}

function createEmptyTOC() {
  // Create a debug TOC to test visibility
  const tocContainer = document.createElement('nav');
  tocContainer.className = 'table-of-contents';
  tocContainer.innerHTML = `
    <h4 class="toc-header">Contents (Debug)</h4>
    <ul class="toc-list">
      <li class="toc-item"><a href="#" class="toc-link">No headers found</a></li>
      <li class="toc-item"><a href="#" class="toc-link">TOC is working</a></li>
    </ul>
  `;
  
  insertTOC(tocContainer);
}

function createTOC(headers) {
  // Create TOC container
  const tocContainer = document.createElement('nav');
  tocContainer.className = 'table-of-contents';
  tocContainer.setAttribute('aria-label', 'Table of Contents');
  
  // Create TOC header
  const tocHeader = document.createElement('h4');
  tocHeader.textContent = 'Contents';
  tocHeader.className = 'toc-header';
  tocContainer.appendChild(tocHeader);
  
  // Create TOC list
  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';
  
  headers.forEach((header, index) => {
    // Generate unique ID if header doesn't have one
    if (!header.id) {
      header.id = generateHeaderId(header.textContent, index);
    }
    
    // Create list item
    const listItem = document.createElement('li');
    listItem.className = `toc-item toc-${header.tagName.toLowerCase()}`;
    
    // Create link
    const link = document.createElement('a');
    link.href = `#${header.id}`;
    link.textContent = header.textContent;
    link.className = 'toc-link';
    
    // Add smooth scroll behavior
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById(header.id);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active state
        updateActiveTOCItem(link);
      }
    });
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  tocContainer.appendChild(tocList);
  insertTOC(tocContainer);
}

function insertTOC(tocContainer) {
  // For fixed positioning, we can append to body
  document.body.appendChild(tocContainer);
  
  // Add has-toc class to body for styling
  document.body.classList.add('has-toc');
  
  console.log('TOC: TOC inserted successfully with fixed positioning');
}

function generateHeaderId(text, index) {
  // Convert text to URL-friendly ID
  const baseId = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-')     // Replace multiple hyphens with single
    .trim();
  
  return baseId || `header-${index}`;
}

function setupTOCScrollSpy() {
  // Look for headers within the main content area
  const contentArea = document.querySelector('main.page-content') || document.body;
  const headers = Array.from(contentArea.querySelectorAll('h1, h2, h3'));
  const tocLinks = document.querySelectorAll('.toc-link');
  
  if (headers.length === 0 || tocLinks.length === 0) {
    return;
  }
  
  let ticking = false;
  let lastActiveLink = null;
  
  function updateTOCOnScroll() {
    if (ticking) return;
    
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      let activeHeader = null;
      
      // Special case: at the very top of the page
      if (scrollTop <= 50) {
        activeHeader = headers[0];
      }
      // Special case: at the very bottom of the page  
      else if (scrollTop + windowHeight >= documentHeight - 50) {
        activeHeader = headers[headers.length - 1];
      }
      // Normal case: find the header that's currently in view
      else {
        // Find the last header that's above the middle of the viewport
        const viewportMiddle = scrollTop + (windowHeight * 0.3); // Use top 30% as trigger point
        
        for (let i = headers.length - 1; i >= 0; i--) {
          const header = headers[i];
          const headerTop = header.getBoundingClientRect().top + scrollTop;
          
          if (headerTop <= viewportMiddle) {
            activeHeader = header;
            break;
          }
        }
        
        // If no header found above viewport middle, use the first visible one
        if (!activeHeader) {
          activeHeader = headers[0];
        }
      }
      
      // Update TOC only if the active header changed
      if (activeHeader) {
        const newActiveLink = document.querySelector(`.toc-link[href="#${activeHeader.id}"]`);
        if (newActiveLink !== lastActiveLink) {
          updateActiveTOCItem(newActiveLink);
          lastActiveLink = newActiveLink;
        }
      }
      
      ticking = false;
    });
  }
  
  // Throttled scroll event listener
  window.addEventListener('scroll', updateTOCOnScroll, { passive: true });
  
  // Initial call to set the correct state
  setTimeout(updateTOCOnScroll, 100);
}

function updateActiveTOCItem(activeLink) {
  // Remove active class from all links
  document.querySelectorAll('.toc-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current link
  if (activeLink) {
    activeLink.classList.add('active');
  }
}