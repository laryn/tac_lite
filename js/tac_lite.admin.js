/**
 * @file
 * Attaches behaviors for the TAC Lite module.
 */
(function ($) {

  Backdrop.behaviors.TacLiteFieldsetSummaries = {
    // Provide the vertical tab summaries.
    attach: function (context) {
      var $context = $(context);

      $context.find('fieldset.tac-lite--user-settings').each(function () {
        var $fieldset = $(this);
        var labels = [];

        $fieldset.find('fieldset.tac-lite--scheme').each(function () {
          var $scheme = $(this);
          // Remove a hidden span from the text on the legend.
          var $scheme_legend = $scheme.find('.fieldset-legend').clone();
          $scheme_legend.find('span').remove();
          var $scheme_label = $scheme_legend.text().trim();
          labels.push('[' + $scheme_label + '] ');

          $scheme.find('select.tac-lite--term-select').each(function () {
            var $select = $(this);
            var $label = $select.parent().find('label');
            var labelText = $label.text().trim() + ': ';
            var selections = [];
            $select.find('option:selected').each(function () {
              var optionText = $(this).text().trim();
              selections.push(optionText);
            });
            if (selections.length === 0) {
              selections.push(Backdrop.t('None'));
            }
            labelText += selections.join(', ');
            labels.push(labelText);
          });
        });

        var summary = labels.join(' ');
        $fieldset.backdropSetSummary(function () {
          return Backdrop.checkPlain(summary);
        });
      });
    }
  };
})(jQuery);
