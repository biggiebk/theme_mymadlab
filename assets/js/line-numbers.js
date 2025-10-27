/**
 * Enable line numbers for Prism.js code blocks
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Prism to fully load
  if (typeof Prism !== 'undefined') {
    // Add line-numbers class to all Prism code blocks
    document.querySelectorAll('pre[class*="language-"]').forEach(function(pre) {
      if (!pre.classList.contains('line-numbers')) {
        pre.classList.add('line-numbers');
      }
    });
    
    // Trigger Prism to re-run line numbers plugin
    if (Prism.plugins && Prism.plugins.lineNumbers) {
      Prism.plugins.lineNumbers.resize();
    }
  }
});
