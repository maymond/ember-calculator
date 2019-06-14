'use strict';

define("ember-calculator/tests/acceptance/calculator-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | add numbers', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('should add provided numbers', async function (assert) {});
    (0, _qunit.test)('should multiple provided numbers', async function (assert) {});
    (0, _qunit.test)('should subtract provided numbers', async function (assert) {});
    (0, _qunit.test)('should divide provided numbers', async function (assert) {});
    (0, _qunit.test)('should update theme settings', async function (assert) {});
  });
});
define("ember-calculator/tests/integration/components/action-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | action-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IRsM2CxC",
        "block": "{\"symbols\":[],\"statements\":[[5,\"action-button\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Et+5xL0+",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"action-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-calculator/tests/integration/components/number-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | number-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YZo9HPQH",
        "block": "{\"symbols\":[],\"statements\":[[5,\"number-button\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QVRl847A",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"number-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-calculator/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/action-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/action-button.js should pass ESLint\n\n');
  });
  QUnit.test('components/number-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/number-button.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/calculator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/calculator.js should pass ESLint\n\n');
  });
  QUnit.test('models/calculator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/calculator.js should pass ESLint\n\n');
  });
  QUnit.test('models/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/theme.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/calculator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/calculator.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/theme.js should pass ESLint\n\n');
  });
});
define("ember-calculator/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-calculator/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-calculator/templates/calculator.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/calculator.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-calculator/templates/components/action-button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/components/action-button.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-calculator/templates/components/number-button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/components/number-button.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-calculator/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-calculator/templates/theme.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-calculator/templates/theme.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-calculator/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/calculator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/calculator-test.js should pass ESLint\n\n2:10 - \'visit\' is defined but never used. (no-unused-vars)\n2:17 - \'currentURL\' is defined but never used. (no-unused-vars)\n2:29 - \'click\' is defined but never used. (no-unused-vars)\n8:57 - \'assert\' is defined but never used. (no-unused-vars)\n11:62 - \'assert\' is defined but never used. (no-unused-vars)\n14:62 - \'assert\' is defined but never used. (no-unused-vars)\n17:60 - \'assert\' is defined but never used. (no-unused-vars)\n20:58 - \'assert\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('integration/components/action-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/action-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/number-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/number-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/calculator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/calculator-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/calculator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/calculator-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/theme-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/theme-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/calculator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/calculator-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/theme-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/theme-test.js should pass ESLint\n\n');
  });
});
define("ember-calculator/tests/test-helper", ["ember-calculator/app", "ember-calculator/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-calculator/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-calculator/tests/unit/controllers/calculator-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | calculator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:calculator');
      assert.ok(controller);
    });
  });
});
define("ember-calculator/tests/unit/models/calculator-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | calculator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('calculator', {});
      assert.ok(model);
    });
  });
});
define("ember-calculator/tests/unit/models/theme-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | theme', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('theme', {});
      assert.ok(model);
    });
  });
});
define("ember-calculator/tests/unit/routes/calculator-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | calculator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:calculator');
      assert.ok(route);
    });
  });
});
define("ember-calculator/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ember-calculator/tests/unit/routes/theme-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | theme', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:theme');
      assert.ok(route);
    });
  });
});
define('ember-calculator/config/environment', [], function() {
  var prefix = 'ember-calculator';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-calculator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
