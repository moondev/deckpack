import {APPLICATION_DATA_SOURCE_EDITOR} from './dataSources/applicationDataSourceEditor.component';
import {CHAOS_MONKEY_CONFIG_COMPONENT} from 'core/chaosMonkey/chaosMonkeyConfig.component';

let angular = require('angular');

module.exports = angular
  .module('spinnaker.core.application.config.controller', [
    require('angular-ui-router'),
    require('./applicationAttributes.directive.js'),
    require('./applicationNotifications.directive.js'),
    require('./applicationCacheManagement.directive.js'),
    require('./deleteApplicationSection.directive.js'),
    require('./applicationSnapshotSection.component.js'),
    APPLICATION_DATA_SOURCE_EDITOR,
    CHAOS_MONKEY_CONFIG_COMPONENT,
    require('./links/applicationLinks.component.js'),
    require('../../config/settings.js')
  ])
  .controller('ApplicationConfigController', function ($state, app, settings) {
    this.application = app;
    this.application.attributes.instancePort = this.application.attributes.instancePort || settings.defaultInstancePort || null;
    this.feature = settings.feature;
    if (app.notFound) {
      $state.go('home.infrastructure', null, {location: 'replace'});
    }
  });
