import iconsSprite from '../../assets/images/iconsSprite/icon-sprite.svg'


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?:string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "30" }  height={props.height|| "30"} viewBox={props.viewBox|| "0 0 30 30"}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>

    )
}


