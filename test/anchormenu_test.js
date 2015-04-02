(function ($) {
  module('jQuery.anchorMenu');

  test('is anchorMenu', function () {
    expect(2);
    strictEqual($.anchorMenu(), 'anchorMenu.', 'should be anchorMenu');
    strictEqual($.anchorMenu({punctuation: '!'}), 'anchorMenu!', 'should be thoroughly anchorMenu');
  });
  
}(jQuery));
