(function() {
  const pluginName = 'SetAnimationFramerate';
  const parameters = PluginManager.parameters(pluginName);
  const fps = Number(parameters['Animations FPS'] || 15);
  console.log(parameters);
  console.log(fps);
})();
