/**
 * Enable line numbers for Prism.js code blocks
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Prism to fully load
  if (typeof Prism !== 'undefined') {
    var modified = false;
    
    // Add line-numbers class to all Prism code blocks
    document.querySelectorAll('pre[class*="language-"]').forEach(function(pre) {
      if (!pre.classList.contains('line-numbers')) {
        pre.classList.add('line-numbers');
        modified = true;
      }
    });
    
    // Trigger Prism to re-run line numbers plugin only if we modified blocks
    if (modified && Prism.plugins && Prism.plugins.lineNumbers) {
      Prism.plugins.lineNumbers.resize();
    }
  }
});
