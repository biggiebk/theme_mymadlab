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
  
  // Use scroll-based approach for better top/bottom detection
  let ticking = false;
  
  function updateTOCOnScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Check if we're at the very top
        if (scrollTop === 0) {
          const firstHeader = headers[0];
          if (firstHeader) {
            const firstTocLink = document.querySelector(`.toc-link[href="#${firstHeader.id}"]`);
            updateActiveTOCItem(firstTocLink);
          }
          ticking = false;
          return;
        }
        
        // Check if we're at the very bottom
        if (scrollTop + windowHeight >= documentHeight - 10) {
          const lastHeader = headers[headers.length - 1];
          if (lastHeader) {
            const lastTocLink = document.querySelector(`.toc-link[href="#${lastHeader.id}"]`);
            updateActiveTOCItem(lastTocLink);
          }
          ticking = false;
          return;
        }
        
        // Find the currently visible header
        let currentHeader = null;
        let currentOffset = -1;
        
        headers.forEach((header) => {
          const rect = header.getBoundingClientRect();
          const headerTop = rect.top + scrollTop;
          const offset = scrollTop - headerTop;
          
          // Header is above the viewport and closest to current scroll position
          if (offset >= -100 && (currentHeader === null || offset > currentOffset)) {
            currentHeader = header;
            currentOffset = offset;
          }
        });
        
        // If no header is found above, use the first one that's visible
        if (!currentHeader) {
          for (let i = 0; i < headers.length; i++) {
            const rect = headers[i].getBoundingClientRect();
            if (rect.top <= windowHeight * 0.5) {
              currentHeader = headers[i];
            } else {
              break;
            }
          }
        }
        
        // Update active TOC item
        if (currentHeader) {
          const tocLink = document.querySelector(`.toc-link[href="#${currentHeader.id}"]`);
          updateActiveTOCItem(tocLink);
        }
        
        ticking = false;
      });
      
      ticking = true;
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', updateTOCOnScroll);
  
  // Initial call to set the correct state
  updateTOCOnScroll();
  
  // Also use Intersection Observer as fallback for better performance on modern browsers
  const observerOptions = {
    rootMargin: '-10% 0px -80% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  };
  
  const observer = new IntersectionObserver((entries) => {
    // Only use intersection observer if we're not at the very top or bottom
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop === 0 || scrollTop + windowHeight >= documentHeight - 10) {
      return; // Let the scroll handler deal with edge cases
    }
    
    let visibleEntry = null;
    let maxRatio = 0;
    
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        visibleEntry = entry;
        maxRatio = entry.intersectionRatio;
      }
    });
    
    if (visibleEntry) {
      const id = visibleEntry.target.id;
      const tocLink = document.querySelector(`.toc-link[href="#${id}"]`);
      updateActiveTOCItem(tocLink);
    }
  }, observerOptions);
  
  headers.forEach((header) => {
    observer.observe(header);
  });
}

function updateActiveTOCItem(activeLink) {
  // Remove active class from all links
  document.querySelectorAll('.toc-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current link
  if (activeLink) {
    activeLink.classList.add('active');
    
    // Scroll the TOC to keep the active item visible
    const tocContainer = document.querySelector('.table-of-contents');
    if (tocContainer) {
      const linkRect = activeLink.getBoundingClientRect();
      const tocRect = tocContainer.getBoundingClientRect();
      
      // Check if the active link is outside the visible area of the TOC
      if (linkRect.top < tocRect.top || linkRect.bottom > tocRect.bottom) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }
}