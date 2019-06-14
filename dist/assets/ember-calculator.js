'use strict';



;define("ember-calculator/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://s3.amazonaws.com',
    namespace: 'gavant-public'
  });

  _exports.default = _default;
});
;define("ember-calculator/app", ["exports", "ember-calculator/resolver", "ember-load-initializers", "ember-calculator/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("ember-calculator/components/action-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      buttonPress() {
        document.querySelector('.calculator-screen').value += ' ' + this.get('action');
      }

    }
  });

  _exports.default = _default;
});
;define("ember-calculator/components/number-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      buttonPress() {
        document.querySelector('.calculator-screen').value += this.get('num');
      }

    }
  });

  _exports.default = _default;
});
;define("ember-calculator/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-calculator/controllers/calculator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      numberPress(num) {
        if (num === '.' && document.querySelector('.calculator-screen').value.indexOf('.') != -1) {
          return false;
        }

        if ((this.model.get('status') === 'first' || this.model.get('status') === 'second') && num !== '.') {
          document.querySelector('.calculator-screen').value = num;
        } else {
          document.querySelector('.calculator-screen').value += num;
        }

        this.model.setProperties({
          'currentNumber': num,
          'status': 'transition'
        });
      },

      actionPress(action) {
        this.model.setProperties({
          'firstNumber': document.querySelector('.calculator-screen').value,
          'operand': action,
          'status': 'second'
        });
      },

      clearPress() {
        document.querySelector('.calculator-screen').value = '0';
        this.model.setProperties({
          'firstNumber': 0,
          'secondNumber': 0,
          'currentNumber': 0,
          'operand': '',
          'status': 'first',
          'result': 0
        });
      },

      calculateResult() {
        if (this.model.get('firstNumber') === 0 || this.model.get('status') === 'complete') {
          return false;
        }

        this.model.setProperties({
          'secondNumber': document.querySelector('.calculator-screen').value
        });
        let operand = this.model.get('operand');
        let action = this.model.get(operand);
        let result = action(parseFloat(this.model.get('firstNumber')), parseFloat(this.model.get('secondNumber')));
        document.querySelector('.calculator-screen').value = result;
        this.model.setProperties({
          'result': result,
          'status': 'complete',
          'firstNumber': result
        });
      },

      themeSelect() {
        this.transitionToRoute('theme');
      }

    }
  });

  _exports.default = _default;
});
;define("ember-calculator/helpers/app-version", ["exports", "ember-calculator/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-calculator/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-calculator/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-calculator/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-calculator/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/ember-cli-mirage", ["exports", "ember-calculator/config/environment", "ember-calculator/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("ember-calculator/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/export-application-global", ["exports", "ember-calculator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-calculator/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("ember-calculator/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-calculator/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
    */
    this.passthrough('https://s3.amazonaws.com/**');
  }
});
;define("ember-calculator/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default()
  /* server */
  {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    // server.createList('post', 10);
  }
});
;define("ember-calculator/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("ember-calculator/models/calculator", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    firstNumber: _emberData.default.attr('number'),
    secondNumber: _emberData.default.attr('number'),
    currentNumber: _emberData.default.attr('number'),
    operand: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    result: _emberData.default.attr('number'),
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/models/theme", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    name: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("ember-calculator/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-calculator/router", ["exports", "ember-calculator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('calculator');
    this.route('theme');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("ember-calculator/routes/calculator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.createRecord('calculator', {
        firstNumber: 0,
        secondNumber: 0,
        currentNumber: 0,
        operand: '',
        status: 'first',
        result: 0
      });
    }

  });

  _exports.default = _default;
});
;define("ember-calculator/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('calculator');
    }

  });

  _exports.default = _default;
});
;define("ember-calculator/routes/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('theme');
    }

  });

  _exports.default = _default;
});
;define("ember-calculator/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ember-calculator/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "98Lbwx2k",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"body\"],[9],[0,\"\\n    \"],[1,[23,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/templates/calculator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EMDagLQ7",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"calculator-wrap\"],[9],[0,\"\\n  \"],[1,[29,\"input\",null,[[\"name\",\"id\",\"value\",\"readonly\",\"class\"],[\"calculator-screen\",\"calculator-screen\",\"0\",\"true\",\"calculator-screen\"]]],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"buttons-container\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-span-2\"],[9],[0,\"Theme: Default\"],[3,\"action\",[[24,0,[]],\"themeSelect\"]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"Clear\"],[3,\"action\",[[24,0,[]],\"clearPress\"]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-action\"],[9],[0,\"÷\"],[3,\"action\",[[24,0,[]],\"actionPress\",\"divide\"]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"7\"],[3,\"action\",[[24,0,[]],\"numberPress\",7]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"8\"],[3,\"action\",[[24,0,[]],\"numberPress\",8]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"9\"],[3,\"action\",[[24,0,[]],\"numberPress\",9]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-action\"],[9],[0,\"x\"],[3,\"action\",[[24,0,[]],\"actionPress\",\"multiply\"]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"4\"],[3,\"action\",[[24,0,[]],\"numberPress\",4]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"5\"],[3,\"action\",[[24,0,[]],\"numberPress\",5]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"6\"],[3,\"action\",[[24,0,[]],\"numberPress\",6]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-action\"],[9],[0,\"-\"],[3,\"action\",[[24,0,[]],\"actionPress\",\"subtract\"]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"1\"],[3,\"action\",[[24,0,[]],\"numberPress\",1]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"2\"],[3,\"action\",[[24,0,[]],\"numberPress\",2]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"3\"],[3,\"action\",[[24,0,[]],\"numberPress\",3]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-action\"],[9],[0,\"+\"],[3,\"action\",[[24,0,[]],\"actionPress\",\"add\"]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-span-2 btn-bottom-left\"],[9],[0,\"0\"],[3,\"action\",[[24,0,[]],\"numberPress\",0]],[10],[0,\"\\n    \"],[7,\"button\"],[9],[0,\".\"],[3,\"action\",[[24,0,[]],\"numberPress\",\".\"]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn-action btn-bottom-right\"],[9],[0,\"=\"],[3,\"action\",[[24,0,[]],\"calculateResult\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/calculator.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/templates/components/action-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MtvzzXKG",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[12,\"class\",[23,\"class\"]],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"buttonPress\"],null]],[9],[1,[29,\"action\",[[24,0,[]]],null],false],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/components/action-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/templates/components/number-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RK2kNUY4",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[12,\"class\",[23,\"class\"]],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"buttonPress\"],null]],[9],[1,[23,\"num\"],false],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/components/number-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CSMR4/xi",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/templates/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DbNdfNju",
    "block": "{\"symbols\":[\"theme\"],\"statements\":[[7,\"div\"],[11,\"class\",\"theme-selector\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Select a theme:\"],[10],[0,\"\\n\"],[4,\"each\",[[24,0,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[1,[24,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-calculator/templates/theme.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-calculator/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('ember-calculator/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-calculator/app")["default"].create({"usingCors":false,"corsWithCreds":false,"apiURL":null,"name":"ember-calculator","version":"0.0.0+ae6c6e0a"});
          }
        
//# sourceMappingURL=ember-calculator.map
