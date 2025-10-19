/**
 * Enhanced copy-to-clipboard functionality for MyMadLab theme
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Prism to load
  if (typeof Prism !== 'undefined') {
    initializeCopyButtons();
  } else {
    // Fallback: wait a bit for Prism to load
    setTimeout(initializeCopyButtons, 100);
  }
});

function initializeCopyButtons() {
  // Add copy buttons to all code blocks (both Prism and regular Jekyll)
  const codeBlocks = document.querySelectorAll('pre[class*="language-"], .highlight pre, pre code, pre');
  
  codeBlocks.forEach(function(codeBlock) {
    // Skip if already has button or if it's not actually a code container
    if (codeBlock.querySelector('.copy-button')) return;
    if (!codeBlock.textContent.trim()) return;
    
    // For Jekyll highlight blocks, target the pre inside .highlight
    const targetBlock = codeBlock.classList.contains('highlight') ? 
      codeBlock.querySelector('pre') || codeBlock : codeBlock;
    
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Style the button
    Object.assign(button.style, {
      position: 'absolute',
      top: '0.5em',
      right: '0.5em',
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid rgba(192, 239, 254, 0.3)',
      borderRadius: '4px',
      color: 'rgba(192, 239, 254, 0.7)',
      cursor: 'pointer',
      fontSize: '0.75em',
      padding: '0.3em 0.6em',
      transition: 'all 0.2s ease',
      zIndex: '10'
    });
    
    // Add hover effects
    button.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(0, 0, 0, 0.8)';
      this.style.color = 'rgb(192, 239, 254)';
      this.style.borderColor = 'rgb(100, 200, 255)';
    });
    
    button.addEventListener('mouseleave', function() {
      if (!this.classList.contains('copied')) {
        this.style.background = 'rgba(0, 0, 0, 0.6)';
        this.style.color = 'rgba(192, 239, 254, 0.7)';
        this.style.borderColor = 'rgba(192, 239, 254, 0.3)';
      }
    });
    
    // Copy functionality
    button.addEventListener('click', function() {
      const code = targetBlock.querySelector('code');
      const text = code ? code.textContent : targetBlock.textContent;
      
      copyToClipboard(text, button);
    });
    
    // Make sure the target block is positioned relatively
    if (getComputedStyle(targetBlock).position === 'static') {
      targetBlock.style.position = 'relative';
    }
    
    targetBlock.appendChild(button);
  });
}

function copyToClipboard(text, button) {
  // Use modern clipboard API if available
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      showCopySuccess(button);
    }).catch(function() {
      fallbackCopy(text, button);
    });
  } else {
    fallbackCopy(text, button);
  }
}

function fallbackCopy(text, button) {
  // Fallback for older browsers
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopySuccess(button);
    } else {
      showCopyError(button);
    }
  } catch (err) {
    showCopyError(button);
  }
  
  document.body.removeChild(textArea);
}

function showCopySuccess(button) {
  const originalText = button.textContent;
  button.textContent = 'Copied!';
  button.classList.add('copied');
  
  // Success styling
  button.style.background = 'rgba(166, 226, 46, 0.2)';
  button.style.borderColor = '#a6e22e';
  button.style.color = '#a6e22e';
  
  setTimeout(function() {
    button.textContent = originalText;
    button.classList.remove('copied');
    button.style.background = 'rgba(0, 0, 0, 0.6)';
    button.style.color = 'rgba(192, 239, 254, 0.7)';
    button.style.borderColor = 'rgba(192, 239, 254, 0.3)';
  }, 2000);
}

function showCopyError(button) {
  const originalText = button.textContent;
  button.textContent = 'Failed';
  
  // Error styling
  button.style.background = 'rgba(249, 38, 114, 0.2)';
  button.style.borderColor = '#f92672';
  button.style.color = '#f92672';
  
  setTimeout(function() {
    button.textContent = originalText;
    button.style.background = 'rgba(0, 0, 0, 0.6)';
    button.style.color = 'rgba(192, 239, 254, 0.7)';
    button.style.borderColor = 'rgba(192, 239, 254, 0.3)';
  }, 2000);
}