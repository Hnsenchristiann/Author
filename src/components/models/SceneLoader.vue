<template>
</template>

<script>
import HouseScene from './scenes/HouseScene.html?raw'
import LunaScene from './scenes/LunaScene.html?raw'
import SleepingScene from './scenes/SleepingScene.html?raw'
import WindowScene from './scenes/WindowScene.html?raw'

export default {
    name: 'tester-model',
    props: ['scene'],
    data(){
        return {
            origHtmlClass: '',
            scenes: {
                house: HouseScene,
                luna: LunaScene,
                sleeping: SleepingScene,
                window: WindowScene
            }
        }
    },
    beforeUnmount(){
        if(this.scene in this.scenes){
            const ascene = document.getElementsByTagName('a-scene')[0]
            ascene.parentNode.removeChild(ascene)
            const html = document.getElementsByTagName('html')[0]
            html.className = this.origHtmlClass
        }
    },
    created(){
        if(this.scene in this.scenes){
            // XR8.XrController.configure({})
            if(AFRAME.components['tap-place']){
                console.log('tap place exist')
            }else{
                // AFRAME.registerComponent('tap-place', {
                //     init(){
                //         const ground = document.getElementById('ground')
                //         ground.addEventListener('click', (event) => {
                //             // Create new entity for the new object
                //             const newElement = document.createElement('a-entity')
                //             // The raycaster gives a location of the touch in the scene
                //             const touchPoint = event.detail.intersection.point
                //             newElement.setAttribute('position', touchPoint)
                //             const randomYRotation = Math.random() * 360
                //             newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)
                //             newElement.setAttribute('visible', 'false')
                //             newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
                //             newElement.setAttribute('shadow', {
                //                 receive: false,
                //             })
                //             newElement.setAttribute('gltf-model', '#treeModel')
                //             this.el.sceneEl.appendChild(newElement)
                //             newElement.addEventListener('model-loaded', () => {
                //                 // Once the model is loaded, we are ready to show it popping in using an animation
                //                 newElement.setAttribute('visible', 'true')
                //                 newElement.setAttribute('animation', {
                //                 property: 'scale',
                //                 to: '7 7 7',
                //                 easing: 'easeOutElastic',
                //                 dur: 800,
                //                 })
                //             })
                //         })
                //     }
                // })
            }
            const html = document.getElementsByTagName('html')[0]
            this.origHtmlClass = html.className
            document.body.insertAdjacentHTML('beforeend', this.scenes[this.scene])
        }
    },
}
</script>

<style lang="postcss">
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>