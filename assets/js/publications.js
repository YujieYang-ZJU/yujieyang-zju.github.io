(function () {
  'use strict';

  document.querySelectorAll('[data-citation-dialog]').forEach(function (trigger) {
    var dialog = document.getElementById(trigger.dataset.citationDialog);
    if (!dialog || typeof dialog.showModal !== 'function') return;

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      dialog.querySelector('[role="status"]').textContent = '';
      dialog.showModal();
    });

    dialog.addEventListener('click', function (event) {
      var bounds = dialog.getBoundingClientRect();
      if (event.target === dialog &&
          (event.clientX < bounds.left || event.clientX > bounds.right ||
           event.clientY < bounds.top || event.clientY > bounds.bottom)) {
        dialog.close();
      }
    });

    dialog.querySelector('[data-copy-citation]').addEventListener('click', async function () {
      var code = dialog.querySelector('code');
      var status = dialog.querySelector('[role="status"]');
      try {
        await navigator.clipboard.writeText(code.textContent.trim() + '\n');
        status.textContent = 'Citation copied.';
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(code);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
      }
    });
  });
}());
