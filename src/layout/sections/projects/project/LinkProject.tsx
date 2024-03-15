import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import iconsSprite from '../../../../assets/images/iconsSprite/icon-sprite.svg'


type LinkProjectPropsType = {
    title:string
    IconId: string
    width?: string
    height?: string
    viewBox?:string
}


export const LinkProject = (props:LinkProjectPropsType) => {
    return (
        <FlexWrapper gap={'10px'} >
                <svg width={props.width || "30" }  height={props.height|| "30"} viewBox={props.viewBox|| "0 0 30 30"}  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`${iconsSprite}#${props.IconId}`}/>
                </svg>
                <LinkStyledProject href="">{props.title}</LinkStyledProject>
        </FlexWrapper>
    )
};

const LinkStyledProject = styled.a`
    color:#FFFFFF;

`