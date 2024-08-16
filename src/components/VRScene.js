import React from 'react';
const VRScene = () => {
  return (
    <a-scene>
      <a-sky color="#87CEEB"></a-sky>
      <a-plane position="0 0 -10" rotation="-90 0 0" width="20" height="20" color="#F5F5F5"></a-plane>
      <a-light type="ambient" color="#FFFFFF" intensity="0.5"></a-light>
      <a-light type="directional" color="#FFFFFF" intensity="0.8" position="5 10 5"></a-light>

      <a-assets>
        <a-asset-item id="donorModel" src="path/to/donor-model.glb"></a-asset-item>
        <a-asset-item id="doctorModel" src="path/to/doctor-model.glb"></a-asset-item>
        <a-asset-item id="bloodBagModel" src="path/to/blood-bag-model.glb"></a-asset-item>
        <a-asset-item id="ivStandModel" src="path/to/iv-stand-model.glb"></a-asset-item>
      </a-assets>

      <a-entity gltf-model="#donorModel" position="0 0 -5" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#doctorModel" position="3 0 -5" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#bloodBagModel" position="2 1 -4" scale="0.5 0.5 0.5"></a-entity>
      <a-entity gltf-model="#ivStandModel" position="4 0 -4" scale="0.5 0.5 0.5"></a-entity>

      <a-text value="Welcome to the Blood Donation VR Experience!" align="center" position="0 2 -5" color="#000"></a-text>
      <a-text value="1. Lie down on the donation bed." align="center" position="0 1.5 -5" color="#000"></a-text>
      <a-text value="2. A medical professional will prepare you." align="center" position="0 1 -5" color="#000"></a-text>
      <a-text value="3. Blood will be drawn into a sterile bag." align="center" position="0 0.5 -5" color="#000"></a-text>
      <a-text value="4. Relax and follow the post-donation instructions." align="center" position="0 0 -5" color="#000"></a-text>

      <a-entity camera look-controls>
        <a-cursor color="#FF0000"></a-cursor>
      </a-entity>
    </a-scene>
  );
};

export default VRScene;
