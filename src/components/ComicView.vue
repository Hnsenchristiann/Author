<template>
    <div class="comics-container">
        <router-link :class="{glow: b1, 'fill-width': !b1}" class="glow-animation" to="/ar/sleeping">
            <img id="ar-1" src="../assets/comic/01-SLEEPING_AR.jpg">
        </router-link>
        <img src="../assets/comic/02-WAKING_UP.jpg">
        <router-link :class="{glow: b2, 'fill-width': !b2}" class="glow-animation" to="/ar/house">
            <img id="ar-2" src="../assets/comic/03-KARA_HOUSE_AR.jpg">
        </router-link>
        <router-link :class="{glow: b3, 'fill-width': !b3}" class="glow-animation" to="/ar/window">
            <img id="ar-3" src="../assets/comic/04-KARA_WINDOW_AR.jpg">
        </router-link>
        <img src="../assets/comic/05-KARA_WRITING.jpg">
        <router-link :class="{glow: b4, 'fill-width': !b4}" class="glow-animation" to="/ar/luna">
            <img id="ar-4" src="../assets/comic/06-KARA_LUNA_AR.jpg">
        </router-link>
        <img src="../assets/comic/07-KARA_LUNA_TABLE.jpg">
    </div>
    <div class="tester">
        <div :class="{button: b1, 'hidden-button': !b1}" class="animated fixed">
            <router-link to="/ar/sleeping">
                <img src="../assets/Record.png" alt="">
            </router-link>
        </div>
        <div :class="{button: b2, 'hidden-button': !b2}" class="animated fixed">
            <router-link to="/ar/house">
                <img src="../assets/Record.png" alt="">
            </router-link>
        </div>
        <div :class="{button: b3, 'hidden-button': !b3}" class="animated fixed">
            <router-link to="/ar/window">
                <img src="../assets/Record.png" alt="">
            </router-link>
        </div>
        <div :class="{button: b4, 'hidden-button': !b4}" class="animated fixed">
            <router-link to="/ar/luna">
                <img src="../assets/Record.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default{
    name: 'comic-view',
    created(){
        window.addEventListener('scroll', this.handleScroll)
    },
    mounted(){
        const ar1 = document.getElementById('ar-1')
        const ar2 = document.getElementById('ar-2')
        const ar3 = document.getElementById('ar-3')
        const ar4 = document.getElementById('ar-4')
        if(this.isInViewport(ar1)){
            this.b1 = true
        }else{
            this.b1 = false
        }

    },
    data(){
        return {
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            iHeight: 0,
            cHeight: 0,
            iWidth: 0,
            cWidth: 0,
            vis: false,
        }
    },
    methods:{
        handleScroll(){
            const ar1 = document.getElementById('ar-1')
            const ar2 = document.getElementById('ar-2')
            const ar3 = document.getElementById('ar-3')
            const ar4 = document.getElementById('ar-4')
            if(this.isInViewport(ar1)){
                this.b1 = true
            }else{
                this.b1 = false
            }
            if(this.isInViewport(ar2)){
                this.b2 = true
            }else{
                this.b2 = false
            }
            if(this.isInViewport(ar3)){
                this.b3 = true
            }else{
                this.b3 = false
            }
            if(this.isInViewport(ar4, true)){
                this.b4 = true
            }else{
                this.b4 = false
            }
        },
        isInViewport(element, updateShit = false) {
            const rect = element.getBoundingClientRect();
            const bottom = rect.bottom < (window.innerHeight / 1.5) ? rect.bottom : rect.bottom / 1.5
            const right = rect.right - 1
            const visible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                right <= (window.innerWidth || document.documentElement.clientWidth)
            )
            if(updateShit){
                this.top = Math.round(rect.top)
                this.left = rect.left
                this.bottom = Math.round(bottom)
                this.right = right
                this.iHeight = window.innerHeight
                this.cHeight = document.documentElement.clientHeight
                this.iWidth = window.innerWidth
                this.cWidth = document.documentElement.clientWidth
                this.vis = visible
            }
            return visible;
        }
    }
}
</script>

<style lang="postcss">
.viewport-info{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99999;
}
.tester{
    position: fixed;
    z-index: 9999;
    /* bottom: 0;
    left: calc(50% - 62px); */
}
.glow{
    box-shadow: 0 0 15px 3px #FFF, 0 0 8px 2px #f0f, 0 0 5px 5px #0FF;
    /* width: 80.5vw; */
    z-index: 99;
    margin-bottom:2px;
    transform: scale(0.98, 0.99) !important;
    /* transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease !important; */
}
.glow-animation{
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.full-width{
    width: 100%;
}
.comics-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button{
    opacity: 1;
    bottom: 0;
    left: calc(50% - 62px);
}
.hidden-button{
    opacity: 0;
}
.animated{
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.fixed{
    position:fixed;
}
</style>