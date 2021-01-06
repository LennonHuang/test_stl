function init() {

    // setup the scene for rendering
    var camera = initCamera(new THREE.Vector3(-10, 10, 10));
    //console.log(camera.position);  
    var loaderScene = new BaseLoaderScene(camera);
    camera.lookAt(new THREE.Vector3(0, 15, 0));
  
    // load the model: model from http://www.thingiverse.com/thing:69709
    var loader = new THREE.STLLoader();
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    loader.load("./Solar Frame Actuation System.stl", function (geometry) {
      var mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 1,
        roughness: 0.5,
      });
      var group = new THREE.Mesh(geometry, mat);
      group.position.set(1,2,-1);
      group.rotation.x = -0.0 * Math.PI;
      group.scale.set(3, 3, 3);
  
      // call the default render loop.
      loaderScene.render(group, camera);
    });
    console.log(loaderScene.scene.children[2].position);
  }