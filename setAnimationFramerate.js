/*:
 * @plugindesc This plugin allows you to simply modify the in-game animations framerate.
 * @author FalconPilot
 * 
 * @param FPS
 * @desc The amount of FPS (Frames Per Second) for in-game animations
 * @default 15
*/

(function() {
  const pluginName = 'SetAnimationFramerate';
  const parameters = PluginManager.parameters(pluginName);
  const fps = Number(parameters['FPS'] || 15);
  console.log(parameters);
  console.log(fps);
})();
