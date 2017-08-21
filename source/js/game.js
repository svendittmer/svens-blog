var Game = /** @class */ (function () {
    function Game(canvasElement) {
        // Create canvas and engine
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        var _this = this;
        // create a basic BJS Scene object
        this._scene = new BABYLON.Scene(this._engine);
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
        // target the camera to scene origin
        this._camera.setTarget(BABYLON.Vector3.Zero());
        // attach the camera to the canvas
        this._camera.attachControl(this._canvas, false);
        // create a basic light, aiming 0,1,0 - meaning, to the sky
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        // create a built-in "ground" shape
        var ground = BABYLON.MeshBuilder.CreateGround('ground1', { width: 64, height: 64, subdivisions: 2 }, this._scene);
        // apply a texture to the ground
        var materialGround = new BABYLON.StandardMaterial("texturePlane", this._scene);
        materialGround.diffuseTexture = new BABYLON.Texture("/textures/worldmap.png", this._scene);
        // materialGround.diffuseTexture.uScale = 5.0; // Repeat 5 times on the Vertical Axes
        // materialGround.diffuseTexture.vScale = 5.0; // Repeat 5 times on the Horizontal Axes
        materialGround.backFaceCulling = false; // Always show the front and the back of an element
        ground.material = materialGround;
        // import ship
        BABYLON.SceneLoader.ImportMesh("", "/meshes/", "pirate-ship.babylon", this._scene, function (newMeshes, particleSystems, skeletons) {
            var ship = newMeshes[0];
            ship.position.x = -6;
            // add blink effect on click on ship
            ship.actionManager = new BABYLON.ActionManager(_this._scene);
            var action = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, ship, "visibility", 0.2, 1000);
            var action2 = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, ship, "visibility", 1.0, 1000);
            ship.actionManager.registerAction(action).then(action2);
        });
    };
    Game.prototype.animate = function () {
        var _this = this;
        // run the render loop
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'
    var game = new Game('renderCanvas');
    // Create the scene
    game.createScene();
    // start animation
    game.animate();
});
