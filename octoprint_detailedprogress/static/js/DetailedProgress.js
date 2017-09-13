/*
 * View model for OctoPrint-DetailedProgress
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
    function detailedProgressViewModel(parameters) {
        var self = this;
		
		// assign the injected parameters, e.g.:
		self.settingsViewModel = parameters[0];
		
		self.time_to_change = ko.observable();
		
		self.onBeforeBinding = function() {
            self.time_to_change(self.settingsViewModel.settings.plugins.detailedProgress.time_to_change());
        };
		
		self.onEventSettingsUpdated = function (payload) {            
            self.time_to_change = self.settingsViewModel.settings.plugins.detailedProgress.time_to_change();
        };
    };

    // view model class, parameters for constructor, container to bind to
    ADDITIONAL_VIEWMODELS.push([
        detailedProgressViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        ["settingsViewModel"],

        // e.g. #settings_plugin_detailedProgress, #tab_plugin_detailedProgress, ...
        ["settings_plugin_detailedProgress_form"]
    ]);
});
