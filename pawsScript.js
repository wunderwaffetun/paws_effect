export function THE_ANIMATION_PAWS_MODULE(first, second, third, fourth, fifth){
    console.log(first)
    let maxBodyHeight = 0
    console.log(fifth)
    if (fifth == 'True'){
        for(let key in document.body.children){
            try{
                if(getComputedStyle(document.body.children[key]).height != 'auto'){
                    maxBodyHeight += Number(getComputedStyle(document.body.children[key]).height.slice(0, -2))
                }
            }catch{}
        }
        document.body.style.maxHeight = `${maxBodyHeight}px`
    }
    let Number_paws = first
    let Animation_Speed = second 
    let Height_Animation = third
    let mobile = fourth
    function THE_ANIMATION(Volume_paws, Animation_Speed, Height_Animation){
        let index_animation = 0
        const number_paws_line = 15
        const Number_paws_new = 20000/Volume_paws
        const body_height = Height_Animation
        const Speed = Animation_Speed/2
        function CreateChildren(class_elem){
            let div = document.createElement('div')
            div.className = `${class_elem}`
            div.classList.add('img_element')
            return div
        }
    
        function randomaiserdegree(){
            return Math.round(Math.random()*360)
        }
        function CreateInDependElement(index_animation){
            let div = document.createElement('div')
            div.innerHTML = `<div class="way way${index_animation}">
                                <div class="left_paw paw left_paw${index_animation}"></div>
                                <div class="right_paw paw right_paw${index_animation}"></div>
                            </div>`
            div.classList.add('paws_animate')
            div.classList.add(`paws_animate${index_animation}`)
            document.querySelector('body').append(div)
            for(let i = number_paws_line; i>0; i--){
                document.querySelector(`.left_paw${index_animation}`).append(CreateChildren(`left_paw_child${index_animation}`))
                document.querySelector(`.right_paw${index_animation}`).append(CreateChildren(`right_paw_child${index_animation}`))
            }
        }
        function random_paw_Coord(){
            let rand = Math.round(Math.random()*4)
            let randY
            switch(rand){
                case 0:
                    randY = body_height/5
                    break
                case 1:
                    randY = body_height/5*2
                    break
                case 2:
                    randY = body_height/5*3
                    break
                case 3:
                    randY = body_height/5*4
                    break
            }
            let randX = Math.round(Math.random()*(window.innerWidth*1.4)-window.innerWidth*0.4)
            if (randY == undefined){
                randY = 0
            }
            return [randX, randY]
        }
    
        function see(pause, Array){
            for(let i = 0; i<Array.length; i++){
                setTimeout(()=>{
                    document.querySelector('.img_element').style.transitionDuration = `${10/Speed}s !important`
                    Array[i].style.opacity = '1'
                },pause + i*10000/Speed)
            }
        }
        function dissepear(pause, Array){
            for(let i = 0; i<Array.length; i++){
                setTimeout(()=>{
                    Array[i].style.transitionDuration = `6s`
                    Array[i].style.opacity = '0'
                },pause + i*10000/Speed)
            }
        }
        function main(){
            CreateInDependElement(index_animation)
            let mainElement = document.querySelector(`.paws_animate${index_animation}`)
            mainElement.style.transform = `rotate(${randomaiserdegree()}deg)`
            let CurrentCoords = random_paw_Coord(),
                CoordX = CurrentCoords[0],
                CoordY = CurrentCoords[1]
            mainElement.style.top = `${CoordY}px`
            mainElement.style.left = `${CoordX}px`
            document.body.style.overflowX = 'hidden'
            let Arr1 = document.querySelectorAll(`.left_paw_child${index_animation}`)
            let Arr2 = document.querySelectorAll(`.right_paw_child${index_animation}`)
            see(5000/Speed, Arr1)
            see(0, Arr2)
            setTimeout(()=>{
                dissepear(0, Arr2)
            }, 10000/Speed)
            setTimeout(()=>{
                dissepear(5000/Speed, Arr1)
            }, 10000/Speed)
            index_animation+=1
        }
        setInterval(()=>{
            main()
        }, Number_paws_new)
    
        setTimeout(()=>{
                setInterval(()=>{
                    document.body.removeChild(document.querySelectorAll('.paws_animate')[0])
                },Number_paws_new)
            },400000/Speed)
        }
    if (((mobile == 'True') || (mobile == 'true'))&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        THE_ANIMATION(Number_paws, Animation_Speed, Height_Animation)
        } 
    else if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
        THE_ANIMATION(Number_paws, Animation_Speed, Height_Animation)
    }
}

