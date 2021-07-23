import cubeSceneModule from './CubeSceneModule'

const scenePipelineModule = () => {
    let myCanvas
    const setupObj = {
        cube: cubeSceneModule()
    }
    let currentObj = setupObj.cube

    const clearScene = (scene) => {
        for(let i = scene.children.length - 1; i >= 0; i--){
            const obj = scene.children[i]
            scene.remove(obj)
        }
    }

    const initXrScene = ({scene, camera, renderer}) => {
        currentObj.setupScene({scene, camera, renderer, myCanvas})
    }

    const showTarget = ({detail}) => {
        if(typeof currentObj !== 'undefined'){
            currentObj.showTarget(detail)
        }
    }

    const injectModel = () => {

    }

    return {
        name: 'scene-picker',
        onStart: ({canvas, canvasWidth, canvasHeight}) => {

          THREE.Cache.enabled = true
          myCanvas = canvas
          const {scene, camera, renderer} = XR8.Threejs.xrScene()

          initXrScene({scene, camera, renderer})

          // Enable TWEEN animations.
          const animate = (time) => {
            requestAnimationFrame(animate)
            currentObj.animate()
          }

          animate()
          XR8.XrController.updateCameraProjectionMatrix({
            origin: camera.position,
            facing: camera.quaternion,
          })
        },

        listeners: [
          {event: 'reality.imagescanning', process: injectModel},
          {event: 'reality.imagefound', process: showTarget},
          {event: 'reality.imageupdated', process: showTarget},
        ],
      }
}

export default scenePipelineModule