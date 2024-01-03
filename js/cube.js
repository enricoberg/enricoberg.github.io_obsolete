    // Create a scene
    var scene = new THREE.Scene();
    scene.background = null;

    // Create a camera
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), alpha: true });
    renderer.setSize(500, 500);

  
    const imageUrls = [
      '../img/cube/face1.webp',
      '../img/cube/face2.webp',
      '../img/cube/face3.webp',
      '../img/cube/face4.webp',
      '../img/cube/face5.webp',
      '../img/cube/face6.webp',
      '../img/cube/face7.png',
      '../img/cube/face8.webp',
      '../img/cube/face9.webp',
      '../img/cube/face10.webp',
      '../img/cube/face11.webp',
      '../img/cube/face12.webp',
      '../img/cube/face13.webp'
    ];
    let materials = [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(imageUrls[1]) }), // Front face
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(imageUrls[3]) }),  // Back face
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // Top face
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // Bottom face
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(imageUrls[0]) }), // Right face
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(imageUrls[2]) }), // Left face
    ];
    let faceorder=[4,0,5,1];
    // Create a cube using the face materials
    var geometry = new THREE.BoxGeometry(3.75, 3.75, 3.75);

    var cube = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    scene.add(cube);
    scene.add(cube);
    
    let framesxloop=480;
    let rotationspeed=(2*Math.PI)/framesxloop;

    // Function to animate the cube
    function animate() {
      requestAnimationFrame(animate);
      
      // Rotate the cube    
      cube.rotation.y -= rotationspeed;
      renderer.render(scene, camera);
    }

    // Start the animation
    animate();
    
    // Handle window resizing
    window.addEventListener('resize', function () {
      var width = 500;
      var height = 500;
      renderer.setSize(width, height);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    });

    let currentTextureIndex = 2;
    let index=2;
    let facetoupdate=faceorder[index];

    function changeTextures() {
      
      facetoupdate=faceorder[index];
      cube.material[facetoupdate].map = new THREE.TextureLoader().load(imageUrls[currentTextureIndex]);
      cube.material[facetoupdate].needsUpdate = true;
      currentTextureIndex+=1;
      index+=1;
      index= index>3? 0 : index;
      currentTextureIndex= currentTextureIndex>=imageUrls.length? 0 : currentTextureIndex;
      
      
    }
    
    
    changeTextures();
    setInterval(changeTextures, 1000*framesxloop/240);