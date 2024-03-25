import styled from 'styled-components'
import iconsSprite from '../../assets/images/iconsSprite/icon-sprite.svg'


type LinkPropsType = {
    linkId: string
    width?: string
    height?: string
    viewBox?:string
}


export const Link = (props:LinkPropsType) => {
    return (
        
        <a href="">
        <svg width={props.width || "30" }  height={props.height|| "30"} viewBox={props.viewBox|| "0 0 30 30"}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.linkId}`}/>
        </svg>
        </a>
        
    )
}


