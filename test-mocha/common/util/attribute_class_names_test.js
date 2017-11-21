import attributeClassNames from '../../../js/common/util/attribute_class_names';

const assert = require('assert');

describe('attributeClassNames', function() {
  const attrs = ['mock_attr1', 'mock_attr2'];

  it('Skips null states', function() {
    const stateObj = null;
    assert.strictEqual(
      attributeClassNames(stateObj, attrs),
      '');
  });

  it('Matches no attrbutes', function() {
    const stateObj = {
      attributes: {
        other_attr_1: 1,
        other_attr_2: 2,
      },
    };
    assert.strictEqual(
      attributeClassNames(stateObj, attrs),
      '');
  });

  it('Matches one attrbute', function() {
    const stateObj = {
      attributes: {
        other_attr_1: 1,
        other_attr_2: 2,
        mock_attr1: 3,
      },
    };
    assert.strictEqual(
      attributeClassNames(stateObj, attrs),
      'has-mock_attr1');
  });

  it('Matches two attrbutes', function() {
    const stateObj = {
      attributes: {
        other_attr_1: 1,
        other_attr_2: 2,
        mock_attr1: 3,
        mock_attr2: null,
      },
    };
    assert.strictEqual(
      attributeClassNames(stateObj, attrs),
      'has-mock_attr1 has-mock_attr2');
  });
});
